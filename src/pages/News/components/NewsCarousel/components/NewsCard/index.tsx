import React from 'react';
import type { NewsCardProps } from '../../../../../../types';
import truncateText from '../../../../../../utils/truncateText';
import formatDate from '../../../../../../utils/formatDate';
import { Link } from 'react-router';

const NewsCard: React.FC<NewsCardProps> = ({
  _id,
  date,
  title,
  imageUrl,
  imageAlt = 'News thumbnail',
  description,
}) => {
  return (
    <div className="h-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Image container with aspect ratio */}
      <div className="relative h-48 overflow-hidden md:h-56 lg:h-64">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="bg-gray-black h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content section */}
      <div className="p-4">
        {/* Date */}
        <div className="mb-2 flex items-center space-x-2 text-gray-500">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <h2 className="hover:text-primary mb-2 line-clamp-2 cursor-pointer text-lg font-semibold text-gray-800 transition-colors duration-200 md:text-xl">
          <Link to={`${_id}`}>{title}</Link>
        </h2>
        {/* Description */}
        <p className="mb-4 line-clamp-3 text-sm text-gray-600">{truncateText(description)}</p>
      </div>
    </div>
  );
};

export default NewsCard;
