
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProviderCardProps {
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  image: string;
  available: boolean;
}

const ProviderCard = ({ name, profession, rating, reviews, image, available }: ProviderCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-hindserve-gray-100 overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-52 object-cover"
        />
        {available && (
          <span className="absolute top-3 right-3 bg-hindserve-secondary text-white text-xs px-2 py-1 rounded-full">
            Available Now
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="text-yellow-400 flex mr-2">
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
          </div>
          <span className="text-hindserve-gray-600 text-sm">{rating} ({reviews} reviews)</span>
        </div>
        <h3 className="text-xl font-semibold mb-1 text-hindserve-gray-900">{name}</h3>
        <p className="text-hindserve-gray-600 mb-4">{profession}</p>
        <Button className="w-full bg-hindserve-primary hover:bg-hindserve-primary/90">View Profile</Button>
      </div>
    </div>
  );
};

const PopularProviders = () => {
  const providers = [
    {
      name: "Rajesh Kumar",
      profession: "Senior Electrician",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      available: true
    },
    {
      name: "Amit Patel",
      profession: "Plumbing Expert",
      rating: 4.7,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      available: false
    },
    {
      name: "Priya Singh",
      profession: "Mathematics Tutor",
      rating: 4.95,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      available: true
    },
    {
      name: "Vikram Mehta",
      profession: "Master Electrician",
      rating: 4.8,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      available: true
    }
  ];

  return (
    <section className="py-16 bg-hindserve-gray-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Popular Professionals</h2>
            <p className="text-hindserve-gray-600 max-w-2xl">
              Discover our top-rated service providers with exceptional skills and customer satisfaction
            </p>
          </div>
          <Link to="/services" className="text-hindserve-primary font-semibold hover:text-hindserve-primary/80 mt-4 md:mt-0">
            View All Providers →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {providers.map((provider, index) => (
            <ProviderCard
              key={index}
              name={provider.name}
              profession={provider.profession}
              rating={provider.rating}
              reviews={provider.reviews}
              image={provider.image}
              available={provider.available}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProviders;
