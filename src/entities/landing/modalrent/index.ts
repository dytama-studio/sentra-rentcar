import { z } from "zod";

export const ModalRentSchema = z.object({
  start_date: z.string().min(1, { message: "Tanggal tidak boleh kosong" }),
  end_date: z.string().min(1, { message: "Tanggal tidak boleh kosong" }),
  car_id: z.string().min(1, { message: "Tanggal tidak boleh kosong" }),
  car_name: z.string().min(1, { message: "Tanggal tidak boleh kosong" }),
  name: z.string().min(1, { message: "Nama tidak boleh kosong" }),
  contact: z.string().min(1, { message: "Contact tidak boleh kosong" }),
  address: z.string().min(1, { message: "Address tidak boleh kosong" }),
});
