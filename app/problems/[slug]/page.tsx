import { problems } from "@/data/problems"
import ProblemEditor from "@/components/Problems/ProblemEditor"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const problem = problems.find(
    (p) => p.slug === slug
  )

  if (!problem) {
    return <div>Problem not found</div>
  }

  return <ProblemEditor problem={problem} />
}