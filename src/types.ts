export type tPage = 'HOME' | 'PROJECTS'; // Type definition for the page state - first declared in App.tsx

export type tProject = {
  id: string;
  name: string;
  date: string;
  links: { github: string };
}; // Type definition for project details - first declared in Projects.tsx
