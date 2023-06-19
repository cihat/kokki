import React from "react";
import cx from "@/lib/cx";

export interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: string;
  size?: "default" | "large";
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  as = "div",
  size = "default",
  children,
  className,
  ...props }: IContainerProps) {
  const sizes = {
    default: "max-w-screen-md mx-auto px-6",
    large: "max-w-screen-xl mx-auto px-6",
  };

  return React.createElement(
    as,
    { className: cx(sizes[size], className), ...props },
    children
  );
};