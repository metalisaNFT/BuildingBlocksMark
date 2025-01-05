import React from 'react';
import { ChevronDown } from 'lucide-react';

interface BookDescriptionProps {
  description: string;
  highlights?: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

export const BookDescription: React.FC<BookDescriptionProps> = ({
  description,
  highlights,
  isExpanded,
  onToggle,
}) => (
  <>
    <div className={`transition-all duration-300 ${isExpanded ? 'max-h-[1000px]' : 'max-h-24'} overflow-hidden`}>
      <p className="text-gray-700 mb-4">{description}</p>
      
      {highlights && (
        <div className="space-y-2 mb-4">
          <h4 className="font-englebert text-navy">Highlights:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

    <button
      onClick={onToggle}
      className="text-navy hover:text-peach transition-colors flex items-center gap-2 text-sm w-full justify-center"
    >
      {isExpanded ? 'Show less' : 'Read more'}
      <ChevronDown 
        className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
        size={16} 
      />
    </button>
  </>
);