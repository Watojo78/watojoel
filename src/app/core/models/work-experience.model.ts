export interface WorkExperience {
  id: number
  company: string
  role: string
  isCurrent: boolean
  startDate: string
  endDate: string
  achievements: Achievement[]
  environment: Environment[]
  translations?: Record<string, WorkExperienceTranslation>
}

export interface Achievement {
  description: string
}

export interface Environment {
  name: string
  category: string
}

export interface WorkExperienceTranslation {
  role?: string;
  company?: string;
  achievements?: Achievement[];
}
