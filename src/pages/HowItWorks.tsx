
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const HowItWorks = () => {
  // Steps for the "How It Works" process
  const customerSteps = [
    {
      number: 1,
      title: "Search for a Service Provider",
      description: "Browse through our extensive list of verified professionals. Filter by service type, location, ratings, and availability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Book an Appointment",
      description: "Select a convenient time slot from the provider's availability calendar. Submit your booking request with details about the service needed.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Pay Securely",
      description: "Once your booking is confirmed, make secure payments through our platform. Your payment is only released to the provider after service completion.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Get the Service",
      description: "Meet with your service provider at the scheduled time. Communicate directly through our in-app messaging system if needed.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      number: 5,
      title: "Rate and Review",
      description: "After service completion, share your experience by rating and reviewing your service provider to help other users in the community.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
  ];

  const providerSteps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Sign up as a service provider, complete your profile with qualifications, experience, and upload necessary certificates for verification.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "Set Your Availability",
      description: "Mark your available time slots on our easy-to-use calendar interface. Update your availability anytime to match your schedule.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Receive Booking Requests",
      description: "Get notified when customers book your services. Accept or decline requests based on your availability and expertise.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      number: 4,
      title: "Provide Quality Service",
      description: "Deliver excellent service at the scheduled time. Communicate with customers through our platform if you need any clarifications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      number: 5,
      title: "Get Paid Securely",
      description: "Receive payments directly to your account once the service is completed and the customer confirms satisfaction.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hindserve-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hindserve-primary/10 to-hindserve-secondary/10 py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How HindServe Works</h1>
              <p className="text-lg text-hindserve-gray-600 mb-8">
                HindServe connects you with skilled professionals for all your service needs. 
                Our platform makes finding, booking, and paying service providers simple, secure, and hassle-free.
              </p>
            </div>
          </div>
        </section>

        {/* For Customers Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">For Customers</h2>
              <p className="text-lg text-hindserve-gray-600 max-w-3xl mx-auto">
                Finding reliable service professionals has never been easier. Follow these simple steps to get started.
              </p>
            </div>

            <div className="space-y-12 mt-12">
              {customerSteps.map((step) => (
                <div key={step.number} className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="bg-hindserve-primary/10 rounded-full p-4 mb-4 md:mb-0 md:mr-6">
                    {step.icon}
                  </div>
                  <div className="md:flex-1">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <span className="bg-hindserve-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                        {step.number}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-hindserve-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Service Providers Section */}
        <section className="py-16 bg-hindserve-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">For Service Providers</h2>
              <p className="text-lg text-hindserve-gray-600 max-w-3xl mx-auto">
                Join our network of trusted professionals and grow your business. Get access to new customers and manage bookings effortlessly.
              </p>
            </div>

            <div className="space-y-12 mt-12">
              {providerSteps.map((step) => (
                <div key={step.number} className="flex flex-col md:flex-row items-start md:items-center">
                  <div className="bg-hindserve-secondary/10 rounded-full p-4 mb-4 md:mb-0 md:mr-6">
                    {step.icon}
                  </div>
                  <div className="md:flex-1">
                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <span className="bg-hindserve-secondary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                        {step.number}
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-hindserve-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-hindserve-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about using HindServe
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-hindserve-gray-100">
                  <h3 className="text-xl font-semibold mb-2">How do I know if a service provider is reliable?</h3>
                  <p className="text-hindserve-gray-600">
                    All service providers on HindServe undergo a thorough verification process. We verify their identity, check their qualifications, and review their experience before they can offer services on our platform. Additionally, you can read reviews and ratings from other customers to make an informed decision.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-hindserve-gray-100">
                  <h3 className="text-xl font-semibold mb-2">How does payment work?</h3>
                  <p className="text-hindserve-gray-600">
                    HindServe uses a secure payment system. When you book a service, the payment is held in escrow until the service is completed to your satisfaction. This ensures that you only pay for services that meet your expectations, and service providers receive timely payments for their work.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-hindserve-gray-100">
                  <h3 className="text-xl font-semibold mb-2">What happens if I need to cancel or reschedule?</h3>
                  <p className="text-hindserve-gray-600">
                    You can cancel or reschedule a booking through your account dashboard. Please note that cancellations made less than 24 hours before the scheduled service may incur a cancellation fee. For rescheduling, you can select a new time slot based on the provider's availability.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-hindserve-gray-100">
                  <h3 className="text-xl font-semibold mb-2">How can I become a service provider on HindServe?</h3>
                  <p className="text-hindserve-gray-600">
                    To become a service provider, you need to sign up, complete your profile, and undergo our verification process. You'll need to provide your professional qualifications, experience details, and any relevant certificates. Once verified, you can set your availability and start receiving booking requests.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-hindserve-gray-100">
                  <h3 className="text-xl font-semibold mb-2">What if I'm not satisfied with the service?</h3>
                  <p className="text-hindserve-gray-600">
                    Customer satisfaction is our priority. If you're not satisfied with the service provided, you can raise a dispute through your account within 24 hours of service completion. Our customer support team will review the case and help resolve the issue fairly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-hindserve-primary py-16">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-hindserve-primary to-hindserve-primary/80 rounded-xl p-8 md:p-12">
              <div className="md:w-2/3 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
                <p className="text-white/90 mb-8 text-lg">
                  Join thousands of satisfied customers who have found reliable service professionals through HindServe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-hindserve-primary hover:bg-hindserve-gray-100 px-6 py-3 rounded-lg font-medium">
                    Find a Professional
                  </button>
                  <button className="text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium">
                    Become a Provider
                  </button>
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

export default HowItWorks;
