
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";

interface Booking {
  id: number;
  provider: {
    name: string;
    image: string;
    profession: string;
  };
  date: string;
  time: string;
  service: string;
  status: "upcoming" | "completed" | "cancelled";
  price: number;
}

const Bookings = () => {
  const [activeTab, setActiveTab] = useState<string>("upcoming");
  
  // Mock data for bookings
  const bookings: Booking[] = [
    {
      id: 1,
      provider: {
        name: "Rahul Sharma",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
        profession: "Senior Electrician"
      },
      date: "2023-06-15",
      time: "10:00 AM - 12:00 PM",
      service: "Electrical Wiring Repair",
      status: "upcoming",
      price: 1500
    },
    {
      id: 2,
      provider: {
        name: "Amit Patel",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
        profession: "Plumbing Expert"
      },
      date: "2023-06-18",
      time: "2:00 PM - 4:00 PM",
      service: "Bathroom Pipe Leak Repair",
      status: "upcoming",
      price: 1200
    },
    {
      id: 3,
      provider: {
        name: "Priya Singh",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
        profession: "Mathematics Tutor"
      },
      date: "2023-06-10",
      time: "4:30 PM - 6:00 PM",
      service: "Algebra Tutoring Session",
      status: "completed",
      price: 800
    },
    {
      id: 4,
      provider: {
        name: "Vikram Mehta",
        image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80",
        profession: "Electrician"
      },
      date: "2023-06-05",
      time: "11:00 AM - 1:00 PM",
      service: "Fan Installation",
      status: "cancelled",
      price: 600
    }
  ];

  // Filter bookings based on active tab
  const filteredBookings = bookings.filter(booking => booking.status === activeTab);

  // Format date from YYYY-MM-DD to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">My Bookings</h1>
            <p className="text-hindserve-gray-600 mt-2">
              View and manage all your service bookings
            </p>
          </div>

          <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              {filteredBookings.length > 0 ? (
                <div className="space-y-6">
                  {filteredBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
              ) : (
                <EmptyState 
                  message="You don't have any upcoming bookings" 
                  description="Browse service providers and book your first service"
                  actionText="Find a Provider"
                  actionLink="/services"
                />
              )}
            </TabsContent>
            
            <TabsContent value="completed">
              {filteredBookings.length > 0 ? (
                <div className="space-y-6">
                  {filteredBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
              ) : (
                <EmptyState 
                  message="You don't have any completed bookings" 
                  description="Your completed bookings will appear here"
                />
              )}
            </TabsContent>
            
            <TabsContent value="cancelled">
              {filteredBookings.length > 0 ? (
                <div className="space-y-6">
                  {filteredBookings.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                  ))}
                </div>
              ) : (
                <EmptyState 
                  message="You don't have any cancelled bookings" 
                  description="Your cancelled bookings will appear here"
                />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Booking Card Component
const BookingCard = ({ booking }: { booking: Booking }) => {
  // Get status badge color
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Format date from YYYY-MM-DD to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-hindserve-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src={booking.provider.image} 
              alt={booking.provider.name} 
              className="w-14 h-14 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">{booking.provider.name}</h3>
              <p className="text-hindserve-gray-600">{booking.provider.profession}</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(booking.status)}`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
          </div>
        </div>
        
        <div className="border-t border-hindserve-gray-100 mt-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-hindserve-gray-500 text-sm">Service</p>
              <p className="font-medium">{booking.service}</p>
            </div>
            <div>
              <p className="text-hindserve-gray-500 text-sm">Date & Time</p>
              <p className="font-medium">{formatDate(booking.date)}</p>
              <p className="text-hindserve-gray-600 text-sm">{booking.time}</p>
            </div>
            <div>
              <p className="text-hindserve-gray-500 text-sm">Price</p>
              <p className="font-medium">₹{booking.price}</p>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {booking.status === 'upcoming' && (
              <>
                <Button variant="outline">Reschedule</Button>
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">Cancel Booking</Button>
                <Button className="bg-hindserve-primary hover:bg-hindserve-primary/90">Message Provider</Button>
              </>
            )}
            {booking.status === 'completed' && (
              <>
                <Button variant="outline">View Details</Button>
                <Button className="bg-hindserve-primary hover:bg-hindserve-primary/90">Leave a Review</Button>
              </>
            )}
            {booking.status === 'cancelled' && (
              <Button variant="outline">View Details</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Empty State Component
const EmptyState = ({ 
  message, 
  description, 
  actionText, 
  actionLink 
}: { 
  message: string;
  description: string;
  actionText?: string;
  actionLink?: string;
}) => {
  return (
    <div className="text-center py-12 bg-hindserve-gray-50 rounded-lg">
      <div className="mx-auto w-16 h-16 bg-hindserve-primary/10 rounded-full flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">{message}</h3>
      <p className="text-hindserve-gray-600 mb-6">{description}</p>
      {actionText && actionLink && (
        <Button className="bg-hindserve-primary hover:bg-hindserve-primary/90" asChild>
          <a href={actionLink}>{actionText}</a>
        </Button>
      )}
    </div>
  );
};

export default Bookings;
