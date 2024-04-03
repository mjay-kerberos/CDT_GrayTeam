import React from 'react';
import './App.css';
import HomePage from './components/HomePage'; // Import HomePage component
import ProductGrid from './components/ProductGrid'; // Import ProductGrid component

function App() {
  return (
    <div className="App">
      <HomePage /> {/* Display the HomePage component */}
      <ProductGrid /> {/* Display the ProductGrid component below the HomePage */}
    </div>
  );
}

export default App;
