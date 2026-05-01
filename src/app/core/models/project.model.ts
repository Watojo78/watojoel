export interface Project {
  id: number
  title: string
  summary: string
  repositoryUrl: string
  previewUrl: string
  thumbnailUrl: string
  techstack: Techstack[]
  translations?: Record<string, ProjectTranslation>
}

export interface Techstack {
  name: string
  category: string
}

export interface ProjectTranslation {
  title?: string;
  summary?: string;
  description?: string;
  role?: string;
}
