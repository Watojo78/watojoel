import { RawSkillMinimalItem, SkillMinimal } from "./skill.model"
export interface WorkExperience {
  id: number
  status: string
  company: string
  title: string
  start_date: string
  end_date: string
  currently_working: boolean
  description: string
  environment: SkillMinimal[]
}

export interface RawWorkExperience {
  id: number
  status: string
  company: string
  title: string
  start_date: string
  end_date: string
  currently_working: boolean
  description: string
  environment: RawSkillMinimalItem[]
}
