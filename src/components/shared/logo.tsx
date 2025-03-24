import { cn } from "@/utils/cn.util";

interface LogoProps {
  withText?: boolean;
  imgClassName?: string;
  className?: string;
}

const Logo = ({ withText = false, imgClassName, className }: LogoProps) => {
  if (!withText) {
    return (
      <div className={cn("flex justify-start items-center gap-1", className)}>
        <img
          src="/assets/vectors/logo.svg"
          alt="LOGO"
          className={cn("h-3", imgClassName)}
        />
      </div>
    );
  }

  return (
    <div>
      <div className={cn("flex justify-start items-center gap-1", className)}>
        <img
          src="/assets/vectors/logo.svg"
          alt="LOGO"
          className={cn("size-5", imgClassName)}
        />
        <span className="text-app-primary-dark font-medium tracking-tighter text-xl md:text-2xl font-dm-mono">
          Nxtgen
        </span>
      </div>
    </div>
  );
};

export default Logo;
