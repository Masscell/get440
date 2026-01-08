import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../data/products';

export default function ProductsPage({ onAddToCart }) {
    return (
        <div>
            <h2 className="text-4xl font-bold gradient-text mb-2">Our Products</h2>
            <p className="text-theme-secondary mb-8">Discover our premium tech collection</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
                {PRODUCTS.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}
