
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialCard = ({ quote, name, title, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-hindserve-gray-100 p-4 md:p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          <img 
            src={image} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-hindserve-gray-900">{name}</h4>
          <p className="text-sm text-hindserve-gray-500">{title}</p>
        </div>
      </div>
      <svg className="w-8 h-8 text-hindserve-gray-200 mb-2" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-hindserve-gray-600">{quote}</p>
    </div>
  );
};

export default TestimonialCard;
