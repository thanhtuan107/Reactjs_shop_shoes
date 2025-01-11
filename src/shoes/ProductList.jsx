import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ productsData, setStateModal }) {
  return (
    <div className="flex flex-wrap gap-4">
      {productsData.map((product) => (
        <ProductItem key={product.id} item={product} setStateModal={setStateModal} />
      ))}
    </div>
  );
}
