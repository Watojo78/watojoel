import { Skill } from "./skill.model";

export interface Project {
  id: number;
  title: string;
  desc: string;
  "summary": string; // Short summary of the project
  project_url: string; // URL of the live project
  repository_url: string; // URL of the repository
  thumbnail_path: string; // Path to the thumbnail image
  techstack: Skill[]; // Array of technologies used
  role?: string; // Your role in the project (optional)
  highlights?: string[]; // Key features or highlights (optional)
  challenges?: string; // Challenges faced and solutions (optional)
  outcome?: string; // Results or impact of the project (optional)
}
