import React from 'react';

export default function Modal({ content, setStateModal }) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src={content.image} alt={content.name} className="w-full h-48 object-cover mb-4" />
        <h3 className="text-lg font-semibold">{content.name}</h3>
        <p className="text-gray-600">{content.description}</p>
        <p className="text-green-500 font-bold">${content.price}</p>
        <p>Quantity: {content.quantity}</p>
        <button 
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
          onClick={() => setStateModal(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
}
