export type Article = {
  id: number
  slug: string
  title: string
  category: string
  tags: string[]
  level: "beginner" | "intermediate" | "advanced"
  content: string
}

export interface ActiveFilters {
  category?: string
  tag?: string
  level?: string
}


export interface FacetsType {
  category?: string[]
  tag?: string[]
  level?: string[]
}