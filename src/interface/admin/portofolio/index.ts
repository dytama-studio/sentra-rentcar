export type PortofolioValues = {
  title: string;
  slug: string;
  type: string;
  overviewDescription?: Record<string, any>;
  technologies?: string[];
  challenges?: string;
  solutions?: string;
  features?: string;
  client?: string;
  projectYear?: string;
  projectLink?: string;
  duration?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  cover?: any;
  createdAt?: string;
  updateAt?: string;
};

export type PortofolioPhotosValues = {
  portolioId: string;
  url: string;
  alt: string;
  isCover: boolean;
  createdAt: string;
};
