
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Mock authentication state - replace with actual auth logic when implemented
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // For demo purposes only - toggle login state
  const toggleLoginState = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-hindserve-primary font-bold text-xl md:text-2xl">Hind<span className="text-hindserve-secondary">Serve</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/services/electricians" 
            className={`text-hindserve-gray-600 hover:text-hindserve-primary ${location.pathname === '/services/electricians' ? 'text-hindserve-primary font-medium' : ''}`}
          >
            Electricians
          </Link>
          <Link 
            to="/services/plumbers" 
            className={`text-hindserve-gray-600 hover:text-hindserve-primary ${location.pathname === '/services/plumbers' ? 'text-hindserve-primary font-medium' : ''}`}
          >
            Plumbers
          </Link>
          <Link 
            to="/services/tutors" 
            className={`text-hindserve-gray-600 hover:text-hindserve-primary ${location.pathname === '/services/tutors' ? 'text-hindserve-primary font-medium' : ''}`}
          >
            Tutors
          </Link>
          <Link 
            to="/how-it-works" 
            className={`text-hindserve-gray-600 hover:text-hindserve-primary ${location.pathname === '/how-it-works' ? 'text-hindserve-primary font-medium' : ''}`}
          >
            How It Works
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link to="/bookings" className={`text-hindserve-gray-600 hover:text-hindserve-primary ${location.pathname === '/bookings' ? 'text-hindserve-primary font-medium' : ''}`}>
                My Bookings
              </Link>
              <Link to="/messages" className={`text-hindserve-gray-600 hover:text-hindserve-primary ${location.pathname === '/messages' ? 'text-hindserve-primary font-medium' : ''}`}>
                Messages
              </Link>
              <div className="relative group">
                <button className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80"
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </button>
                <div className="absolute right-0 w-48 bg-white shadow-lg rounded-md py-2 mt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link to="/profile" className="block px-4 py-2 text-hindserve-gray-700 hover:bg-hindserve-gray-100">
                    Profile
                  </Link>
                  <Link to="/bookings" className="block px-4 py-2 text-hindserve-gray-700 hover:bg-hindserve-gray-100">
                    My Bookings
                  </Link>
                  <Link to="/messages" className="block px-4 py-2 text-hindserve-gray-700 hover:bg-hindserve-gray-100">
                    Messages
                  </Link>
                  <div className="border-t border-hindserve-gray-100 my-1"></div>
                  <button 
                    onClick={toggleLoginState}
                    className="block w-full text-left px-4 py-2 text-hindserve-gray-700 hover:bg-hindserve-gray-100"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">Log In</Link>
              </Button>
              <Button size="sm" className="bg-hindserve-primary hover:bg-hindserve-primary/90" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
              {/* For demo only - remove in production */}
              <Button 
                size="sm" 
                variant="outline" 
                className="border-dashed border-red-300 text-red-500" 
                onClick={toggleLoginState}
              >
                (Demo: Login)
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-hindserve-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-6 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4 pt-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <input 
                type="text"
                placeholder="Search services..."
                className="pl-10 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <Link to="/services/electricians" className="block px-3 py-2 rounded-md hover:bg-hindserve-gray-100">Electricians</Link>
            <Link to="/services/plumbers" className="block px-3 py-2 rounded-md hover:bg-hindserve-gray-100">Plumbers</Link>
            <Link to="/services/tutors" className="block px-3 py-2 rounded-md hover:bg-hindserve-gray-100">Tutors</Link>
            <Link to="/how-it-works" className="block px-3 py-2 rounded-md hover:bg-hindserve-gray-100">How It Works</Link>
            
            {isLoggedIn ? (
              <>
                <div className="border-t border-hindserve-gray-200 my-2 pt-2"></div>
                <Link to="/bookings" className="block px-3 py-2 rounded-md hover:bg-hindserve-gray-100">My Bookings</Link>
                <Link to="/messages" className="block px-3 py-2 rounded-md hover:bg-hindserve-gray-100">Messages</Link>
                <Link to="/profile" className="block px-3 py-2 rounded-md hover:bg-hindserve-gray-100">Profile</Link>
                <button 
                  onClick={toggleLoginState}
                  className="block px-3 py-2 rounded-md hover:bg-hindserve-gray-100 text-left w-full text-red-600"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" asChild>
                  <Link to="/login" className="w-full">Log In</Link>
                </Button>
                <Button className="bg-hindserve-primary hover:bg-hindserve-primary/90 w-full" asChild>
                  <Link to="/signup">Sign Up</Link>
                </Button>
                {/* For demo only - remove in production */}
                <Button 
                  variant="outline" 
                  className="border-dashed border-red-300 text-red-500 w-full" 
                  onClick={toggleLoginState}
                >
                  (Demo: Login)
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
