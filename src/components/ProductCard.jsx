import React from 'react';

const ProductCard = ({ product, onRemove }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    backgroundColor: product.inStock ? '#e0ffe0' : '#ffe0e0',
  };

  return (
    <div style={cardStyle} data-testid={`product-card-${product.id}`}>
      <h2>{product.name}</h2>
      <p>{`Price: $${product.price.toFixed(2)}`}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;