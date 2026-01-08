import React from 'react';
import { ShoppingCart, Package, CheckCircle, Sun, Moon } from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, cartItemCount, theme, toggleTheme }) {
    return (
        <nav className="glass-nav sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-2xl font-bold gradient-text float-animation">
                        get440
                    </h1>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setCurrentPage('products')}
                            className={`nav-link flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${currentPage === 'products'
                                    ? 'active bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400'
                                    : 'text-theme-secondary hover:text-orange-400'
                                }`}
                        >
                            <Package size={20} />
                            <span className="font-medium">Products</span>
                        </button>
                        <button
                            onClick={() => setCurrentPage('cart')}
                            className={`nav-link flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 relative ${currentPage === 'cart'
                                    ? 'active bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400'
                                    : 'text-theme-secondary hover:text-orange-400'
                                }`}
                        >
                            <ShoppingCart size={20} />
                            <span className="font-medium">Cart</span>
                            {cartItemCount > 0 && (
                                <span className="badge-pop absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setCurrentPage('orders')}
                            className={`nav-link flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${currentPage === 'orders'
                                    ? 'active bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400'
                                    : 'text-theme-secondary hover:text-orange-400'
                                }`}
                        >
                            <CheckCircle size={20} />
                            <span className="font-medium">Orders</span>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle p-2.5 rounded-xl text-theme-primary ml-2"
                            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
