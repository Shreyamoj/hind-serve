
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-hindserve-primary/5 to-hindserve-secondary/5 py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-hindserve-gray-900 leading-tight">
                Connect with <span className="text-hindserve-primary">trusted</span> service professionals
              </h1>
              <p className="text-lg md:text-xl mb-8 text-hindserve-gray-600 max-w-xl">
                Find electricians, plumbers, and tutors near you in real-time. Book appointments, chat instantly, and get your tasks done efficiently.
              </p>

              <div className="relative mb-8 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-hindserve-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-hindserve-gray-300 rounded-lg text-hindserve-gray-900 focus:ring-2 focus:ring-hindserve-primary focus:border-transparent"
                  placeholder="What service do you need?"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-hindserve-primary hover:bg-hindserve-primary/90">
                  Find a Professional
                </Button>
                <Button size="lg" variant="outline">
                  Become a Provider
                </Button>
              </div>

              <div className="mt-8 text-hindserve-gray-500 flex items-center text-sm">
                <div className="flex -space-x-2 overflow-hidden mr-3">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                </div>
                <span>Trusted by 10,000+ customers across India</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="bg-white p-4 rounded-xl shadow-xl max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                alt="Professional at work" 
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Rahul Sharma</h3>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-hindserve-gray-600 text-sm">4.92 (129 reviews)</span>
                  </div>
                </div>
                <Button className="bg-hindserve-secondary hover:bg-hindserve-secondary/90">Book Now</Button>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-hindserve-amber flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Verified Professionals</p>
                  <p className="text-hindserve-gray-500">Background checked</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-hindserve-rose flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Book in minutes</p>
                  <p className="text-hindserve-gray-500">Real-time scheduling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
