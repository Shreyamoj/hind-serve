
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

interface ServiceCardProps {
  id: string | number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  location?: string;
  rating?: number;
  reviews?: number;
  featured?: boolean;
  className?: string;
}

const ServiceCard = ({
  id,
  title,
  description,
  image,
  price,
  category,
  location,
  rating,
  reviews,
  featured = false,
  className
}: ServiceCardProps) => {
  return (
    <Card className={`overflow-hidden hover-scale transition-all duration-300 ${featured ? 'border-hindserve-saffron shadow-md' : ''} ${className}`}>
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {featured && (
          <Badge variant="saffron" className="absolute top-3 right-3">
            Featured
          </Badge>
        )}
        <Badge variant="green" className="absolute top-3 left-3">
          {category}
        </Badge>
      </div>
      <CardContent className="p-4 md:p-6 pt-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
            {location && (
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <MapPin size={14} className="mr-1" />
                <span>{location}</span>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="font-bold text-hindserve-saffron">₹{price}</div>
            {rating && (
              <div className="flex items-center mt-2">
                <span className="text-hindserve-gold mr-1">★</span>
                <span className="text-sm">{rating} ({reviews} reviews)</span>
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-600 mt-3 line-clamp-2">{description}</p>
      </CardContent>
      <CardFooter className="p-4 md:p-6 pt-0">
        <Button asChild className="w-full bg-hindserve-saffron hover:bg-hindserve-saffron/90">
          <Link to={`/services/${category.toLowerCase()}/${id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
