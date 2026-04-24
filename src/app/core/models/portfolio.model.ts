import { Project } from "./project.model";
import { Testimony } from "./testimony.model";
import { Education } from "./education.model";
import { Profile } from "./profile.model";
import { Skill } from "./skill.model";
import { WorkExperience } from "./work-experience.model";

export interface Portfolio {
  profile: Profile;
  projects: Project[];
  educations: Education[];
  work_experiences: WorkExperience[];
  skills: Skill[];
  testimonies: Testimony[];
}
