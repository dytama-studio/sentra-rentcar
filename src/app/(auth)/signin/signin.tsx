"use client";

import React, { useRef, useState } from "react";
import { type ErrorContext } from "@better-fetch/fetch";
import AuthDefault from "@/components/authlayout/AuthDefault";
import SignInModule, { SignInFormRefType } from "@/modules/auth/signin/module";
import { SubmitHandler } from "react-hook-form";
import { UserLogin } from "@/interface/auth";
import { useRouter } from "next/navigation";
import { authClient } from "@/server/auth/client";

const SignInPage = () => {
  const ref = useRef<SignInFormRefType>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSignIn: SubmitHandler<UserLogin> = async (values) => {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: async () => {
          setLoading(false);
          router.push("/admin/dashboard");
        },
        onError: (ctx: ErrorContext) => {
          console.error("Better Auth signIn error:", ctx);
          setLoading(false);
          setErrMsg(ctx.error.message ?? "Something went wrong.");
        },
      }
    );
  };

  return (
    <AuthDefault>
      <SignInModule
        ref={ref}
        onSubmit={handleSignIn}
        errorMsg={errMsg}
        onLoading={loading}
      />
    </AuthDefault>
  );
};

export default SignInPage;
