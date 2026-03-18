export type Problem = {
  id: number
  title: string
  difficulty: "Easy" | "Medium" | "Hard"
  acceptance: number
  tags: string[]
  solved: boolean
}