import { Certification } from "./certification.model"
import { Skill } from "./skill.model"

export interface Education {
  id: number
  institution: string
  degree: string
  startDate: string
  endDate: string
  description?: string[]; // Optional: Details about coursework, specializations, etc.
  relevantSkills?: Skill[]; // Optional: Skills gained during education
  certifications?: Certification[]; // Optional: Certifications related to education
}
