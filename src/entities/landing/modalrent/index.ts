import { z } from "zod";

export const ModalRentSchema = z.object({
  date_rent: z.string().min(1, { message: "Tanggal tidak boleh kosong" }),
  day_rent: z.string().min(1, { message: "Hari tidak boleh kosong" }),
  name: z.string().min(1, { message: "Nama tidak boleh kosong" }),
  contact: z.string().min(1, { message: "Contact tidak boleh kosong" }),
  address: z.string().min(1, { message: "Address tidak boleh kosong" }),
});
