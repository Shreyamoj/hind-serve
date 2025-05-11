
import { Button } from "@/components/ui/button";

interface ProviderCardProps {
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  image: string;
  hourlyRate: number;
  distance?: string;
  available: boolean;
  onClick?: () => void;
}

const ProviderCard = ({ 
  name, 
  profession, 
  rating, 
  reviews, 
  image, 
  hourlyRate,
  distance,
  available,
  onClick 
}: ProviderCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-hindserve-gray-100 overflow-hidden flex flex-col">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        {available && (
          <span className="absolute top-3 right-3 bg-hindserve-secondary text-white text-xs px-2 py-1 rounded-full">
            Available Today
          </span>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-hindserve-gray-900">{name}</h3>
            <p className="text-hindserve-gray-600 text-sm">{profession}</p>
          </div>
          <div className="text-hindserve-primary font-semibold">₹{hourlyRate}/hr</div>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="text-yellow-400 flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-hindserve-gray-200'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-hindserve-gray-600 text-sm">{rating} ({reviews})</span>
          </div>
          {distance && (
            <span className="ml-auto text-sm text-hindserve-gray-500">{distance} away</span>
          )}
        </div>
        
        <div className="mt-auto pt-4 flex space-x-3">
          <Button 
            variant="outline" 
            className="flex-1 border-hindserve-primary text-hindserve-primary hover:bg-hindserve-primary hover:text-white"
          >
            Contact
          </Button>
          <Button 
            className="flex-1 bg-hindserve-primary hover:bg-hindserve-primary/90"
            onClick={onClick}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
