import { z } from "zod";

export const FormAddCarSchema = z.object({
  // organizationId: z.string(),
  // branchId: z.string(),
  categoryId: z.string().min(1, { message: "Category is required" }),
  name: z.string().min(1, { message: "Name is Required" }),
  pricePerDay: z.number().min(1, { message: "Price is required" }),
  description: z.string().optional(),
  thumbnail: z.any().optional(),
  status: z.string().min(1, { message: "Pleese Select Status" }),
  // isActive: z.boolean(),
  transmission: z.string().min(1, { message: "Pleese Select Transmission" }),
  capacity: z.number().min(1, { message: "Capacity Required" }),
  storage: z.number().min(1, { message: "Storage Required" }),
});

export const FormAddCategorySchema = z.object({
  name: z.string().min(1, { message: "Name is requiered" }),
});
