import React from 'react';
import { Package } from 'lucide-react';
import OrderCard from './OrderCard';

export default function OrdersPage({ orders, onStartShopping }) {
    if (orders.length === 0) {
        return (
            <div>
                <h2 className="text-4xl font-bold gradient-text mb-8">Your Orders</h2>
                <div className="glass rounded-2xl p-12 text-center animate-in opacity-0">
                    <div className="empty-icon inline-block mb-6">
                        <Package size={64} className="text-orange-400" />
                    </div>
                    <p className="text-theme-secondary text-lg mb-6">No orders yet</p>
                    <button
                        onClick={onStartShopping}
                        className="btn-gradient px-8 py-3 rounded-xl font-semibold uppercase tracking-wider"
                    >
                        Start Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-4xl font-bold gradient-text mb-2">Your Orders</h2>
            <p className="text-theme-secondary mb-8">{orders.length} order{orders.length > 1 ? 's' : ''} placed</p>
            <div className="space-y-6 stagger-children">
                {orders.map(order => (
                    <OrderCard key={order.id} order={order} />
                ))}
            </div>
        </div>
    );
}
