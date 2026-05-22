const projects = [
  {
    id: "p1",
    userId: "demo-user",
    title: "Company Culture Report",
    desc: "Annual report on company culture and values",
    status: "completed",
    wordCount: 2100,
    starred: true,
    updatedAt: "2026-01-13",
    createdAt: "2026-02-10",
  },
  {
    id: "p2",
    userId: "demo-user",
    title: "AI in Healthcare 2026",
    desc: "Blog post exploring the latest AI applications in healthcare",
    status: "completed",
    wordCount: 1250,
    starred: true,
    updatedAt: "2026-02-17",
    createdAt: "2026-02-12",
  },
  {
    id: "p3",
    userId: "demo-user",
    title: "Product Launch Email Sequence",
    desc: "5-part email sequence for new SaaS product launch",
    status: "completed",
    wordCount: 890,
    starred: false,
    updatedAt: "2026-01-15",
    createdAt: "2026-02-13",
  },
  {
    id: "p4",
    userId: "demo-user",
    title: "Social Media Campaign - Summer Sale",
    desc: "Series of social media posts for summer sale promotion",
    status: "draft",
    wordCount: 0,
    starred: false,
    updatedAt: "2026-02-15",
    createdAt: "2026-02-14",
  },
];

export function getProjects() {
  return projects;
}

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}

export function createProject(data) {
  const newProject = {
    id: crypto.randomUUID(),
    userId: "demo-user",
    title: data.title,
    desc: data.description ?? "",
    status: "draft",
    wordCount: 0,
    starred: false,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  };

  projects.push(newProject);

  return newProject;
}
