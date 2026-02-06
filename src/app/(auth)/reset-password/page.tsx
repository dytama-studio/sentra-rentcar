import React, { Suspense } from "react";
import ResetPasswordPage from "./ResetPassword";
import { Loader } from "@/components/loader";

const page = () => {
  <Suspense fallback={<Loader />}>
    <ResetPasswordPage />
  </Suspense>;
};

export default page;
