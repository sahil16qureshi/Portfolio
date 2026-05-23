import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const externalLinks = {
  github: "https://github.com/sahil16qureshi",
  linkedin: "https://www.linkedin.com/in/sahilqureshi1/",
  email: "mailto:sahil16qureshi@gmail.com",
  resume: "/resume/Sahil_Qureshi.pdf",
};
