
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "default", size = "md" }: LogoProps) => {
  const textColor = variant === "white" ? "text-white" : "text-hindserve-primary";
  
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10"
  };

  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center space-x-1">
        {/* Logo with Indian flag colors */}
        <svg
          viewBox="0 0 60 40"
          className={`${sizeClasses[size]} mr-2 animate-fade-in`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="animate-slide-up" style={{ animationDelay: "100ms" }}>
            {/* Saffron section (top) */}
            <rect x="10" y="5" width="40" height="10" fill="#FF9933" rx="2" />
            {/* White section (middle) */}
            <rect x="10" y="15" width="40" height="10" fill="#FFFFFF" rx="0" />
            {/* Green section (bottom) */}
            <rect x="10" y="25" width="40" height="10" fill="#138808" rx="2" />
            {/* Service icon */}
            <path
              d="M32 20a4 4 0 11-8 0 4 4 0 018 0z"
              fill="#000080"
              className="animate-pulse"
              style={{ animationDelay: "300ms" }}
            />
            {/* Home outline */}
            <path
              d="M10 15L5 10h5zm40 0l5-5h-5z"
              fill="#FF9933"
              stroke="#000080"
              strokeWidth="1"
            />
            <path
              d="M10 25L5 30h5zm40 0l5 5h-5z"
              fill="#138808" 
              stroke="#000080"
              strokeWidth="1"
            />
          </g>
        </svg>
        <span className={`font-bold text-xl ${textColor} tracking-tight animate-slide-up`}>
          HindServe
        </span>
      </div>
    </Link>
  );
};

export default Logo;
