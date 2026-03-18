"use client"

import { problems } from "@/data/problems"
import { useRouter } from "next/navigation"

export default function ProblemList() {

  const router = useRouter()

  return (
    <div className="space-y-3">

      {problems.map((problem) => (
        <div
          key={problem.id}
          onClick={() => router.push(`/problems/${problem.slug}`)}
          className="flex justify-between items-center p-4 bg-zinc-900 hover:bg-zinc-800 rounded-lg cursor-pointer transition"
        >

          <div className="flex gap-4 items-center">

            <span className="text-green-500">
              ✓
            </span>

            <span className="text-white">
              {problem.title}
            </span>

          </div>

          <div className="flex gap-6 text-sm items-center">

            <span className="text-gray-400">
              {problem.acceptance}
            </span>

            <span
              className={
                problem.difficulty === "Easy"
                  ? "text-green-400"
                  : "text-yellow-400"
              }
            >
              {problem.difficulty}
            </span>

          </div>

        </div>
      ))}

    </div>
  )
}