import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { Button, Container, Typography } from '@mui/material';

const sampleProducts = [
  { id: 1, name: 'Laptop', price: 999.99, inStock: true },
  { id: 2, name: 'Smartphone', price: 699.99, inStock: false },
  { id: 3, name: 'Headphones', price: 199.99, inStock: true },
  { id: 4, name: 'Keyboard', price: 49.99, inStock: false },
];

const App = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [showInStock, setShowInStock] = useState(false);

  const filteredProducts = showInStock
    ? products.filter((product) => product.inStock)
    : products;

  const handleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Product Dashboard
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowInStock(false)}
        style={{ marginRight: '10px' }}
      >
        Show All
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setShowInStock(true)}
      >
        Show In-Stock Only
      </Button>

      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </Container>
  );
};

export default App;