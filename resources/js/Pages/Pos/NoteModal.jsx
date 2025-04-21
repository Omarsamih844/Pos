import React, { useState } from 'react';

const NoteModal = ({ isOpen, onClose, onSave, initialNote }) => {
    const [note, setNote] = useState(initialNote || '');

    const handleSubmit = () => {
        onSave(note);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-96 max-w-full mx-4">
                <div className="p-4 border-b">
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Add Note</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            ×
                        </button>
                    </div>
                </div>
                
                <div className="p-4">
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Enter special instructions (e.g., no sauce, no onions, extra cheese)"
                        className="w-full h-32 p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="p-4 border-t flex gap-2">
                    <button
                        onClick={onClose}
                        className="flex-1 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex-1 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Save Note
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteModal; 