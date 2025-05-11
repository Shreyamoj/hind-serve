
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
      <div className="bg-white rounded-xl shadow-sm border border-hindserve-gray-100 p-6 flex flex-col items-center hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
        <div className="w-16 h-16 rounded-full bg-hindserve-primary/10 flex items-center justify-center mb-4 group-hover:bg-hindserve-primary/20">
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
      title: "Tutors",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>`,
      description: "Expert tutors for all subjects and levels",
      url: "/services/tutors"
    },
  ];

  return (
    <section className="py-16 bg-hindserve-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-hindserve-gray-600 max-w-2xl mx-auto">
            Connect with skilled professionals for all your home and educational needs.
            Our vetted experts are ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
