
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role?: string;
  image?: string;
  rating: number;
  content: string;
  variant?: "default" | "bordered" | "elevated";
  className?: string;
}

const TestimonialCard = ({
  name,
  role,
  image,
  rating,
  content,
  variant = "default",
  className
}: TestimonialCardProps) => {
  const cardVariants = {
    default: "bg-white shadow-sm border",
    bordered: "border-2 border-hindserve-saffron/20",
    elevated: "shadow-lg",
  };
  
  return (
    <Card className={`overflow-hidden ${cardVariants[variant]} ${className}`}>
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={`${i < rating ? "text-hindserve-gold fill-hindserve-gold" : "text-gray-300"}`} 
            />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic">{content}</p>
        <div className="flex items-center">
          {image && (
            <div className="mr-4">
              <Avatar className="h-12 w-12 border-2 border-hindserve-green">
                <img src={image} alt={name} />
              </Avatar>
            </div>
          )}
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            {role && <p className="text-sm text-gray-500">{role}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
