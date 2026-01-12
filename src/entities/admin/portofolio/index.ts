import { z } from "zod";

export const PortofolioSchema = z.object({
  title: z.string().min(1, { message: "Portofolio title cannot empty" }),
  slug: z
    .string()
    .min(1, "Slug Required")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug only lowerchase, number, and strip"
    ),
  type: z.string().min(1, { message: "Please choose type" }),
  overviewDescription: z.any().optional(),
  technologies: z.array(z.string()).optional(),
  challenges: z.string().optional(),
  solutions: z.string().optional(),
  features: z.string().optional(),
  client: z.string().min(1, { message: "Client cannot empty" }),
  projectYear: z.string().optional(),
  projectLink: z.string().optional(),
  duration: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  metaKeywords: z.string().optional(),
  cover: z.any().optional(),
});
