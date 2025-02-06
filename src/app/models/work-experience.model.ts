import { Skill } from "./skill.model"

export interface WorkExperience {
  id: number
  company: string
  title: string
  startDate: string // YYYY-MM-DD format is recommended
  endDate: string | null // Use null for current roles
  description?: string[] // Array of bullet points for responsibilities/achievements
  skills?: Skill[] // Optional: Array of relevant skills used in this role
}
