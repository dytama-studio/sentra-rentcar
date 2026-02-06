"use client";
import React, { useRef, useState } from "react";
import AuthDefault from "@/components/authlayout/AuthDefault";
import ForgetPasswordModule, {
  ForgetPasswordFormRefType,
} from "@/modules/auth/forgetpass/module";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { ForgetPasswordValues } from "@/interface/auth";
import { authClient } from "@/server/auth/client";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const ref = useRef<ForgetPasswordFormRefType>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleForgetPass: SubmitHandler<ForgetPasswordValues> = async (
    values
  ) => {
    await authClient.requestPasswordReset(
      { email: values.email, redirectTo: "/reset-password" },
      {
        onRequest: () => setLoading(true),
        onSuccess: () => {
          setLoading(false);
          setErrMsg("");
          toast.success(
            "Jika email terdaftar, link reset password telah dikirim"
          );
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
      <ForgetPasswordModule
        ref={ref}
        onSubmit={handleForgetPass}
        errorMsg={errMsg}
        onLoading={loading}
      />
    </AuthDefault>
  );
};

export default ForgetPassword;
