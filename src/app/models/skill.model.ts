export interface Skill {
  id?: number
  status?: string
  date_created?: string
  date_updated?: string
  name: string
  logo_path?: string
  category?: string
}

// Modèle pour une compétence simple (donnée finale)
export interface SkillMinimal {
  name: string;
}

// Modèle pour un item du techstack brut (donnée brute de l'API)
export interface RawSkillMinimalItem {
  skills_id: {
    name: string;
  };
}
