import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Calculator from './Calculator';
import ServiceTypeModal from './ServiceTypeModal';
import NoteModal from './NoteModal';
import Receipt from './Receipt';

const PosIndex = ({ auth }) => {
    // Static Categories Data
    const categories = [
        { id: 1, name: 'Food', color: '#FFB6C1' }, // Light pink for food
        { id: 2, name: 'Drinks', color: '#98FB98' } // Light green for drinks
    ];

    // Static Products Data with Images
    const staticProducts = [
        // Food Products
        {
            id: 1,
            name: 'Bacon Burger',
            description: 'Smashed sweet potatoes',
            price: 49.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=150'
        },
        {
            id: 2,
            name: 'Burger Menu Combo',
            description: 'Burger with fries and drink',
            price: 52.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=150'
        },
        {
            id: 3,
            name: 'Cheese Burger',
            description: 'Classic cheeseburger with our special sauce',
            price: 36.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=150'
        },
        {
            id: 4,
            name: 'Chicken Curry Sandwich',
            description: 'Spicy chicken curry sandwich',
            price: 47.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=150'
        },
        {
            id: 5,
            name: 'Club Sandwich',
            description: 'Triple-decker sandwich with bacon',
            price: 45.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?q=80&w=150'
        },
        {
            id: 6,
            name: 'Double Cheeseburger',
            description: 'Double beef patty with cheese',
            price: 32.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=150'
        },
        {
            id: 7,
            name: 'Big Tasty',
            description: 'Our signature tasty burger',
            price: 49.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=150'
        },
        {
            id: 8,
            name: 'Big Chili',
            description: 'Spicy burger with chili sauce',
            price: 49.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=150'
        },
        {
            id: 9,
            name: 'McChicken',
            description: 'Classic chicken burger',
            price: 36.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=150'
        },
        {
            id: 10,
            name: 'Filet-O-Fish',
            description: 'Fish fillet with tartar sauce',
            price: 33.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=150'
        },
        {
            id: 11,
            name: 'Big Mac',
            description: 'The legendary double-decker',
            price: 36.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=150'
        },
        {
            id: 12,
            name: 'Triple Cheese',
            description: 'Triple the cheese, triple the taste',
            price: 38.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1485451456034-3f9391c6f769?q=80&w=150'
        },
        // Drinks Products
        {
            id: 13,
            name: 'Coca-Cola',
            description: 'Classic cola drink',
            price: 15.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=150'
        },
        {
            id: 14,
            name: 'Espresso',
            description: 'Strong Italian coffee',
            price: 18.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=150'
        },
        {
            id: 15,
            name: 'Water',
            description: 'Mineral water',
            price: 8.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=150'
        },
        {
            id: 16,
            name: 'Ice Tea',
            description: 'Refreshing iced tea',
            price: 14.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=150'
        },
        {
            id: 17,
            name: 'Fanta',
            description: 'Orange flavored soda',
            price: 15.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=150'
        },
        {
            id: 18,
            name: 'Green Tea',
            description: 'Traditional Japanese green tea',
            price: 12.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=150'
        },
        {
            id: 19,
            name: 'Milkshake Banana',
            description: 'Creamy banana milkshake topped with whipped cream',
            price: 25.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=150&auto=format&fit=crop'
        },
        {
            id: 20,
            name: 'Chocolate Milkshake',
            description: 'Rich chocolate milkshake with chocolate syrup',
            price: 25.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=150&auto=format&fit=crop'
        },
        {
            id: 21,
            name: 'Strawberry Milkshake',
            description: 'Fresh strawberry milkshake with whipped cream',
            price: 25.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=150&auto=format&fit=crop'
        },
        {
            id: 22,
            name: 'Oreo Milkshake',
            description: 'Creamy vanilla milkshake with crushed Oreos',
            price: 28.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=150&auto=format&fit=crop'
        }
    ];

    const [activeCategory, setActiveCategory] = useState(null);
    const [cart, setCart] = useState([]);
    const [orderType, setOrderType] = useState('eat_in');
    const [tableNumber, setTableNumber] = useState('');
    const [notes, setNotes] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [total, setTotal] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [activeTab, setActiveTab] = useState('tables');
    const [orderNumber, setOrderNumber] = useState(1);
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [foodCount, setFoodCount] = useState(0);
    const [drinksCount, setDrinksCount] = useState(0);
    const [showCalculator, setShowCalculator] = useState(false);
    const [paymentAmount, setPaymentAmount] = useState(0);
    const [change, setChange] = useState(0);
    const [showServiceTypeModal, setShowServiceTypeModal] = useState(false);
    const [deliverySurcharge, setDeliverySurcharge] = useState(0);
    const [showNoteModal, setShowNoteModal] = useState(false);

    useEffect(() => {
        calculateTotals();
        updateCounts();
    }, [cart, orderType]);

    const updateCounts = () => {
        const foodItems = cart.filter(item => 
            staticProducts.find(p => p.id === item.product_id)?.category_id === 1
        ).reduce((sum, item) => sum + item.quantity, 0);
        
        const drinkItems = cart.filter(item => 
            staticProducts.find(p => p.id === item.product_id)?.category_id === 2
        ).reduce((sum, item) => sum + item.quantity, 0);

        setFoodCount(foodItems);
        setDrinksCount(drinkItems);
    };

    const filteredProducts = staticProducts.filter(product => 
        activeCategory ? product.category_id === activeCategory : true
    ).filter(product =>
        searchQuery ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
    );

    const calculateTotals = () => {
        const newSubtotal = cart.reduce((sum, item) => sum + (item.quantity * item.unit_price), 0);
        const newTax = newSubtotal * 0.20; // 20% tax
        let newTotal = newSubtotal + newTax;
        
        // Add 10% delivery surcharge if delivery is selected
        if (orderType === 'delivery') {
            const surcharge = newSubtotal * 0.10;
            setDeliverySurcharge(surcharge);
            newTotal += surcharge;
        } else {
            setDeliverySurcharge(0);
        }

        setSubtotal(newSubtotal);
        setTax(newTax);
        setTotal(newTotal);
    };

    const addToCart = (product) => {
        const existingItem = cart.find(item => item.product_id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.product_id === product.id
                    ? { ...item, quantity: item.quantity + 1, subtotal: (item.quantity + 1) * item.unit_price }
                    : item
            ));
        } else {
            setCart([...cart, {
                product_id: product.id,
                name: product.name,
                description: product.description,
                image: product.image,
                quantity: 1,
                unit_price: product.price,
                subtotal: product.price
            }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.product_id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCart(cart.map(item =>
            item.product_id === productId
                ? { ...item, quantity: newQuantity, subtotal: newQuantity * item.unit_price }
                : item
        ));
    };

    const handlePaymentAmount = (amount) => {
        setPaymentAmount(amount);
        setChange(amount - total);
    };

    const handlePayment = () => {
        if (paymentAmount < total) {
            alert('Payment amount must be greater than or equal to total amount');
            return;
        }

        try {
            const newOrder = {
                id: `ORD-${String(orderNumber).padStart(4, '0')}`,
                items: cart,
                type: orderType,
                table_number: tableNumber,
                notes,
                subtotal,
                tax,
                total,
                status: 'paid',
                timestamp: new Date().toLocaleString(),
                itemCounts: {
                    food: foodCount,
                    drinks: drinksCount
                },
                payment: {
                    amount: paymentAmount,
                    change: change
                }
            };

            // Generate and download receipt
            const receiptGenerator = Receipt();
            receiptGenerator.generateReceipt(newOrder);

            setOrders([...orders, newOrder]);
            setOrderNumber(orderNumber + 1);
            setCart([]);
            setTableNumber('');
            setNotes('');
            setSelectedOrder(null);
            setShowCalculator(false);
            setPaymentAmount(0);
            setChange(0);
        } catch (error) {
            console.error('Error processing payment:', error);
            alert('There was an error processing the payment. Please try again.');
        }
    };

    const loadOrder = (order) => {
        setSelectedOrder(order);
        setCart(order.items);
        setTableNumber(order.table_number);
        setNotes(order.notes);
        setOrderType(order.type);
    };

    const handleServiceTypeSelect = (type) => {
        setOrderType(type);
        setShowServiceTypeModal(false);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="POS System" />
            
            <div className="flex h-screen bg-gray-100">
                {/* Left Side - Cart */}
                <div className="w-1/3 bg-white flex flex-col shadow-lg">
                    {/* Cart Header */}
                    <div className="p-4 bg-purple-900 text-white">
                        <h2 className="text-xl font-semibold">Shopping Cart</h2>
                        <div className="flex gap-4 mt-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span>Items:</span>
                                <span className="bg-white text-purple-900 px-2 py-0.5 rounded-full font-medium">
                                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Total:</span>
                                <span className="bg-white text-purple-900 px-2 py-0.5 rounded-full font-medium">
                                    {total.toFixed(2)} DH
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Cart Items List */}
                    <div className="flex-1 overflow-auto">
                        {cart.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500 p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <p className="text-lg font-medium">Your cart is empty</p>
                                <p className="text-sm">Add items from the menu to get started</p>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div key={item.product_id} 
                                    className="flex items-start px-4 py-3 hover:bg-gray-50 border-b border-gray-100 transition-colors duration-150">
                                    <div className="flex items-center space-x-2 mr-3">
                                        <button 
                                            onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                                            className="w-7 h-7 flex items-center justify-center rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-150"
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center font-bold text-lg">{item.quantity}</span>
                                        <button 
                                            onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                                            className="w-7 h-7 flex items-center justify-center rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors duration-150"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="font-medium text-gray-900">{item.name}</span>
                                                {item.description && (
                                                    <div className="text-sm text-gray-600 italic mt-0.5">- {item.description}</div>
                                                )}
                                                <div className="text-sm text-gray-500 mt-0.5">
                                                    {item.unit_price.toFixed(2)} DH / Unité(s)
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="font-medium text-gray-900">{(item.quantity * item.unit_price).toFixed(2)} DH</span>
                                                <button 
                                                    onClick={() => removeFromCart(item.product_id)}
                                                    className="p-1.5 rounded-full hover:bg-red-100 text-red-600 transition-all duration-150 hover:scale-110"
                                                    title="Delete item"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Taxes and Total */}
                    <div className="border-t border-gray-200 p-4 bg-gray-50">
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>{subtotal.toFixed(2)} DH</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>TVA (20%)</span>
                                <span>{tax.toFixed(2)} DH</span>
                            </div>
                            {deliverySurcharge > 0 && (
                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery Surcharge (10%)</span>
                                    <span>{deliverySurcharge.toFixed(2)} DH</span>
                                </div>
                            )}
                            <div className="h-px bg-gray-200 my-2"></div>
                            <div className="flex justify-between text-lg font-bold text-purple-900">
                                <span>Total</span>
                                <span>{total.toFixed(2)} DH</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="border-t border-gray-200">
                        <div className="grid grid-cols-2 divide-x divide-gray-200">
                            <button 
                                className={`p-4 text-center transition-colors duration-150 ${
                                    notes ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                                }`}
                                onClick={() => setShowNoteModal(true)}
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4zm2 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                    </svg>
                                    {notes ? 'Note Added ✓' : 'Add Note'}
                                </div>
                            </button>
                            <button 
                                className={`p-4 text-center transition-colors duration-150 ${
                                    orderType === 'eat_in' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                                }`}
                                onClick={() => setShowServiceTypeModal(true)}
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {orderType === 'eat_in' ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                            </svg>
                                            <span>Eat In</span>
                                        </>
                                    ) : orderType === 'takeout' ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                                            </svg>
                                            <span>Takeout</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                            </svg>
                                            <span>Delivery</span>
                                        </>
                                    )}
                                </div>
                            </button>
                        </div>

                        {/* Command Summary and Payment Button */}
                        <div className="bg-purple-900 text-white p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-300">Food Items:</span>
                                        <span className="bg-white text-purple-900 px-2 py-0.5 rounded-full font-medium">{foodCount}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-300">Drinks:</span>
                                        <span className="bg-white text-purple-900 px-2 py-0.5 rounded-full font-medium">{drinksCount}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowCalculator(true)}
                                    disabled={cart.length === 0}
                                    className={`relative group overflow-hidden px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                                        cart.length === 0 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl'
                                    }`}
                                >
                                    <div className="relative flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Process Payment</span>
                                    </div>
                                </button>
                            </div>
                            {notes && (
                                <div className="mt-2 p-2 bg-purple-800 rounded-lg">
                                    <div className="text-sm text-gray-300 mb-1">Note:</div>
                                    <div className="text-sm">{notes}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Side - Products */}
                <div className="flex-1 flex flex-col bg-gray-100">
                    {/* Search and Categories */}
                    <div className="p-4 bg-white border-b shadow-sm">
                        <div className="max-w-5xl mx-auto">
                            <div className="flex items-center mb-4">
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                    />
                                    <svg
                                        className="w-5 h-5 absolute left-3 top-3.5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                <button
                                    onClick={() => setActiveCategory(null)}
                                    className={`px-4 py-2 rounded-full flex-shrink-0 font-medium transition-all duration-200 ${
                                        !activeCategory 
                                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-200 transform scale-105' 
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    All Products
                                </button>
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`px-4 py-2 rounded-full flex-shrink-0 font-medium transition-all duration-200 flex items-center gap-2 ${
                                            activeCategory === category.id 
                                                ? 'text-white shadow-lg transform scale-105' 
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                        style={{
                                            backgroundColor: activeCategory === category.id ? category.color : undefined,
                                            boxShadow: activeCategory === category.id ? `0 10px 15px -3px ${category.color}40` : undefined
                                        }}
                                    >
                                        {category.name === 'Food' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1 p-4 overflow-auto bg-gray-100">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredProducts.map((product) => (
                                <button
                                    key={product.id}
                                    onClick={() => addToCart(product)}
                                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left relative overflow-hidden flex flex-col group transform hover:-translate-y-1"
                                >
                                    {/* Product Image */}
                                    <div className="w-full h-40 relative overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-200"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/150?text=No+Image';
                                            }}
                                        />
                                        <div className="absolute top-2 right-2">
                                            {product.category_id === 1 ? (
                                                <span className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                                                    Food
                                                </span>
                                            ) : (
                                                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                                                    Drink
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 text-lg mb-1">{product.name}</h3>
                                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{product.description}</p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-purple-600 font-semibold text-lg">{product.price.toFixed(2)} DH</p>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                                                    Add to cart
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Type Modal */}
            {showServiceTypeModal && (
                <ServiceTypeModal
                    onClose={() => setShowServiceTypeModal(false)}
                    onSelect={handleServiceTypeSelect}
                    currentType={orderType}
                />
            )}

            {/* Note Modal */}
            {showNoteModal && (
                <NoteModal
                    onClose={() => setShowNoteModal(false)}
                    onSave={(note) => setNotes(note)}
                    currentNote={notes}
                />
            )}

            {/* Payment Modal */}
            {showCalculator && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl shadow-2xl w-96 max-w-full mx-4 transform transition-all duration-300 scale-100 opacity-100">
                        {/* Modal Header */}
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">Payment Details</h3>
                                <button
                                    onClick={() => setShowCalculator(false)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-gray-600">
                                    <span>Subtotal</span>
                                    <span>{subtotal.toFixed(2)} DH</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-600">
                                    <span>TVA (20%)</span>
                                    <span>{tax.toFixed(2)} DH</span>
                                </div>
                                {deliverySurcharge > 0 && (
                                    <div className="flex justify-between items-center text-gray-600">
                                        <span>Delivery Fee (10%)</span>
                                        <span>{deliverySurcharge.toFixed(2)} DH</span>
                                    </div>
                                )}
                                <div className="h-px bg-gray-200"></div>
                                <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                                    <span>Total Due</span>
                                    <span>{total.toFixed(2)} DH</span>
                                </div>
                                <div className="flex justify-between items-center text-blue-600">
                                    <span>Amount Paid</span>
                                    <span>{paymentAmount.toFixed(2)} DH</span>
                                </div>
                                <div className="flex justify-between items-center text-green-600 font-medium">
                                    <span>Change</span>
                                    <span>{Math.max(0, change).toFixed(2)} DH</span>
                                </div>
                            </div>
                        </div>

                        {/* Calculator */}
                        <div className="p-6">
                            <Calculator onAmountSubmit={handlePaymentAmount} />
                        </div>

                        {/* Action Buttons */}
                        <div className="p-6 bg-gray-50 rounded-b-2xl border-t border-gray-200">
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowCalculator(false)}
                                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handlePayment}
                                    disabled={paymentAmount < total || cart.length === 0}
                                    className={`flex-1 px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
                                        paymentAmount >= total && cart.length > 0
                                            ? 'bg-green-500 hover:bg-green-600 text-white'
                                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Confirm Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
};

export default PosIndex; 