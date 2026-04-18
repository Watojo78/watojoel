import { RawSkillMinimalItem, SkillMinimal } from "./skill.model"// 1. On crée l'interface pour le Répéteur Directus
export interface Achievement {
  description: string;
}
export interface WorkExperience {
  id: number
  status: string
  company: string
  title: string
  start_date: string
  end_date: string
  currently_working: boolean
  achievements: Achievement[]
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
  achievements: Achievement[]
  environment: RawSkillMinimalItem[]
}
