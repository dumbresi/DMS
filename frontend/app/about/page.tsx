import React from 'react';
import { about } from '../data/about';

interface AboutProps {
  title: string;
  description: string[];
  className?: string;
  backgroundColor?: string;
}

const About: React.FC<AboutProps> = ({ 
  title, 
  description, 
  className = "py-16", 
  backgroundColor = "bg-gray-50" 
}) => {
    title= about.title;
    description=about.description
  return (
    <section className={`${className} ${backgroundColor}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            {title}
          </h2>
          <div className="text-lg text-gray-600 leading-relaxed space-y-4">
            {description.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;