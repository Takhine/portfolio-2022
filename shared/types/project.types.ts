export type ProjectPreviewType = {
  type: string;
  link: string;
};

export type ProjectType = {
  title: string;
  description: string;
  technologies: string[];
  website: string;
  details: string;
  source: string;
  projectLink: string;
  thumbnail: string;
  previews: ProjectPreviewType[];
};
