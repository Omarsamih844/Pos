import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const ReservationSystem = ({ auth }) => {
    const [reservations, setReservations] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [partySize, setPartySize] = useState(2);
    const [tableNumber, setTableNumber] = useState('');
    const [notes, setNotes] = useState('');

    // Available time slots
    const timeSlots = [
        '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
        '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
        '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
        '20:00', '20:30', '21:00', '21:30'
    ];

    // Table configuration
    const tables = [
        { number: 1, capacity: 2 },
        { number: 2, capacity: 2 },
        { number: 3, capacity: 4 },
        { number: 4, capacity: 4 },
        { number: 5, capacity: 6 },
        { number: 6, capacity: 6 },
        { number: 7, capacity: 8 },
        { number: 8, capacity: 8 }
    ];

    useEffect(() => {
        // Simulated API call to fetch reservations
        const mockReservations = [
            {
                id: 1,
                date: '2024-03-20',
                time: '19:00',
                customerName: 'John Doe',
                customerPhone: '+212 666-123456',
                partySize: 4,
                tableNumber: '3',
                status: 'confirmed',
                notes: 'Birthday celebration'
            }
        ];
        setReservations(mockReservations);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReservation = {
            id: reservations.length + 1,
            date: selectedDate,
            time: selectedTime,
            customerName,
            customerPhone,
            partySize,
            tableNumber,
            status: 'confirmed',
            notes
        };
        setReservations([...reservations, newReservation]);
        resetForm();
    };

    const resetForm = () => {
        setShowForm(false);
        setSelectedDate('');
        setSelectedTime('');
        setCustomerName('');
        setCustomerPhone('');
        setPartySize(2);
        setTableNumber('');
        setNotes('');
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const updateReservationStatus = (id, newStatus) => {
        setReservations(reservations.map(reservation =>
            reservation.id === id ? { ...reservation, status: newStatus } : reservation
        ));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Reservation System" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Reservations</h2>
                        <button
                            onClick={() => setShowForm(true)}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                        >
                            New Reservation
                        </button>
                    </div>

                    {showForm && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold">New Reservation</h3>
                                    <button onClick={resetForm} className="text-gray-500 hover:text-gray-700">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            value={selectedDate}
                                            onChange={(e) => setSelectedDate(e.target.value)}
                                            className="w-full p-2 border rounded-lg"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Time
                                        </label>
                                        <select
                                            value={selectedTime}
                                            onChange={(e) => setSelectedTime(e.target.value)}
                                            className="w-full p-2 border rounded-lg"
                                            required
                                        >
                                            <option value="">Select time</option>
                                            {timeSlots.map(time => (
                                                <option key={time} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Customer Name
                                        </label>
                                        <input
                                            type="text"
                                            value={customerName}
                                            onChange={(e) => setCustomerName(e.target.value)}
                                            className="w-full p-2 border rounded-lg"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={customerPhone}
                                            onChange={(e) => setCustomerPhone(e.target.value)}
                                            className="w-full p-2 border rounded-lg"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Party Size
                                        </label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="20"
                                            value={partySize}
                                            onChange={(e) => setPartySize(parseInt(e.target.value))}
                                            className="w-full p-2 border rounded-lg"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Table Number
                                        </label>
                                        <select
                                            value={tableNumber}
                                            onChange={(e) => setTableNumber(e.target.value)}
                                            className="w-full p-2 border rounded-lg"
                                            required
                                        >
                                            <option value="">Select table</option>
                                            {tables
                                                .filter(table => table.capacity >= partySize)
                                                .map(table => (
                                                    <option key={table.number} value={table.number}>
                                                        Table {table.number} (Seats {table.capacity})
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Notes
                                        </label>
                                        <textarea
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                            className="w-full p-2 border rounded-lg h-24 resize-none"
                                            placeholder="Special requests or notes..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                                    >
                                        Create Reservation
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date & Time
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Customer
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Party Size
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Table
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {reservations.map((reservation) => (
                                    <tr key={reservation.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {reservation.date}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {reservation.time}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {reservation.customerName}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {reservation.customerPhone}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {reservation.partySize} people
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Table {reservation.tableNumber}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(reservation.status)}`}>
                                                {reservation.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <div className="flex space-x-2">
                                                {reservation.status === 'confirmed' && (
                                                    <button
                                                        onClick={() => updateReservationStatus(reservation.id, 'cancelled')}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Cancel
                                                    </button>
                                                )}
                                                {reservation.status === 'pending' && (
                                                    <button
                                                        onClick={() => updateReservationStatus(reservation.id, 'confirmed')}
                                                        className="text-green-600 hover:text-green-900"
                                                    >
                                                        Confirm
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ReservationSystem; 