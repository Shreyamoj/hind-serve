
import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

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
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16 lg:py-20",
    lg: "py-16 md:py-24 lg:py-32",
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

      <Container size="default" className="relative z-10">
        <div className={`flex flex-col ${alignClasses[align]} max-w-3xl ${textClasses[align]}`}>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 ${backgroundImage ? "text-white" : ""}`}>
            {title}
          </h1>
          <p className={`text-lg md:text-xl mb-6 md:mb-8 ${backgroundImage ? "text-gray-100" : "text-gray-600"} max-w-xl ${textClasses[align]}`}>
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
      </Container>
    </div>
  );
};

export default HeroSection;
