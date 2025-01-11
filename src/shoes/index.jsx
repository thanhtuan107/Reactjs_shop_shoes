import React, { useState } from 'react';
import ProductList from './ProductList';
import Modal from './Modal';
import products from './data.json';

export default function ShoesStore() {
  const [productDetail, setProductDetail] = useState(null);

  const setStateModal = (product) => {
    setProductDetail(product);
  };

  const closeModal = () => {
    setProductDetail(null);
  };

  return (
    <div className="container mx-auto p-4">
      <ProductList productsData={products} setStateModal={setStateModal} />
      {productDetail && <Modal content={productDetail} setStateModal={setStateModal} closeModal={closeModal} />}
    </div>
  );
}
