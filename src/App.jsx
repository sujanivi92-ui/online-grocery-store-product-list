// jsx
import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Organic Bananas',
      price: 2.99,
      discount: 0.5,
      availability: true,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=150'
    },
    {
      id: 2,
      name: 'Fresh Milk',
      price: 3.49,
      discount: 0,
      availability: true,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=150'
    },
    {
      id: 3,
      name: 'Whole Wheat Bread',
      price: 4.99,
      discount: 1.25,
      availability: false,
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=150'
    },
    {
      id: 4,
      name: 'Free Range Eggs',
      price: 5.99,
      discount: 1.00,
      availability: true,
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=150'
    },
    {
      id: 5,
      name: 'Greek Yogurt',
      price: 3.79,
      discount: 0,
      availability: true,
      image: 'public/assets/yogurt.jpg' // Local image in public folder
    },
    {
      id: 6,
      name: 'Avocado',
      price: 1.99,
      discount: 0.75,
      availability: false,
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=150'
    }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>FreshMart Grocery Store</h1>
        <p>Your one-stop shop for fresh groceries</p>
      </header>
      <main className="app-main">
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default App;