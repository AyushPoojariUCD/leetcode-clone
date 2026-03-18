import CodeEditor from "@/components/Editor/CodeEditor"

export default function ProblemEditor({ problem }) {

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white">

      {/* LEFT SIDE */}

      <div className="w-1/2 p-6 border-r border-zinc-800 overflow-y-auto">

        {/* HEADER */}

        <div className="mb-6">

          <h1 className="text-2xl font-semibold">
            {problem.id}. {problem.title}
          </h1>

          <div className="flex items-center gap-3 mt-3">

            {/* Difficulty Badge */}
            <span className={`px-2 py-1 rounded text-xs font-medium
              ${problem.difficulty === "Easy" && "bg-green-900 text-green-400"}
              ${problem.difficulty === "Medium" && "bg-yellow-900 text-yellow-400"}
              ${problem.difficulty === "Hard" && "bg-red-900 text-red-400"}
            `}>
              {problem.difficulty}
            </span>

            {/* Tags */}
            {problem.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-zinc-800 rounded text-xs text-gray-300"
              >
                {tag}
              </span>
            ))}

          </div>

        </div>

        {/* DESCRIPTION */}

        <div className="text-gray-300 leading-relaxed space-y-3 mb-8">

          {problem.description.trim().split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}

        </div>

        {/* EXAMPLES */}

        <h2 className="text-lg font-semibold mb-3">
          Examples
        </h2>

        <div className="space-y-4">

          {problem.examples.map((ex, i) => (

            <div
              key={i}
              className="bg-[#1a1a1a] border border-zinc-800 rounded-lg p-4"
            >

              <p className="text-sm text-gray-400 mb-2">
                Example {i + 1}
              </p>

              <div className="font-mono text-sm space-y-1">

                <p>
                  <span className="text-gray-400">Input:</span>{" "}
                  {ex.input}
                </p>

                <p>
                  <span className="text-gray-400">Output:</span>{" "}
                  {ex.output}
                </p>

                {ex.explanation && (
                  <p className="text-gray-500">
                    <span className="text-gray-400">Explanation:</span>{" "}
                    {ex.explanation}
                  </p>
                )}

              </div>

            </div>

          ))}

        </div>

        {/* CONSTRAINTS */}

        <h2 className="text-lg font-semibold mt-8 mb-3">
          Constraints
        </h2>

        <ul className="space-y-2 text-sm text-gray-300">

          {problem.constraints.map((c, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-gray-500">•</span>
              {c}
            </li>
          ))}

        </ul>

      </div>

      {/* RIGHT SIDE */}

      <div className="w-1/2">
        <CodeEditor problem = {problem}/>
      </div>

    </div>
  )
}