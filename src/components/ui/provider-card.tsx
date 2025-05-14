
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock } from "lucide-react";

interface ProviderCardProps {
  id: string | number;
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  image: string;
  available: boolean;
  location: string;
  hourlyRate: number;
  className?: string;
  verifiedBadge?: boolean;
  topRatedBadge?: boolean;
}

const ProviderCard = ({
  id,
  name,
  profession,
  rating,
  reviews,
  image,
  available,
  location,
  hourlyRate,
  className = "",
  verifiedBadge = false,
  topRatedBadge = false,
}: ProviderCardProps) => {
  return (
    <Card className={`overflow-hidden hover-scale transition-all duration-300 ${className}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {available && (
            <Badge variant="green" className="flex items-center gap-1">
              <Clock size={12} />
              <span>Available Now</span>
            </Badge>
          )}
          {verifiedBadge && (
            <Badge variant="saffron">
              Verified
            </Badge>
          )}
          {topRatedBadge && (
            <Badge variant="gold">
              Top Rated
            </Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={`${i < Math.floor(rating) ? 'text-hindserve-gold fill-hindserve-gold' : 'text-gray-200'}`}
              />
            ))}
          </div>
          <span className="text-gray-600 text-sm">{rating.toFixed(1)} ({reviews} reviews)</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-3">{profession}</p>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <MapPin size={14} className="mr-1" />
          {location}
          <span className="mx-2">•</span>
          <span className="font-semibold text-hindserve-saffron">₹{hourlyRate}/hr</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 md:p-6 pt-0">
        <Button asChild className="w-full bg-hindserve-primary hover:bg-hindserve-primary/90">
          <Link to={`/providers/${id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProviderCard;
