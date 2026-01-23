export type Article = {
  id: number
  slug: string
  title: string
  category: string
  tags: string[]
  level: "beginner" | "intermediate" | "advanced"
  content: string
}