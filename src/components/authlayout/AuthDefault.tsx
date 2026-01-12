import React, { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

const AuthDefault = ({ children }: Props) => {
  return (
    <div className="relative flex content-center h-full w-full bg-white lg:w-full lg:px-8 lg:pt-0 xl:h-[100vh] xl:px-0">
      <div className="hidden lg:w-2/5 lg:block">
        <div className="relative bg-[url(/assets/img/illustration/card-footer-2.svg)] bg-no-repeat bg-center bg-cover h-full">
          <div className="flex justify-center content-center">
            <div className="mt-[10vh] px-28 ">
              <div className="flex w-full justify-center">
                <div className="flex flex-col space-y-2 text-center">
                  <h3 className="text-4xl font-bold text-white">
                    Hi, Welcome Back
                  </h3>
                  <p className="text-sm font-base text-white">
                    More effectively with optimized workflows.
                  </p>
                </div>
              </div>

              <div className="flex w-full justify-center content-center space-y-2 text-center">
                <Image
                  src={"/assets/img/illustration/medit.png"}
                  alt="background_auth"
                  className="w-400 h-400 lg:h-500 lg:w-400 pt-10"
                  width={300}
                  height={300}
                />
              </div>
              <div className="lg:pt-10 flex w-full justify-center">
                <div className="flex flex-col space-y-2 text-center">
                  <h3 className="text-3xl font-semibold text-white">
                    Automate, your workflow
                  </h3>
                  <p className="text-sm font-base text-white">
                    Empower your team to streamline task and automate process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/5">
        <div className="mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:pl-10 xl:max-w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthDefault;
