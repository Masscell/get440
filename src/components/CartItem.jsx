import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
    return (
        <div className="glass rounded-2xl p-4 flex items-center gap-4 animate-in opacity-0 hover:border-orange-500/30 transition-all duration-300">
            <div className="img-zoom rounded-xl overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover"
                />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-theme-primary">{item.name}</h3>
                <p className="text-theme-secondary">${item.price.toFixed(2)} each</p>
            </div>
            <div className="flex items-center gap-3">
                <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="qty-btn p-2 rounded-lg"
                >
                    <Minus size={16} />
                </button>
                <span className="font-bold text-theme-primary w-8 text-center text-lg">{item.quantity}</span>
                <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    disabled={item.quantity >= item.stock}
                    className="qty-btn p-2 rounded-lg"
                >
                    <Plus size={16} />
                </button>
            </div>
            <div className="text-xl font-bold gradient-text w-28 text-right">
                ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button
                onClick={() => onRemove(item.id)}
                className="delete-btn p-3 text-red-400 rounded-xl"
            >
                <Trash2 size={20} />
            </button>
        </div>
    );
}
