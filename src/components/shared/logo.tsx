import { cn } from "@/lib/utils";
import React, { RefObject } from "react";

interface LogoProps {
  withText?: boolean;
  className?: string;
  ref?: React.RefObject<HTMLImageElement> | RefObject<HTMLDivElement>;
}

const Logo = ({ withText = false, className, ref }: LogoProps) => {
  if (!withText) {
    return (
      <div ref={ref}>
        <img
          src="/assets/icons/logo.svg"
          alt="LOGO"
          className={cn(className)}
        />
      </div>
    );
  }

  return (
    <div ref={ref ? ref : null}>
      <img
        src="/assets/icons/logo-text.svg"
        alt="LOGO TEXT"
        className={cn(className)}
      />
    </div>
  );
};

export default Logo;
