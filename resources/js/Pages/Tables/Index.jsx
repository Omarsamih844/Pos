import React from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const TablesIndex = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Tables Management" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Tables Management</h2>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6">
                        <p className="text-gray-600 mb-4">
                            This page will allow you to manage tables in the restaurant. 
                            You can add, edit, or remove tables as needed.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {/* Example table cards - to be replaced with actual table data */}
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="font-semibold">Table #{index + 1}</h3>
                                        <span className={`px-2 py-1 text-xs rounded-full ${
                                            index % 3 === 0 ? 'bg-green-100 text-green-800' : 
                                            index % 3 === 1 ? 'bg-red-100 text-red-800' : 
                                            'bg-yellow-100 text-yellow-800'
                                        }`}>
                                            {index % 3 === 0 ? 'Available' : 
                                             index % 3 === 1 ? 'Occupied' : 
                                             'Reserved'}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">Capacity: {4 + (index % 4)} people</p>
                                    <div className="mt-4 flex justify-end space-x-2">
                                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                                            Edit
                                        </button>
                                        <button className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-center">
                            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                                Add New Table
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default TablesIndex; 