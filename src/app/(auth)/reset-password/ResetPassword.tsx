"use client";
import React, { useRef, useState } from "react";
import AuthDefault from "@/components/authlayout/AuthDefault";
import ResetPasswordModules from "@/modules/auth/resetpass";
import { useRouter, useSearchParams } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { authClient } from "@/server/auth/client";
import { toast } from "react-toastify";
import { ResetPasswordFormRefType } from "@/modules/auth/resetpass/module";
import { ResetPasswordValues } from "@/interface/auth";

const ResetPasswordPage = () => {
  const ref = useRef<ResetPasswordFormRefType>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const handleForgetPass: SubmitHandler<ResetPasswordValues> = async (
    values
  ) => {
    if (!token) {
      setErrMsg("Token reset password tidak valid");
      return;
    }

    await authClient.resetPassword(
      {
        token,
        newPassword: values.password,
      },
      {
        onRequest: () => setLoading(true),
        onSuccess: () => {
          setLoading(false);
          setErrMsg("");
          toast.success("Password berhasil direset, silakan login kembali");
          router.push("/signin");
        },
        onError: (ctx) => {
          setLoading(false);
          setErrMsg(ctx.error.message ?? "Terjadi kesalahan");
        },
      }
    );
  };

  return (
    <AuthDefault>
      <ResetPasswordModules
        ref={ref}
        onSubmit={handleForgetPass}
        errorMsg={errMsg}
        onLoading={loading}
      />
    </AuthDefault>
  );
};

export default ResetPasswordPage;
