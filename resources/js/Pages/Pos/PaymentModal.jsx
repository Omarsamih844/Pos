import React, { useState } from 'react';

const PaymentModal = ({ isOpen, onClose, onComplete, total }) => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [paymentDetails, setPaymentDetails] = useState({
        cash: { amount: 0 },
        card: { number: '', expiry: '', cvv: '' },
        mobile: { number: '' }
    });

    const paymentMethods = [
        {
            id: 'cash',
            name: 'Cash',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            id: 'card',
            name: 'Credit/Debit Card',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
            )
        },
        {
            id: 'mobile',
            name: 'Mobile Payment',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        if (!selectedMethod) return;

        // For cash payments, ensure the amount is at least the total
        if (selectedMethod === 'cash' && paymentDetails.cash.amount < total) {
            alert('Payment amount must be greater than or equal to total amount');
            return;
        }

        const payment = {
            method: selectedMethod,
            details: paymentDetails[selectedMethod],
            total: total
        };

        onComplete(payment);
        onClose();
    };

    const renderPaymentForm = () => {
        switch (selectedMethod) {
            case 'cash':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Amount Received
                            </label>
                            <input
                                type="number"
                                value={paymentDetails.cash.amount}
                                onChange={(e) => setPaymentDetails({
                                    ...paymentDetails,
                                    cash: { amount: parseFloat(e.target.value) }
                                })}
                                className="w-full p-2 border rounded-lg"
                                min={total}
                                step="0.01"
                                required
                            />
                        </div>
                        <div className="text-sm text-gray-600">
                            Change: {(paymentDetails.cash.amount - total).toFixed(2)} DH
                        </div>
                    </div>
                );

            case 'card':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Card Number
                            </label>
                            <input
                                type="text"
                                value={paymentDetails.card.number}
                                onChange={(e) => setPaymentDetails({
                                    ...paymentDetails,
                                    card: { ...paymentDetails.card, number: e.target.value }
                                })}
                                className="w-full p-2 border rounded-lg"
                                placeholder="1234 5678 9012 3456"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    value={paymentDetails.card.expiry}
                                    onChange={(e) => setPaymentDetails({
                                        ...paymentDetails,
                                        card: { ...paymentDetails.card, expiry: e.target.value }
                                    })}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="MM/YY"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    value={paymentDetails.card.cvv}
                                    onChange={(e) => setPaymentDetails({
                                        ...paymentDetails,
                                        card: { ...paymentDetails.card, cvv: e.target.value }
                                    })}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="123"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                );

            case 'mobile':
                return (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                value={paymentDetails.mobile.number}
                                onChange={(e) => setPaymentDetails({
                                    ...paymentDetails,
                                    mobile: { number: e.target.value }
                                })}
                                className="w-full p-2 border rounded-lg"
                                placeholder="+212 666-123456"
                                required
                            />
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Payment</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="mb-6">
                    <div className="text-2xl font-bold text-purple-600">
                        {total.toFixed(2)} DH
                    </div>
                    <div className="text-sm text-gray-500">Total Amount</div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    {paymentMethods.map((method) => (
                        <button
                            key={method.id}
                            onClick={() => setSelectedMethod(method.id)}
                            className={`p-4 rounded-lg border-2 transition-colors ${
                                selectedMethod === method.id
                                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                                    : 'border-gray-200 hover:border-purple-300'
                            }`}
                        >
                            <div className="flex flex-col items-center gap-2">
                                {method.icon}
                                <span className="text-sm font-medium">{method.name}</span>
                            </div>
                        </button>
                    ))}
                </div>

                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    {renderPaymentForm()}

                    <button
                        type="submit"
                        disabled={!selectedMethod}
                        className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
                            selectedMethod
                                ? 'bg-purple-600 hover:bg-purple-700'
                                : 'bg-gray-300 cursor-not-allowed'
                        }`}
                    >
                        Complete Payment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentModal; 