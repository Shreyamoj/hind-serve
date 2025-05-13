
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ServiceCategoryPage = () => {
  const { category } = useParams<{category: string}>();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  
  // Mock data for service providers with added support for carpenters
  const providers = [
    {
      id: 1,
      name: "Rahul Sharma",
      profession: 
        category === "electricians" ? "Senior Electrician" : 
        category === "plumbers" ? "Master Plumber" : 
        category === "carpenters" ? "Expert Carpenter" : "Professional",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      available: true,
      location: "Delhi",
      hourlyRate: 500
    },
    {
      id: 2,
      name: "Amit Patel",
      profession: 
        category === "electricians" ? "Electrician" : 
        category === "plumbers" ? "Plumbing Expert" : 
        category === "carpenters" ? "Furniture Specialist" : "Professional",
      rating: 4.7,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      available: false,
      location: "Mumbai",
      hourlyRate: 450
    },
    {
      id: 3,
      name: "Priya Singh",
      profession: 
        category === "electricians" ? "Electrical Engineer" : 
        category === "plumbers" ? "Plumber" : 
        category === "carpenters" ? "Woodwork Expert" : "Professional",
      rating: 4.95,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      available: true,
      location: "Bangalore",
      hourlyRate: 550
    },
    {
      id: 4,
      name: "Vikram Mehta",
      profession: 
        category === "electricians" ? "Master Electrician" : 
        category === "plumbers" ? "Pipe Specialist" : 
        category === "carpenters" ? "Cabinet Maker" : "Professional",
      rating: 4.8,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      available: true,
      location: "Chennai",
      hourlyRate: 600
    }
  ];

  // Format category name for display
  const formatCategoryName = (cat: string | undefined) => {
    if (!cat) return '';
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow animate-fade-in">
        <div className="bg-hindserve-primary/5 py-8">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">{formatCategoryName(category)}</h1>
            <p className="text-hindserve-gray-600 mb-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Find the best {category} in your area for your needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hindserve-gray-400" size={18} />
                <Input 
                  placeholder="Search by service or name"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hindserve-gray-400" size={18} />
                <Input 
                  placeholder="Location"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <Button className="bg-hindserve-primary hover:bg-hindserve-primary/90 transition-all duration-300">
                <Search className="mr-2" size={16} />
                Search
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {providers.length} {formatCategoryName(category)} available
              </h2>
              <p className="text-hindserve-gray-600">
                Browse through our list of trusted professionals
              </p>
            </div>
            
            <div className="flex items-center mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2" size={16} />
                Filters
              </Button>
              <div className="ml-4">
                <select className="border rounded-md px-3 py-2 text-sm text-hindserve-gray-700">
                  <option>Sort by: Rating</option>
                  <option>Sort by: Price (low to high)</option>
                  <option>Sort by: Price (high to low)</option>
                  <option>Sort by: Reviews</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providers.map((provider, index) => (
              <div 
                key={provider.id} 
                className="bg-white rounded-xl shadow-sm border border-hindserve-gray-100 overflow-hidden hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img 
                    src={provider.image} 
                    alt={provider.name} 
                    className="w-full h-52 object-cover"
                  />
                  {provider.available && (
                    <span className="absolute top-3 right-3 bg-hindserve-secondary text-white text-xs px-2 py-1 rounded-full animate-pulse">
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
                          className={`w-4 h-4 ${i < Math.floor(provider.rating) ? 'text-yellow-400' : 'text-hindserve-gray-200'}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-hindserve-gray-600 text-sm">{provider.rating} ({provider.reviews} reviews)</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-hindserve-gray-900">{provider.name}</h3>
                  <p className="text-hindserve-gray-600 mb-2">{provider.profession}</p>
                  <div className="flex items-center text-hindserve-gray-600 text-sm mb-4">
                    <MapPin size={14} className="mr-1" />
                    {provider.location}
                    <span className="mx-2">•</span>
                    ₹{provider.hourlyRate}/hr
                  </div>
                  <Button className="w-full bg-hindserve-primary hover:bg-hindserve-primary/90 transition-all duration-300">View Profile</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceCategoryPage;
