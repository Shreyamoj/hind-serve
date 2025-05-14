
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const Feature = ({ icon, title, description, className }: FeatureProps) => (
  <div className={cn('flex flex-col items-start', className)}>
    {icon && (
      <div className="mb-4 p-3 rounded-lg bg-hindserve-saffron/10 text-hindserve-saffron">
        {icon}
      </div>
    )}
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: {
    icon?: ReactNode;
    title: string;
    description: string;
  }[];
  columns?: 2 | 3 | 4;
  className?: string;
  alignment?: 'left' | 'center';
}

const FeatureSection = ({
  title,
  subtitle,
  features,
  columns = 3,
  className,
  alignment = 'center',
}: FeatureSectionProps) => {
  const columnsClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto items-center',
  };

  return (
    <section className={cn('py-16', className)}>
      <div className="container-custom">
        <div className={`max-w-3xl mb-12 ${alignment === 'center' ? 'mx-auto text-center' : ''}`}>
          <h2 className="text-3xl font-bold md:text-4xl mb-4">{title}</h2>
          {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
        </div>

        <div className={`grid grid-cols-1 gap-8 ${columnsClasses[columns]}`}>
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={alignment === 'center' ? alignmentClasses.center : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeatureSection, Feature };
