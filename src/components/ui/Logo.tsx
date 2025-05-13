
import { Circle, Square, Triangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo = ({ size = "md", className }: LogoProps) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center justify-center">
        <Circle
          className="text-[#FF9933] w-6 h-6 absolute animate-pulse"
          fill="#FF9933"
          strokeWidth={0}
        />
        <Square
          className="text-white w-4 h-4 absolute animate-spin"
          style={{ animationDuration: "10s" }}
          fill="white"
          strokeWidth={0}
        />
        <Triangle
          className="text-[#138808] w-3 h-3 absolute animate-bounce"
          style={{ animationDelay: "0.5s" }}
          fill="#138808"
          strokeWidth={0}
        />
      </div>
      <div className={cn("font-bold flex flex-col", sizeClasses[size])}>
        <span className="text-hindserve-primary bg-clip-text text-transparent bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808]">
          HindServe
        </span>
      </div>
    </div>
  );
};

export default Logo;
