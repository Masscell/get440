import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductsPage from './components/ProductsPage';
import CartPage from './components/CartPage';
import OrdersPage from './components/OrdersPage';

export default function App() {
    const [currentPage, setCurrentPage] = useState('products');
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);
    const [theme, setTheme] = useState(() => {
        // Check localStorage or system preference
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) return saved;
            return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        // Apply theme class to document
        document.documentElement.classList.toggle('light', theme === 'light');
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                if (existing.quantity < product.stock) {
                    return prev.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return prev;
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity === 0) {
            removeFromCart(productId);
            return;
        }
        setCart(prev =>
            prev.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const checkout = () => {
        if (cart.length === 0) return;

        const order = {
            id: `ORD-${Date.now()}`,
            items: [...cart],
            total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
            status: 'Processing',
            date: new Date().toLocaleDateString(),
        };

        setOrders(prev => [order, ...prev]);
        setCart([]);
        setCurrentPage('orders');
    };

    const getTotalPrice = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated background orbs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="bg-orb absolute top-1/4 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="bg-orb absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="bg-orb absolute top-3/4 left-1/3 w-64 h-64 bg-orange-600/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <Navbar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                cartItemCount={cartItemCount}
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                {currentPage === 'products' && (
                    <ProductsPage onAddToCart={addToCart} />
                )}

                {currentPage === 'cart' && (
                    <CartPage
                        cart={cart}
                        onUpdateQuantity={updateQuantity}
                        onRemoveFromCart={removeFromCart}
                        onCheckout={checkout}
                        onContinueShopping={() => setCurrentPage('products')}
                        totalPrice={getTotalPrice()}
                    />
                )}

                {currentPage === 'orders' && (
                    <OrdersPage
                        orders={orders}
                        onStartShopping={() => setCurrentPage('products')}
                    />
                )}
            </main>
        </div>
    );
}
