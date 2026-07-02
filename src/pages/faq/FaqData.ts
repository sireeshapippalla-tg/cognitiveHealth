import { platformQuestions } from "./FaqPlatformData";
import { solutionsQuestions } from "./FaqSolutionsData";
import { generalQuestions } from "./FaqGeneralData";

export type TermBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; url: string };

export type TermSection = {
  id: string;
  title: string;
  category: "Platform" | "Solutions" | "General";
  blocks: TermBlock[];
};

export const termsSections: TermSection[] = [
  ...platformQuestions,
  ...solutionsQuestions,
  ...generalQuestions,
];
