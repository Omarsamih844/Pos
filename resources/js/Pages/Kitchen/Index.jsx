import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const KitchenDisplay = ({ auth }) => {
    const [orders, setOrders] = useState([]);
    const [filter, setFilter] = useState('all'); // all, pending, preparing, ready

    // Simulated orders data - in a real app, this would come from your backend
    useEffect(() => {
        // Simulated API call
        const mockOrders = [
            {
                id: 'ORD-0001',
                status: 'pending',
                timestamp: new Date().toLocaleString(),
                type: 'eat_in',
                table: '12',
                items: [
                    { name: 'Bacon Burger', quantity: 2, customizations: ['No Onions', 'Extra Cheese'] },
                    { name: 'Fries', quantity: 2 }
                ]
            },
            // Add more mock orders as needed
        ];
        setOrders(mockOrders);
    }, []);

    const updateOrderStatus = (orderId, newStatus) => {
        setOrders(orders.map(order =>
            order.id === orderId ? { ...order, status: newStatus } : order
        ));
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'preparing': return 'bg-blue-100 text-blue-800';
            case 'ready': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const filteredOrders = orders.filter(order => 
        filter === 'all' ? true : order.status === filter
    );

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Kitchen Display" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Kitchen Orders</h2>
                        <div className="flex gap-2">
                            {['all', 'pending', 'preparing', 'ready'].map((status) => (
                                <button
                                    key={status}
                                    onClick={() => setFilter(status)}
                                    className={`px-4 py-2 rounded-lg capitalize ${
                                        filter === status
                                            ? 'bg-purple-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredOrders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                <div className="p-4 border-b">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold">{order.id}</span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <span>{order.type === 'eat_in' ? `Table ${order.table}` : order.type}</span>
                                        <span>{order.timestamp}</span>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="space-y-3">
                                        {order.items.map((item, index) => (
                                            <div key={index} className="flex justify-between">
                                                <div>
                                                    <div className="font-medium">{item.quantity}x {item.name}</div>
                                                    {item.customizations && item.customizations.length > 0 && (
                                                        <div className="text-sm text-gray-600 ml-4">
                                                            {item.customizations.map((custom, idx) => (
                                                                <div key={idx}>• {custom}</div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 border-t">
                                    <div className="grid grid-cols-2 gap-2">
                                        {order.status === 'pending' && (
                                            <button
                                                onClick={() => updateOrderStatus(order.id, 'preparing')}
                                                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                            >
                                                Start Preparing
                                            </button>
                                        )}
                                        {order.status === 'preparing' && (
                                            <button
                                                onClick={() => updateOrderStatus(order.id, 'ready')}
                                                className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                                            >
                                                Mark as Ready
                                            </button>
                                        )}
                                        <button
                                            onClick={() => {
                                                const audio = new Audio('/notification.mp3');
                                                audio.play();
                                            }}
                                            className="w-full py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                                        >
                                            Ring Bell
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default KitchenDisplay; 