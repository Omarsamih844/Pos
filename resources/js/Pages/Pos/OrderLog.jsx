import React from 'react';

const OrderLog = ({ orders, onSelectOrder, onCancelOrder, activeOrderId, showConfirmModal }) => {
    return (
        <div className="w-full overflow-auto bg-white border-b">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date/Heure
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Table
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Référence
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Montant
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Statut
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {orders.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="px-4 py-4 text-center text-sm text-gray-500">
                                Aucune commande trouvée
                            </td>
                        </tr>
                    ) : (
                        orders.map((order) => (
                            <tr 
                                key={order.id} 
                                onClick={() => onSelectOrder(order)}
                                className={`hover:bg-gray-50 cursor-pointer ${order.id === activeOrderId ? 'bg-blue-50' : ''}`}
                            >
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                    {order.timestamp}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                    {order.type === 'eat_in' ? `T ${order.table_number || '-'}` : '-'}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                    {order.id}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                        order.type === 'eat_in' 
                                            ? 'bg-blue-100 text-blue-800' 
                                            : order.type === 'takeout' 
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-green-100 text-green-800'
                                    }`}>
                                        {order.type === 'eat_in' 
                                            ? 'Sur place' 
                                            : order.type === 'takeout' 
                                                ? 'Emporter'
                                                : 'Livraison'
                                        }
                                    </span>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-medium">
                                    {order.total.toFixed(2)} DH
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                        order.status === 'paid' 
                                            ? 'bg-green-100 text-green-800'
                                            : order.status === 'pending' 
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : order.status === 'cancelled'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-gray-100 text-gray-800'
                                    }`}>
                                        {order.status === 'paid' 
                                            ? 'Payé' 
                                            : order.status === 'pending' 
                                                ? 'En cours'
                                                : order.status === 'cancelled'
                                                    ? 'Annulé'
                                                    : 'Reçu'
                                        }
                                    </span>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                    <div className="flex">
                                        {order.status === 'pending' && (
                                            <>
                                                <button 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onSelectOrder(order); 
                                                    }}
                                                    className="text-indigo-600 hover:text-indigo-900 mr-2"
                                                    title="Modifier"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                    </svg>
                                                </button>
                                                <button 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (showConfirmModal) {
                                                            showConfirmModal(
                                                                'Confirmation',
                                                                'Êtes-vous sûr de vouloir annuler cette commande?',
                                                                () => onCancelOrder(order.id)
                                                            );
                                                        } else {
                                                            if (window.confirm('Êtes-vous sûr de vouloir annuler cette commande?')) {
                                                                onCancelOrder(order.id);
                                                            }
                                                        }
                                                    }}
                                                    className="text-red-600 hover:text-red-900"
                                                    title="Annuler"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </>
                                        )}
                                        {order.status === 'paid' && (
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.print();
                                                }}
                                                className="text-gray-600 hover:text-gray-900"
                                                title="Imprimer"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default OrderLog; 