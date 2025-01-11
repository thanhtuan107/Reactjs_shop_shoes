import React from 'react';

export default function ProductItem({ item, setStateModal }) {
  return (
    <div className="flex flex-col border p-4 rounded-lg shadow-lg w-1/3">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600">{item.shortDescription}</p>
      <p className="text-green-500 font-bold">${item.price}</p>
      <button 
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={() => setStateModal(item)}
      >
        Add to Cart
      </button>
    </div>
  );
}
