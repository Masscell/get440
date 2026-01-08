import React from 'react';

export default function OrderCard({ order }) {
    return (
        <div className="card-3d rounded-2xl p-6 animate-in opacity-0">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-theme-primary">Order {order.id}</h3>
                    <p className="text-theme-muted text-sm">{order.date}</p>
                </div>
                <span className="status-badge px-4 py-1.5 rounded-full text-sm font-semibold">
                    {order.status}
                </span>
            </div>
            <div className="space-y-3 mb-5">
                {order.items.map(item => (
                    <div key={item.id} className="flex justify-between text-theme-secondary py-2 border-b border-black/5 dark:border-white/5">
                        <span>{item.name} <span className="text-theme-muted">× {item.quantity}</span></span>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
            </div>
            <div className="border-t border-black/10 dark:border-white/10 pt-4 flex justify-between items-center">
                <span className="text-lg font-semibold text-theme-primary">Total:</span>
                <span className="text-2xl font-bold gradient-text">
                    ${order.total.toFixed(2)}
                </span>
            </div>
        </div>
    );
}
