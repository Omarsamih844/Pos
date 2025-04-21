import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ServiceTypeModal from './ServiceTypeModal';
import NoteModal from './NoteModal';
import Receipt from './Receipt';
import PromotionModal from './PromotionModal';
import CustomizeModal from './CustomizeModal';
import PaymentModal from './PaymentModal';

const PosIndex = ({ auth }) => {
    // Static Categories Data
    const categories = [
        { id: 1, name: 'Plats', color: '#FFB6C1' }, // Light pink for food
        { id: 2, name: 'Boissons', color: '#98FB98' } // Light green for drinks
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
    const [showPromotionModal, setShowPromotionModal] = useState(false);
    const [showCustomizeModal, setShowCustomizeModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activePromotion, setActivePromotion] = useState(null);
    const [customizations, setCustomizations] = useState({});

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
        const newSubtotal = cart.reduce((sum, item) => {
            let itemTotal = item.quantity * item.unit_price;
            
            // Add customization charges
            if (customizations[item.product_id]) {
                itemTotal += customizations[item.product_id].extraCharge * item.quantity;
            }
            
            return sum + itemTotal;
        }, 0);

        const newTax = newSubtotal * 0.20; // 20% tax
        let newTotal = newSubtotal + newTax;
        
        // Add delivery surcharge if delivery is selected
        if (orderType === 'delivery') {
            const surcharge = newSubtotal * 0.10;
            setDeliverySurcharge(surcharge);
            newTotal += surcharge;
        } else {
            setDeliverySurcharge(0);
        }

        // Apply promotion discount if active
        if (activePromotion) {
            newTotal -= activePromotion.discountAmount;
        }

        setSubtotal(newSubtotal);
        setTax(newTax);
        setTotal(newTotal);
    };

    const addToCart = (product, customizations = null) => {
        const existingItem = cart.find(item => 
            item.product_id === product.id && 
            JSON.stringify(item.customizations) === JSON.stringify(customizations)
        );

        if (existingItem) {
            setCart(cart.map(item =>
                item.product_id === product.id && 
                JSON.stringify(item.customizations) === JSON.stringify(customizations)
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
                subtotal: product.price,
                customizations: customizations
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

    const handlePayment = (payment) => {
        try {
            // Validation des données de paiement
            if (!payment || !payment.method) {
                throw new Error('Méthode de paiement invalide');
            }

        // Set the payment amount from the payment details
        const amount = payment.method === 'cash' ? payment.details.amount : total;
        setPaymentAmount(amount);
        
        if (amount < total) {
                throw new Error('Le montant payé doit être supérieur ou égal au montant total');
        }

            // Création de la nouvelle commande
            const newOrder = {
                id: `ORD-${String(orderNumber).padStart(4, '0')}`,
                cashier: auth.user.name,
                items: cart.map(item => ({
                    name: item.name,
                    quantity: item.quantity,
                    unit_price: item.unit_price,
                    subtotal: item.quantity * item.unit_price,
                    customizations: customizations[item.product_id]
                })),
                type: orderType,
                table_number: tableNumber,
                notes,
                subtotal,
                tax,
                total,
                status: 'paid',
                timestamp: new Date().toLocaleString('fr-FR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                }),
                payment: {
                    method: payment.method,
                    details: payment.details,
                    amount: amount
                },
                promotion: activePromotion
            };

            // Génération du reçu
            const receiptGenerator = Receipt();
            receiptGenerator.generateReceipt(newOrder);

            // Mise à jour de l'état
            setOrders([...orders, newOrder]);
            setOrderNumber(orderNumber + 1);
            setCart([]);
            setTableNumber('');
            setNotes('');
            setSelectedOrder(null);
            setPaymentAmount(0);
            setChange(0);
            setActivePromotion(null);
            setCustomizations({});
            setSelectedProduct(null);
            setShowPaymentModal(false);

        } catch (error) {
            console.error('Error processing payment:', error);
            alert(error.message || 'Une erreur est survenue lors du traitement du paiement. Veuillez réessayer.');
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

    const handlePromotionApply = (promotion) => {
        setActivePromotion(promotion);
        calculateTotals();
    };

    const handleCustomize = (product, customizations) => {
        if (customizations) {
            addToCart(product, customizations);
        }
        setShowCustomizeModal(false);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Système de Caisse" />
            
            <div className="flex h-screen bg-gray-100">
                {/* Left Side - Cart */}
                <div className="w-1/3 bg-white flex flex-col shadow-lg">
                    {/* Cart Header */}
                    <div className="p-4 bg-blue-900 text-white">
                        <h2 className="text-xl font-semibold">Panier</h2>
                        <div className="flex gap-4 mt-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span>Articles:</span>
                                <span className="bg-white text-blue-900 px-2 py-0.5 rounded-full font-medium">
                                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Total:</span>
                                <span className="bg-white text-blue-900 px-2 py-0.5 rounded-full font-medium">
                                    {total.toFixed(2)} MAD
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
                                <p className="text-lg font-medium">Votre panier est vide</p>
                                <p className="text-sm">Ajoutez des articles du menu pour commencer</p>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div 
                                    key={item.product_id} 
                                    onClick={() => setSelectedProduct(staticProducts.find(p => p.id === item.product_id))}
                                    className={`flex items-start px-4 py-3 hover:bg-gray-50 border-b border-gray-100 transition-colors cursor-pointer ${
                                        selectedProduct?.id === item.product_id ? 'bg-blue-50' : ''
                                    }`}
                                >
                                    <div className="flex items-center space-x-2 mr-3">
                                        <span className="w-16 text-center font-bold text-lg">{item.quantity}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="font-medium text-gray-900">{item.name}</span>
                                                {item.description && (
                                                    <div className="text-sm text-gray-600 italic mt-0.5">- {item.description}</div>
                                                )}
                                                {customizations[item.product_id] && (
                                                    <div className="text-sm text-blue-600 mt-1">
                                                        {Object.entries(customizations[item.product_id].options).map(([category, selection]) => (
                                                            <div key={category}>
                                                                {Array.isArray(selection) 
                                                                    ? selection.map(opt => `• ${opt.name || opt}`).join(', ')
                                                                    : `• ${selection.name || selection}`}
                                                            </div>
                                                        ))}
                                                        {customizations[item.product_id].instructions && (
                                                            <div className="text-gray-600 italic">
                                                                Note: {customizations[item.product_id].instructions}
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                                <div className="text-sm text-gray-500 mt-0.5">
                                                    {item.unit_price.toFixed(2)} MAD / Unité(s)
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <span className="font-medium text-gray-900">{(item.quantity * item.unit_price).toFixed(2)} MAD</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Current Product Display */}
                    {selectedProduct && (
                        <div className="border-t border-gray-200 p-4 bg-blue-50">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="font-medium text-lg">{selectedProduct.name}</h3>
                                    <p className="text-gray-600">{selectedProduct.price.toFixed(2)} MAD / Unité</p>
                                </div>
                                <div className="text-2xl font-bold">
                                    {(cart.find(item => item.product_id === selectedProduct.id)?.quantity || 0)}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Taxes and Total */}
                    <div className="border-t border-gray-200 p-4 bg-gray-50">
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-600">
                                <span>Sous-total</span>
                                <span>{subtotal.toFixed(2)} MAD</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>TVA (20%)</span>
                                <span>{tax.toFixed(2)} MAD</span>
                            </div>
                            {deliverySurcharge > 0 && (
                                <div className="flex justify-between text-gray-600">
                                    <span>Frais de livraison (10%)</span>
                                    <span>{deliverySurcharge.toFixed(2)} MAD</span>
                                </div>
                            )}
                            {activePromotion && (
                                <div className="flex justify-between text-green-600">
                                    <span>{activePromotion.name}</span>
                                    <span>-{activePromotion.discountAmount.toFixed(2)} MAD</span>
                                </div>
                            )}
                            <div className="h-px bg-gray-200 my-2"></div>
                            <div className="flex justify-between text-lg font-bold text-blue-900">
                                <span>Total</span>
                                <span>{total.toFixed(2)} MAD</span>
                            </div>
                        </div>
                    </div>

                    {/* Numeric Keypad */}
                    <div className="border-t border-gray-200">
                        <div className="grid grid-cols-4 gap-0">
                            <div className="col-span-3">
                                <div className="grid grid-cols-3 gap-0">
                                    {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.', '⌫'].map((num) => (
                            <button 
                                            key={num}
                                            onClick={() => {
                                                if (selectedProduct) {
                                                    const currentQty = cart.find(item => item.product_id === selectedProduct.id)?.quantity || 0;
                                                    if (num === '⌫') {
                                                        updateQuantity(selectedProduct.id, Math.floor(currentQty / 10));
                                                    } else {
                                                        const newQty = parseInt(currentQty.toString() + num);
                                                        updateQuantity(selectedProduct.id, newQty);
                                                    }
                                                }
                                            }}
                                            className="p-4 text-xl font-medium hover:bg-gray-100 border-r border-b transition-colors"
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <button
                                    onClick={() => {
                                        if (selectedProduct) {
                                            const currentQty = cart.find(item => item.product_id === selectedProduct.id)?.quantity || 0;
                                            updateQuantity(selectedProduct.id, currentQty + 1);
                                        }
                                    }}
                                    className="p-4 text-xl font-medium hover:bg-gray-100 border-b transition-colors"
                                >
                                    +
                            </button>
                            <button 
                                    onClick={() => {
                                        if (selectedProduct) {
                                            const currentQty = cart.find(item => item.product_id === selectedProduct.id)?.quantity || 0;
                                            if (currentQty > 1) {
                                                updateQuantity(selectedProduct.id, currentQty - 1);
                                            }
                                        }
                                    }}
                                    className="p-4 text-xl font-medium hover:bg-gray-100 border-b transition-colors"
                                >
                                    -
                            </button>
                            <button 
                                    onClick={() => {
                                        if (selectedProduct) {
                                            removeFromCart(selectedProduct.id);
                                            setSelectedProduct(null);
                                        }
                                    }}
                                    className="p-4 text-xl font-medium hover:bg-gray-100 border-b transition-colors text-red-600"
                                >
                                    C
                            </button>
                            <button 
                                onClick={() => setShowPaymentModal(true)}
                                    className="p-4 text-xl font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                >
                                    ↵
                                </button>
                                </div>
                        </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="flex gap-2 p-4 bg-white border-t">
                        <button
                            onClick={() => setShowPaymentModal(true)}
                            className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Payer ({total.toFixed(2)} MAD)
                        </button>
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
                                        placeholder="Rechercher des produits..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 transform scale-105' 
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                                >
                                    Tous les produits
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
                                        {category.name === 'Plats' ? (
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
                                <div
                                    key={product.id}
                                    onClick={() => {
                                        setSelectedProduct(product);
                                        setShowCustomizeModal(true);
                                    }}
                                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
                                >
                                    <div className="relative h-40">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/150?text=Pas+d%27image';
                                            }}
                                        />
                                        <div className="absolute top-2 left-2">
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-white text-gray-800 shadow-sm">
                                                {categories.find(c => c.id === product.category_id)?.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900">{product.name}</h3>
                                        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                                        <div className="mt-2 text-lg font-semibold text-blue-600">
                                            {product.price.toFixed(2)} MAD
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <ServiceTypeModal
                isOpen={showServiceTypeModal}
                onClose={() => setShowServiceTypeModal(false)}
                onSelect={handleServiceTypeSelect}
                currentType={orderType}
            />

            <NoteModal
                isOpen={showNoteModal}
                onClose={() => setShowNoteModal(false)}
                onSave={setNotes}
                initialNote={notes}
            />

            <PromotionModal
                isOpen={showPromotionModal}
                onClose={() => setShowPromotionModal(false)}
                onApply={handlePromotionApply}
                subtotal={subtotal}
            />

            <CustomizeModal
                isOpen={showCustomizeModal}
                onClose={() => setShowCustomizeModal(false)}
                onApply={handleCustomize}
                product={selectedProduct}
            />

            <PaymentModal
                isOpen={showPaymentModal}
                onClose={() => setShowPaymentModal(false)}
                onComplete={handlePayment}
                total={total}
            />
        </AuthenticatedLayout>
    );
};

export default PosIndex; 