import React from 'react';

const OrderTabs = ({ activeOrders, currentOrderIndex, onSelectOrder, onNewOrder, onCloseOrder, showConfirmModal }) => {
    const handleCloseTab = (e, index) => {
        e.stopPropagation();
        const order = activeOrders[index];
        
        if (order.id && order.cart.length > 0) {
            // If there's an active order with items, confirm before closing
            if (showConfirmModal) {
                showConfirmModal(
                    'Confirmation',
                    'Êtes-vous sûr de vouloir fermer cet onglet? Cette action annulera la commande en cours.',
                    () => onCloseOrder(index)
                );
            } else {
                onCloseOrder(index);
            }
        } else {
            // Empty order or new tab, just close without confirmation
            onCloseOrder(index);
        }
    };
    
    return (
        <div className="flex items-center border-b bg-white">
            <div className="flex-1 overflow-x-auto whitespace-nowrap py-2 px-2 scrollbar-hide">
                {activeOrders.map((order, index) => (
                    <button
                        key={index}
                        onClick={() => onSelectOrder(index)}
                        className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-t-lg mr-1 ${
                            currentOrderIndex === index
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        <span>
                            {order.id ? order.id : 'Nouveau'} - 
                            {order.type === 'eat_in' 
                                ? `Table ${order.tableNumber || '?'}` 
                                : order.type === 'takeout' 
                                    ? 'À emporter'
                                    : 'Livraison'
                            }
                        </span>
                        {currentOrderIndex !== index && (
                            <button 
                                onClick={(e) => handleCloseTab(e, index)}
                                className="ml-2 text-gray-500 hover:text-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}
                    </button>
                ))}
            </div>
            <div className="flex items-center">
                <button
                    onClick={onNewOrder}
                    className="mr-2 p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors"
                    title="Nouvelle commande"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default OrderTabs; 