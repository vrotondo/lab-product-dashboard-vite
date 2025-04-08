import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  return (
    <>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} onRemove={onRemove} />
        ))
      ) : (
        <p>No products are currently in stock.</p>
      )}
    </>
  );
};

export default ProductList;