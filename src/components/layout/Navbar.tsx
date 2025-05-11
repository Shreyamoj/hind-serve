
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <Link to="/services/electricians" className="text-hindserve-gray-600 hover:text-hindserve-primary">Electricians</Link>
          <Link to="/services/plumbers" className="text-hindserve-gray-600 hover:text-hindserve-primary">Plumbers</Link>
          <Link to="/services/tutors" className="text-hindserve-gray-600 hover:text-hindserve-primary">Tutors</Link>
          <Link to="/how-it-works" className="text-hindserve-gray-600 hover:text-hindserve-primary">How It Works</Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button size="sm" className="bg-hindserve-primary hover:bg-hindserve-primary/90" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
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
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" asChild>
                <Link to="/login" className="w-full">Log In</Link>
              </Button>
              <Button className="bg-hindserve-primary hover:bg-hindserve-primary/90 w-full" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
