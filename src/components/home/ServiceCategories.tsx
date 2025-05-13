
import { Link } from "react-router-dom";

interface ServiceCategoryProps {
  title: string;
  icon: string;
  description: string;
  url: string;
}

const ServiceCategoryCard = ({ title, icon, description, url }: ServiceCategoryProps) => {
  return (
    <Link to={url} className="group">
      <div className="bg-white rounded-xl shadow-sm border border-hindserve-gray-100 p-6 flex flex-col items-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-2">
        <div className="w-16 h-16 rounded-full bg-hindserve-primary/10 flex items-center justify-center mb-4 group-hover:bg-hindserve-primary/20 transition-colors duration-300">
          <div dangerouslySetInnerHTML={{ __html: icon }} className="w-8 h-8 text-hindserve-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-hindserve-gray-900">{title}</h3>
        <p className="text-hindserve-gray-600 text-center">{description}</p>
      </div>
    </Link>
  );
};

const ServiceCategories = () => {
  const categories = [
    {
      title: "Electricians",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>`,
      description: "Professional electrical repairs and installations",
      url: "/services/electricians"
    },
    {
      title: "Plumbers",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>`,
      description: "Fast solutions for leaks, clogs, and installations",
      url: "/services/plumbers"
    },
    {
      title: "Carpenters",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>`,
      description: "Expert woodworking, furniture repair and custom designs",
      url: "/services/carpenters"
    },
  ];

  return (
    <section className="py-12 bg-hindserve-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
          <p className="text-hindserve-gray-600 max-w-2xl mx-auto">
            Connect with skilled professionals for all your home service needs.
            Our vetted experts are ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {categories.map((category, index) => (
            <ServiceCategoryCard
              key={index}
              title={category.title}
              icon={category.icon}
              description={category.description}
              url={category.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
