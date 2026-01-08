import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className="card-3d rounded-2xl overflow-hidden relative animate-in opacity-0">
            <div className="img-zoom">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />
            </div>

            {/* Stock indicator overlay */}
            {product.stock === 0 && (
                <div className="absolute top-4 right-4 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                    SOLD OUT
                </div>
            )}
            {product.stock > 0 && product.stock <= 5 && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full pulse-glow">
                    LOW STOCK
                </div>
            )}

            <div className="p-5">
                <h3 className="text-lg font-semibold text-theme-primary mb-3">
                    {product.name}
                </h3>
                <div className="flex justify-between items-center mb-4">
                    <span className="price-tag text-2xl font-bold gradient-text">
                        ${product.price.toFixed(2)}
                    </span>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${product.stock > 0
                            ? 'bg-green-500/20 text-green-500 border border-green-500/30'
                            : 'bg-red-500/20 text-red-500 border border-red-500/30'
                        }`}>
                        {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                    </span>
                </div>
                <button
                    onClick={() => onAddToCart(product)}
                    disabled={product.stock === 0}
                    className="btn-gradient w-full py-3 px-4 rounded-xl font-semibold text-sm uppercase tracking-wider"
                >
                    {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
            </div>
        </div>
    );
}
