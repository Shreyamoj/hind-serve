import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServiceCategories from "@/components/home/ServiceCategories";
import HowItWorks from "@/components/home/HowItWorks";
import PopularProviders from "@/components/home/PopularProviders";
import TestimonialCard from "@/components/ui/TestimonialCard";

const Index = () => {
  const testimonials = [
    {
      quote: "HindServe made it so easy to find a qualified plumber on short notice. The professional arrived on time and fixed my leaking pipe quickly. Great service!",
      name: "Priya Sharma",
      title: "Delhi",
      image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "I needed help with my electrical wiring and found an amazing electrician through HindServe. The booking process was simple, and the service was outstanding!",
      name: "Rahul Verma",
      title: "Mumbai",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "My furniture was damaged during a move, but the carpenter I found on HindServe restored it perfectly. His craftsmanship was excellent and pricing reasonable.",
      name: "Anita Patel",
      title: "Bangalore",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <ServiceCategories />
        
        <HowItWorks />
        
        <PopularProviders />
        
        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-hindserve-gray-600 max-w-2xl mx-auto">
                Thousands of customers across India trust HindServe to find reliable service professionals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  image={testimonial.image}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-hindserve-primary hover:bg-hindserve-primary/90" asChild>
                <Link to="/signup">Join HindServe Today</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-hindserve-primary py-16">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-hindserve-primary to-hindserve-primary/80 rounded-xl p-8 md:p-12">
              <div className="md:w-2/3 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Are You a Service Professional?</h2>
                <p className="text-white/90 mb-8 text-lg">
                  Join our network of trusted professionals and grow your business. 
                  Get access to new customers and manage bookings effortlessly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-hindserve-primary hover:bg-hindserve-gray-100" asChild>
                    <Link to="/provider-signup">Join as a Provider</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                    <Link to="/how-it-works">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose HindServe</h2>
              <p className="text-hindserve-gray-600 max-w-2xl mx-auto">
                We're committed to providing the best service experience for both customers and professionals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-hindserve-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-hindserve-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Verified Professionals</h3>
                <p className="text-hindserve-gray-600">
                  All service providers undergo thorough background checks and verification before joining our platform.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-hindserve-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-hindserve-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Booking</h3>
                <p className="text-hindserve-gray-600">
                  See available time slots in real-time and book services instantly with our easy-to-use platform.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-hindserve-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-hindserve-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Messaging</h3>
                <p className="text-hindserve-gray-600">
                  Communicate directly with your service provider to discuss details and ensure clear expectations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-hindserve-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-hindserve-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
                <p className="text-hindserve-gray-600">
                  Pay securely online with multiple payment options. Fund release only after service completion.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-hindserve-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-hindserve-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ratings & Reviews</h3>
                <p className="text-hindserve-gray-600">
                  Browse honest reviews from verified customers to help you choose the best service provider.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-hindserve-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-hindserve-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-hindserve-gray-600">
                  Our customer service team is available around the clock to assist with any issues or questions.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Download App Section */}
        <section className="py-16 bg-hindserve-gray-50">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Our Mobile App</h2>
                <p className="text-hindserve-gray-600 mb-6">
                  Book services on the go with our mobile app. Get real-time updates, chat with providers, and manage your bookings from anywhere.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-hindserve-gray-900 text-white px-6 py-3 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.707 9.293l-5-5a.999.999 0 00-1.414 0l-5 5a.999.999 0 101.414 1.414L11 7.414V19a1 1 0 102 0V7.414l3.293 3.293a.997.997 0 001.414 0 .999.999 0 000-1.414z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs">Download on the</p>
                      <p className="text-xl font-semibold">App Store</p>
                    </div>
                  </button>
                  <button className="bg-hindserve-gray-900 text-white px-6 py-3 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.707 9.293l-5-5a.999.999 0 00-1.414 0l-5 5a.999.999 0 101.414 1.414L11 7.414V19a1 1 0 102 0V7.414l3.293 3.293a.997.997 0 001.414 0 .999.999 0 000-1.414z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs">GET IT ON</p>
                      <p className="text-xl font-semibold">Google Play</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-hindserve-primary/10 rounded-xl" />
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                    alt="Mobile App" 
                    className="relative rounded-xl shadow-lg w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
