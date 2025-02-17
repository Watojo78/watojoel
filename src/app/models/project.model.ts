import { Skill } from "./skill.model";

export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnailPath: string; // Path to the thumbnail image
  projectUrl?: string; // URL of the live project
  githubUrl?: string; // URL of the GitHub repository
  previewUrl?: string; // URL of a video demo or presentation (optional)
  techstack?: Skill[]; // Array of technologies used
  role?: string; // Your role in the project (optional)
  highlights?: string[]; // Key features or highlights (optional)
  challenges?: string; // Challenges faced and solutions (optional)
  outcome?: string; // Results or impact of the project (optional)
}
