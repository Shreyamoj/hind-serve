
import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "lg" | "xl" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", ...props }, ref) => {
    const sizeClasses = {
      default: "max-w-7xl",
      sm: "max-w-3xl",
      lg: "max-w-7xl",
      xl: "max-w-screen-2xl",
      full: "max-w-full"
    };

    return (
      <div
        ref={ref}
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:px-8",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export { Container };
