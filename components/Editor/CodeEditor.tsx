"use client"

import Editor from "@monaco-editor/react"
import { useState, useEffect } from "react"

export default function CodeEditor({ problem }: any) {

  const [language, setLanguage] = useState("javascript")
  const [code, setCode] = useState("")
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)

  // ✅ Load starter code from problem
  useEffect(() => {
    setCode(problem.starterCode[language])
  }, [language, problem])

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
  }

  // ✅ Parse input like "[2,7,11,15],9"
  const parseInput = (input: string) => {
    const [arr, target] = input.split(",")

    return {
      nums: JSON.parse(arr),
      target: Number(target)
    }
  }

  // ✅ Wrap code (IMPORTANT)
  const wrapCode = (input: string) => {

    const { nums, target } = parseInput(input)

    if (language === "javascript") {
      return `
${code}

const nums = ${JSON.stringify(nums)};
const target = ${target};

const result = ${problem.functionName}(nums, target);
console.log(JSON.stringify(result));
`
    }

    if (language === "python") {
      return `
${code}

nums = ${JSON.stringify(nums)}
target = ${target}

result = Solution().${problem.functionName}(nums, target)
print(result)
`
    }

    // (Java/C++ can be added later)
    return code
  }

  // ✅ RUN (single testcase)
  const handleRun = async () => {

    setLoading(true)
    setOutput("Running...")

    try {
      const tc = problem.testcases[0]

      const res = await fetch("/api/run", {
        method: "POST",
        body: JSON.stringify({
          code: wrapCode(tc.input),
          language
        })
      })

      const data = await res.json()

      if (data.error) {
        setOutput("❌ " + data.error)
      } else {
        setOutput("Output:\n" + data.output)
      }

    } catch {
      setOutput("❌ Error running code")
    }

    setLoading(false)
  }

  // ✅ SUBMIT (all testcases)
  const handleSubmit = async () => {

    setLoading(true)
    setOutput("Submitting...")

    const allTestcases = [
      ...problem.testcases,
      ...problem.hiddenTestcases
    ]

    for (let i = 0; i < allTestcases.length; i++) {

      const tc = allTestcases[i]

      const res = await fetch("/api/run", {
        method: "POST",
        body: JSON.stringify({
          code: wrapCode(tc.input),
          language
        })
      })

      const data = await res.json()

      if (data.error) {
        setOutput(`❌ Runtime Error on testcase ${i + 1}`)
        setLoading(false)
        return
      }

      if (data.output.trim() !== tc.expected.trim()) {
        setOutput(`❌ Wrong Answer on testcase ${i + 1}
Expected: ${tc.expected}
Got: ${data.output}`)
        setLoading(false)
        return
      }
    }

    setOutput("✅ Accepted 🎉")
    setLoading(false)
  }

  return (
    <div className="h-full flex flex-col bg-[#0f0f0f]">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#1a1a1a] border-b border-zinc-800">

        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="bg-zinc-800 px-3 py-1 rounded text-sm"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>

        <div className="flex gap-2">

          <button
            onClick={handleRun}
            disabled={loading}
            className="bg-zinc-700 px-4 py-1 rounded text-sm"
          >
            Run
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-green-600 px-4 py-1 rounded text-sm"
          >
            Submit
          </button>

        </div>

      </div>

      {/* EDITOR */}
      <div className="flex-1">
        <Editor
          height="100%"
          theme="vs-dark"
          language={language}
          value={code}
          onChange={(value) => setCode(value || "")}
        />
      </div>

      {/* OUTPUT */}
      <div className="h-40 bg-black border-t border-zinc-800 p-3 text-sm text-gray-300 overflow-auto">
        <pre>{output || "Run your code..."}</pre>
      </div>

    </div>
  )
}