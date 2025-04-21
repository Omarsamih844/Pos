import React from 'react';

const ServiceTypeModal = ({ isOpen, onClose, onSelect, currentType }) => {
    const serviceTypes = [
        {
            id: 'sur_place',
            name: 'Sur place',
            description: 'Pour manger dans notre restaurant',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            id: 'a_emporter',
            name: 'À emporter',
            description: 'Pour emporter votre commande',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        },
        {
            id: 'livraison',
            name: 'Livraison',
            description: 'Livraison à domicile',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Type de service</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-4">
                    {serviceTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => {
                                onSelect(type.id);
                                onClose();
                            }}
                            className={`w-full p-4 rounded-lg border-2 transition-colors flex items-center gap-4 ${
                                currentType === type.id
                                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                                    : 'border-gray-200 hover:border-purple-300'
                            }`}
                        >
                            <div className="flex-shrink-0">
                                {type.icon}
                            </div>
                            <div className="text-left">
                                <div className="font-medium">{type.name}</div>
                                <div className="text-sm text-gray-500">{type.description}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceTypeModal; 