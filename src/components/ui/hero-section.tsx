
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  backgroundImage?: string;
  overlayColor?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
}

const HeroSection = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonUrl = "#",
  secondaryButtonText,
  secondaryButtonUrl = "#",
  backgroundImage,
  overlayColor = "bg-black/40",
  children,
  className = "",
  align = "left",
  size = "md",
}: HeroSectionProps) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const sizeClasses = {
    sm: "py-12",
    md: "py-20",
    lg: "py-32",
  };

  const textClasses = {
    left: "",
    center: "mx-auto",
    right: "ml-auto",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* Overlay for background images */}
      {backgroundImage && (
        <div className={`absolute inset-0 ${overlayColor}`}></div>
      )}

      <div className="container-custom relative z-10">
        <div className={`flex flex-col ${alignClasses[align]} max-w-3xl ${textClasses[align]}`}>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${backgroundImage ? "text-white" : ""}`}>
            {title}
          </h1>
          <p className={`text-lg md:text-xl mb-8 ${backgroundImage ? "text-gray-100" : "text-gray-600"} max-w-xl ${textClasses[align]}`}>
            {subtitle}
          </p>

          <div className={`flex flex-wrap gap-4 ${align === "center" ? "justify-center" : ""}`}>
            {primaryButtonText && (
              <Button asChild size="lg" className="bg-hindserve-saffron hover:bg-hindserve-saffron/90 text-white animate-fade-in">
                <a href={primaryButtonUrl}>{primaryButtonText}</a>
              </Button>
            )}
            {secondaryButtonText && (
              <Button asChild size="lg" variant="outline" className="border-hindserve-saffron text-hindserve-saffron hover:bg-hindserve-saffron/10 animate-fade-in" style={{ animationDelay: "150ms" }}>
                <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
              </Button>
            )}
          </div>

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
