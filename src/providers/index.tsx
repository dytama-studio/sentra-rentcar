import { TRPCReactProvider } from "@/libs/trpc/react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import ReduxProvider from "@/store/provider";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <TRPCReactProvider>
      <ReduxProvider>
        <NuqsAdapter>{children}</NuqsAdapter>
      </ReduxProvider>
    </TRPCReactProvider>
  );
};
