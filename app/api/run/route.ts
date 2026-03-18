import { NextResponse } from "next/server"

const languageMap: any = {
  javascript: 63,
  python: 71,
  java: 62,
  cpp: 54
}

export async function POST(req: Request) {

  const { code, language } = await req.json()

  const res = await fetch(
    "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": process.env.RAPID_API_KEY!,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
      },
      body: JSON.stringify({
        source_code: code,
        language_id: languageMap[language]
      })
    }
  )

  const result = await res.json()

  if (result.stderr) {
    return NextResponse.json({ error: result.stderr })
  }

  if (result.compile_output) {
    return NextResponse.json({ error: result.compile_output })
  }

  return NextResponse.json({
    output: result.stdout || ""
  })
}