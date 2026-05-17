import { ResumePreview } from "@/components/ResumePreview";

export const metadata = {
  title: "Resume | Sahil Qureshi",
  description: "Resume preview and downloadable PDF for Sahil Qureshi.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen py-16">
      <ResumePreview standalone />
    </div>
  );
}
