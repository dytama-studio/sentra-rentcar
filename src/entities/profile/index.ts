import { z } from "zod";

export const FormProfileSchema = z.object({
  name: z.string().min(1, { message: "Nama is required" }),
  slug: z.string().optional(),
  logoUrl: z.any().optional(),
  description: z.string().min(1, { message: "Description is required" }),
  googleMapUrl: z.string().optional(),
  whatsappTemplate: z.string().min(1, { message: "Message is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  email: z.email({ message: "That email address is invalid." }),
  address: z.string().min(1, { message: "Address is required" }),
});
