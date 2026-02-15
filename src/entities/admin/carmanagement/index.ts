import { z } from "zod";

export const FormAddCarSchema = z.object({
  organizationId: z.string(),
  branchId: z.string(),
  categoryId: z.string().min(1, { message: "Category is Required" }),
  name: z.string().min(1, { message: "Name is Required" }),
  pricePerDay: z.number().min(1, { message: "Price is Required" }),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
  status: z.string().min(1, { message: "Pleese Select Status" }),
  isActive: z.boolean(),
  transmission: z.string().min(1, { message: "Pleese Select Transmission" }),
  capacity: z.number().min(1, { message: "Capacity Required" }),
  storage: z.number().min(1, { message: "Storage Required" }),
});
