import React from 'react';
import { ShoppingCart } from 'lucide-react';
import CartItem from './CartItem';

export default function CartPage({
    cart,
    onUpdateQuantity,
    onRemoveFromCart,
    onCheckout,
    onContinueShopping,
    totalPrice
}) {
    if (cart.length === 0) {
        return (
            <div>
                <h2 className="text-4xl font-bold gradient-text mb-8">Shopping Cart</h2>
                <div className="glass rounded-2xl p-12 text-center animate-in opacity-0">
                    <div className="empty-icon inline-block mb-6">
                        <ShoppingCart size={64} className="text-orange-400" />
                    </div>
                    <p className="text-theme-secondary text-lg mb-6">Your cart is empty</p>
                    <button
                        onClick={onContinueShopping}
                        className="btn-gradient px-8 py-3 rounded-xl font-semibold uppercase tracking-wider"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-4xl font-bold gradient-text mb-2">Shopping Cart</h2>
            <p className="text-theme-secondary mb-8">{cart.length} item{cart.length > 1 ? 's' : ''} in your cart</p>
            <div className="space-y-4 stagger-children">
                {cart.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={onUpdateQuantity}
                        onRemove={onRemoveFromCart}
                    />
                ))}

                <div className="glass rounded-2xl p-6 mt-8 animate-in opacity-0" style={{ animationDelay: '0.4s' }}>
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-xl font-semibold text-theme-primary">Total:</span>
                        <span className="text-4xl font-bold gradient-text">
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>
                    <button
                        onClick={onCheckout}
                        className="btn-gradient w-full py-4 rounded-xl font-bold text-lg uppercase tracking-wider pulse-glow"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
