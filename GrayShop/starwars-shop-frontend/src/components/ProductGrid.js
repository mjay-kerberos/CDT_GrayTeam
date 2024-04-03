import React, { useEffect, useState } from 'react';
import './ProductGrid.css';

const fetchProductsUrl = 'http://localhost:5000/api/products';

// Function to determine the image filename based on the product's name or other attribute
const getImageFilename = (productName) => {
  switch(productName.toLowerCase()) {
    case 'canon':
      return '../../public/fonts/cannon.webp';
    case 'darth':
      return '../../public/fontsdarth.webp';
    case 'droid':
      return '../../public/fontsdroid.webp';
    case 'force shield':
      return '../../public/fontsforce.webp';
    case 'mind probe':
      return '../../public/fontsmind.webp';
    default:
      return '../../public/fontsTIEfighter.png'; // default image for products not listed or error
  }
}

const ProductGrid = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(fetchProductsUrl)
            .then(response => response.json())
            .then(data => {
                // Append the correct image URL to each product
                const productsWithImages = data.map(product => ({
                    ...product,
                    image: `${process.env.PUBLIC_URL}/images/${getImageFilename(product.name)}`
                }));
                setProducts(productsWithImages);
            })
            .catch(error => console.error("Failed to fetch products", error));
    }, []);

    return (
        <div className="product-grid">
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} className="product-image"/>
                    <div className="product-info">
                        <h5 className="product-name">{product.name}</h5>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;
