
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "default", size = "md" }: LogoProps) => {
  const textColor = variant === "white" ? "text-white" : "text-hindserve-saffron";
  
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
            {/* Ashoka Chakra */}
            <circle cx="30" cy="20" r="4" fill="#000080" className="animate-pulse" style={{ animationDelay: "300ms" }} />
            <circle cx="30" cy="20" r="3.5" fill="none" stroke="#000080" strokeWidth="0.5" />
            {/* Simplified spokes of the wheel */}
            {[...Array(12)].map((_, i) => (
              <line 
                key={i}
                x1="30"
                y1="20"
                x2={30 + 3 * Math.cos(i * Math.PI / 6)}
                y2={20 + 3 * Math.sin(i * Math.PI / 6)}
                stroke="#000080"
                strokeWidth="0.5"
              />
            ))}
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
          Hind<span className="text-hindserve-green">Serve</span>
        </span>
      </div>
    </Link>
  );
};

export default Logo;
