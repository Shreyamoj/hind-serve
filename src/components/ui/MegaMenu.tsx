
import React from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type ServiceCategory = {
  title: string;
  href: string;
  description?: string;
};

const popularServices: ServiceCategory[] = [
  {
    title: "Electricians",
    href: "/services/electricians",
    description: "Professional electricians for all your electrical needs",
  },
  {
    title: "Plumbers",
    href: "/services/plumbers",
    description: "Expert plumbers for installations and repairs",
  },
  {
    title: "Carpenters",
    href: "/services/carpenters",
    description: "Skilled carpenters for furniture and woodwork",
  }
];

const homeServices: ServiceCategory[] = [
  { title: "AC Repair", href: "/services/ac-repair" },
  { title: "Painting", href: "/services/painting" },
  { title: "Housekeeping", href: "/services/housekeeping" },
];

const MegaMenu = () => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-hindserve-gray-700 hover:text-hindserve-saffron hover:bg-transparent">Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {popularServices.map((service) => (
                <NavigationMenuLink asChild key={service.title}>
                  <Link
                    to={service.href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-hindserve-saffron/10 hover:text-hindserve-saffron"
                  >
                    <div className="text-sm font-medium leading-none">{service.title}</div>
                    {service.description && (
                      <p className="line-clamp-2 text-sm leading-snug text-hindserve-gray-500">
                        {service.description}
                      </p>
                    )}
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
            <div className="p-4 pt-0">
              <div className="grid grid-cols-2 gap-2">
                {homeServices.map((service) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="text-sm text-hindserve-gray-700 hover:text-hindserve-saffron py-1"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <Link
                  to="/services"
                  className="text-sm font-medium text-hindserve-saffron hover:underline"
                >
                  View all services
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/how-it-works" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent hover:text-hindserve-saffron text-hindserve-gray-700")}>
            How It Works
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MegaMenu;
