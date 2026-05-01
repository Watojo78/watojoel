export interface Education {
  id: number
  institution: string
  degree: string
  field: string
  gpa: number
  isCurrent: boolean
  startDate: string
  endDate?: string
  translations?: Record<string, EducationTranslation>
}

export interface EducationTranslation {
  institution?: string;
  degree?: string;
  field?: string;
}
