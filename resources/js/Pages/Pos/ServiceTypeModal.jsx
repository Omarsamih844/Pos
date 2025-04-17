import React from 'react';

const ServiceTypeModal = ({ onClose, onSelect, currentType }) => {
    const serviceTypes = [
        {
            id: 'eat_in',
            name: 'Eat In',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
                </svg>
            )
        },
        {
            id: 'takeout',
            name: 'Takeout',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        },
        {
            id: 'delivery',
            name: 'Delivery',
            description: '+10% delivery fee',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        }
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-96 max-w-full mx-4">
                <div className="p-4 border-b">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Select Service Type</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            ×
                        </button>
                    </div>
                </div>
                
                <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                        {serviceTypes.map((type) => (
                            <button
                                key={type.id}
                                onClick={() => onSelect(type.id)}
                                className={`p-4 rounded-lg border flex items-center gap-4 hover:bg-gray-50 transition-colors
                                    ${currentType === type.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                            >
                                <div className={`${currentType === type.id ? 'text-blue-500' : 'text-gray-500'}`}>
                                    {type.icon}
                                </div>
                                <div className="text-left">
                                    <div className="font-medium">{type.name}</div>
                                    {type.description && (
                                        <div className="text-sm text-red-500">{type.description}</div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-4 border-t">
                    <button
                        onClick={onClose}
                        className="w-full py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceTypeModal; 