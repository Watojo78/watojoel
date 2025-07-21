// Fichier : project.model.ts

import { RawSkillMinimalItem, SkillMinimal } from "./skill.model";



// Modèle pour le projet BRUT (tel que reçu de l'API)
export interface RawProject {
  id: number;
  title: string;
  desc: string;
  summary: string;
  project_url: string;
  repository_url: string;
  thumbnail_path: string;
  techstack: RawSkillMinimalItem[];
}

// Modèle pour le projet FINAL (tel qu'utilisé dans l'app)
export interface Project {
  id: number;
  title: string;
  desc: string;
  summary: string;
  project_url: string;
  repository_url: string;
  thumbnail_url: string; // <-- On utilise une URL complète
  techstack: SkillMinimal[]; // <-- Le techstack est simplifié
}
