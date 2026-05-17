import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const externalLinks = {
  github: "#REPLACE_THIS_WITH_ACTUAL_LINK",
  linkedin: "#REPLACE_THIS_WITH_ACTUAL_LINK",
  email: "mailto:REPLACE_THIS_WITH_ACTUAL_EMAIL",
  resume: "/resume/Sahil_Qureshi_Resume.pdf",
  resumePreview: "/resume/resume-preview.png",
};
