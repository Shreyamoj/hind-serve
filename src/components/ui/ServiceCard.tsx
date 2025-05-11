
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  url: string;
}

const ServiceCard = ({ title, description, icon, url }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-hindserve-gray-100 p-6 flex flex-col h-full">
      <div className="mb-4">
        <div className="w-12 h-12 rounded-full bg-hindserve-primary/10 flex items-center justify-center">
          <div dangerouslySetInnerHTML={{ __html: icon }} className="w-6 h-6 text-hindserve-primary" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-hindserve-gray-900">{title}</h3>
      <p className="text-hindserve-gray-600 mb-6 flex-grow">{description}</p>
      <Button variant="outline" className="w-full" asChild>
        <Link to={url}>Learn More</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
