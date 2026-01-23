import React, { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`container max-screen-xl px-5 pb-8 lg:px-12 mx-auto ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
