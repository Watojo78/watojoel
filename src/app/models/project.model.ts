import { Skill } from "./skill.model";

export interface Project {
  id: number
  title: string
  desc: string
  summary: string
  project_url: string
  repository_url: string
  thumbnail_path: string
  techstack: Skill[]
  role?: string // Your role in the project (optional)
  highlights?: string[] // Key features or highlights (optional)
  challenges?: string // Challenges faced and solutions (optional)
  outcome?: string // Results or impact of the project (optional)
}
