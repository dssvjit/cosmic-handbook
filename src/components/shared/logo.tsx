import { cn } from "@/utils/cn.util";

interface LogoProps {
  withText?: boolean;
  className?: string;
}

const Logo = ({ withText = false, className }: LogoProps) => {
  if (!withText) {
    return (
      <div className="flex justify-start items-center gap-1">
        <img
          src="/assets/vectors/logo.svg"
          alt="LOGO"
          className={cn("h-3", className)}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-start items-center gap-1">
        <img
          src="/assets/vectors/logo.svg"
          alt="LOGO"
          className={cn("size-5", className)}
        />
        <span className="text-app-primary-dark font-medium tracking-tighter text-xl md:text-2xl font-dm-mono">
          Nxtgen
        </span>
      </div>
    </div>
  );
};

export default Logo;
