import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(1, { message: "Email tidak boleh kosong" }),
  password: z.string().min(1, { message: "Password tidak boleh kosong" }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Nama tidak boleh kosong" }),
  email: z.string().min(1, { message: "Email tidak boleh kosong" }),
  password: z.string().min(1, { message: "Password tidak boleh kosong" }),
});

export const ForgetSchema = z.object({
  email: z.string().min(1, { message: "Email tidak boleh kosong" }),
});

export const ResetPasswordSchema = z
  .object({
    password: z.string().min(1, "Password tidak boleh kosong"),
    confirmPassword: z
      .string()
      .min(1, "Konfirmasi password tidak boleh kosong"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dan konfirmasi password tidak sama",
    path: ["confirmPassword"],
  });
