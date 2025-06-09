import React from 'react'
interface CardInfoProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const CardInfo: React.FC<CardInfoProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
          {icon}
          <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
  )
}

export default CardInfo