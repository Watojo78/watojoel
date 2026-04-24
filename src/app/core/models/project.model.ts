export interface Project {
  id: number
  title: string
  summary: string
  repositoryUrl: string
  previewUrl: string
  thumbnailUrl: string
  techstack: Techstack[]
}

export interface Techstack {
  name: string
  category: string
}
