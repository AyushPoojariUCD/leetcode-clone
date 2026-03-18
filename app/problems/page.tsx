import ProblemList from "@/components/Problems/ProblemsList"

export default function ProblemsPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Problems
      </h1>

      <ProblemList />

    </div>
  )
}