import React from 'react';
import { FaClock } from 'react-icons/fa';

interface CouponCardProps {
  code: string;
  description: string;
  expirationDate: string;
}

const CouponCard: React.FC<CouponCardProps> = ({
  code,
  description,
  expirationDate,
}) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg shadow-sm flex justify-between items-center bg-white">
      <div>
        <p className="font-bold text-lg text-gray-800">{code}</p>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500 mt-1 flex items-center">
          <FaClock className="mr-1" /> Expire le{' '}
          {new Date(expirationDate).toLocaleDateString()}
        </p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
        Copier
      </button>
    </div>
  );
};

export default CouponCard;
