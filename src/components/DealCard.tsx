import React from 'react';
import { FaThumbsUp, FaComments, FaClock } from 'react-icons/fa';

interface DealCardProps {
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  merchant: string;
  expirationDate: string;
  votes: number;
  commentCount: number;
  imageUrl: string;
}

const DealCard: React.FC<DealCardProps> = ({
  title,
  price,
  originalPrice,
  discount,
  merchant,
  expirationDate,
  votes,
  commentCount,
  imageUrl,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-zinc-900">{title}</h3>
        <p className="text-green-600 font-semibold text-xl mb-2">
          {price}€{' '}
          <span className="text-sm text-gray-500 line-through">
            {originalPrice}€
          </span>
        </p>
        <p className="text-sm text-gray-600 mb-2">chez {merchant}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span className="flex items-center">
            <FaClock className="mr-1" /> Expire le{' '}
            {new Date(expirationDate).toLocaleDateString()}
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
            -{discount}%
          </span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="flex items-center">
            <FaThumbsUp className="mr-1" /> {votes}
          </span>
          <span className="flex items-center">
            <FaComments className="mr-1" /> {commentCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
