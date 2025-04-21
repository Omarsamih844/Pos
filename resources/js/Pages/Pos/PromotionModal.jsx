import React, { useState } from 'react';

const PromotionModal = ({ isOpen, onClose, onApply, subtotal }) => {
    const [selectedPromotion, setSelectedPromotion] = useState(null);
    const [customDiscount, setCustomDiscount] = useState('');

    const promotions = [
        { id: 1, name: 'Happy Hour', type: 'percentage', value: 15, description: '15% off between 2-5 PM' },
        { id: 2, name: 'Student Discount', type: 'percentage', value: 10, description: '10% off with student ID' },
        { id: 3, name: 'Loyalty Points', type: 'points', value: 5, description: '5 DH off per 100 points' },
        { id: 4, name: 'Combo Deal', type: 'fixed', value: 20, description: '20 DH off on orders above 100 DH' }
    ];

    const handleApplyPromotion = () => {
        if (selectedPromotion) {
            const promotion = promotions.find(p => p.id === selectedPromotion);
            let discountAmount = 0;

            if (promotion.type === 'percentage') {
                discountAmount = (subtotal * promotion.value) / 100;
            } else if (promotion.type === 'fixed') {
                discountAmount = promotion.value;
            } else if (promotion.type === 'points') {
                // Calculate discount based on points value
                // Assuming 1 point = 0.05 DH discount
                discountAmount = promotion.value;
            }

            onApply({
                promotionId: promotion.id,
                name: promotion.name,
                discountAmount: discountAmount,
                type: promotion.type
            });
        } else if (customDiscount) {
            onApply({
                promotionId: 'custom',
                name: 'Custom Discount',
                discountAmount: parseFloat(customDiscount),
                type: 'fixed'
            });
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Apply Promotion</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-4">
                    {promotions.map((promotion) => (
                        <div
                            key={promotion.id}
                            className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                                selectedPromotion === promotion.id
                                    ? 'border-purple-500 bg-purple-50'
                                    : 'border-gray-200 hover:border-purple-300'
                            }`}
                            onClick={() => setSelectedPromotion(promotion.id)}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-medium">{promotion.name}</span>
                                <span className="text-purple-600 font-medium">
                                    {promotion.type === 'percentage' ? `${promotion.value}%` :
                                     promotion.type === 'fixed' ? `${promotion.value} DH` :
                                     `${promotion.value} DH`}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{promotion.description}</p>
                        </div>
                    ))}

                    <div className="border-t pt-4 mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Custom Discount (DH)
                        </label>
                        <input
                            type="number"
                            value={customDiscount}
                            onChange={(e) => setCustomDiscount(e.target.value)}
                            placeholder="Enter amount"
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>

                    <button
                        onClick={handleApplyPromotion}
                        disabled={!selectedPromotion && !customDiscount}
                        className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
                            selectedPromotion || customDiscount
                                ? 'bg-purple-600 hover:bg-purple-700'
                                : 'bg-gray-300 cursor-not-allowed'
                        }`}
                    >
                        Apply Promotion
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PromotionModal; 