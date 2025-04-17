import React, { useState } from 'react';

const Calculator = ({ onAmountSubmit }) => {
    const [display, setDisplay] = useState('0');
    const [hasDecimal, setHasDecimal] = useState(false);

    const handleNumber = (num) => {
        setDisplay(prev => {
            if (prev === '0') return num.toString();
            return prev + num;
        });
    };

    const handleDecimal = () => {
        if (!hasDecimal) {
            setDisplay(prev => prev + '.');
            setHasDecimal(true);
        }
    };

    const handleClear = () => {
        setDisplay('0');
        setHasDecimal(false);
    };

    const handleBackspace = () => {
        setDisplay(prev => {
            const newValue = prev.slice(0, -1);
            if (newValue === '') return '0';
            if (!newValue.includes('.')) setHasDecimal(false);
            return newValue;
        });
    };

    const handleSubmit = () => {
        onAmountSubmit(parseFloat(display));
    };

    const buttons = [
        { text: '7', onClick: () => handleNumber(7) },
        { text: '8', onClick: () => handleNumber(8) },
        { text: '9', onClick: () => handleNumber(9) },
        { text: '4', onClick: () => handleNumber(4) },
        { text: '5', onClick: () => handleNumber(5) },
        { text: '6', onClick: () => handleNumber(6) },
        { text: '1', onClick: () => handleNumber(1) },
        { text: '2', onClick: () => handleNumber(2) },
        { text: '3', onClick: () => handleNumber(3) },
        { text: '0', onClick: () => handleNumber(0) },
        { text: '.', onClick: handleDecimal },
        { text: '⌫', onClick: handleBackspace },
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            {/* Display */}
            <div className="bg-gray-100 p-4 rounded mb-4">
                <div className="text-right text-2xl font-mono">{display} DH</div>
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-3 gap-2">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        onClick={button.onClick}
                        className="p-4 text-xl font-semibold bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                    >
                        {button.text}
                    </button>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mt-2">
                <button
                    onClick={handleClear}
                    className="p-4 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
                >
                    Clear
                </button>
                <button
                    onClick={handleSubmit}
                    className="p-4 text-white bg-green-500 rounded hover:bg-green-600 transition-colors"
                >
                    Enter
                </button>
            </div>
        </div>
    );
};

export default Calculator; 