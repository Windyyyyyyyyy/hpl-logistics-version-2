import React from 'react';

interface NewsCardProps {
  date: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
  description: string;
}

const truncateText = (text: string, maxLength: number = 150) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

const NewsCard: React.FC<NewsCardProps> = ({
  date,
  title,
  imageUrl,
  imageAlt = "News thumbnail",
  description
}) => {
  // Format date to DD/MM/YYYY
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image container with aspect ratio */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content section */}
      <div className="p-4">
        {/* Date */}
        <div className="flex items-center space-x-2 text-gray-500 mb-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm">{formatDate(date)}</span>
        </div>


        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {title}
        </h2>
        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {truncateText(description)}
        </p>

      </div>
    </div>
  );
};


export default NewsCard;