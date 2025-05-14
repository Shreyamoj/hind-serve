
import * as React from "react"
import { cn } from "@/lib/utils"

interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const GridLayout = React.forwardRef<HTMLDivElement, GridLayoutProps>(
  ({ 
    className, 
    columns = { default: 1, sm: 2, lg: 3 },
    gap = "md", 
    children, 
    ...props 
  }, ref) => {
    const gapClasses = {
      none: "gap-0",
      xs: "gap-2",
      sm: "gap-3",
      md: "gap-4 md:gap-6",
      lg: "gap-6 md:gap-8",
      xl: "gap-8 md:gap-10"
    };

    const getColumnsClasses = () => {
      const { default: defaultCols, sm, md, lg, xl } = columns;
      let classes = `grid-cols-${defaultCols}`;
      
      if (sm) classes += ` sm:grid-cols-${sm}`;
      if (md) classes += ` md:grid-cols-${md}`;
      if (lg) classes += ` lg:grid-cols-${lg}`;
      if (xl) classes += ` xl:grid-cols-${xl}`;
      
      return classes;
    };

    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          getColumnsClasses(),
          gapClasses[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GridLayout.displayName = "GridLayout";

export { GridLayout };
