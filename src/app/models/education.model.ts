import { Skill } from "./skill.model"

export interface Education {
  id: number
  status: string
  date_created?: string
  date_updated?: string
  gpa: string
  institution: string
  start_date: string
  end_date: string
  degree: string
  field_of_study: string
  relevant_skills?: Skill[]
}