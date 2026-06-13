export const contentPackageWorkflow = {
  id: "content_package",
  label: "Full Content Package",
  model: process.env.GEMINI_MODEL || "gemini-2.5-flash",
  steps: [
    {
      id: "planner",
      label: "Planning content strategy",
      agent: "plannerAgent",
    },
    {
      id: "writer",
      label: "Writing main draft",
      agent: "writerAgent",
    },
    {
      id: "editor",
      label: "Editing and improving clarity",
      agent: "editorAgent",
    },
    {
      id: "repurpose",
      label: "Creating platform-specific versions",
      agent: "repurposeAgent",
    },
  ],
};
