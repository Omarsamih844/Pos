import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ServiceTypeModal from './ServiceTypeModal';
import NoteModal from './NoteModal';
import Receipt from './Receipt';
import PromotionModal from './PromotionModal';
import CustomizeModal from './CustomizeModal';
import PaymentModal from './PaymentModal';
import { 
    DocumentTextIcon, 
    ShoppingCartIcon, 
    PencilIcon, 
    TrashIcon, 
    BanknotesIcon, // Using BanknotesIcon instead of CashIcon
    HomeIcon,
    ShoppingBagIcon,
    MapPinIcon,
    PlusIcon,
    ClipboardDocumentIcon,
    ClockIcon,
    XMarkIcon
} from '@heroicons/react/24/solid';

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
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=100'
        },
        {
            id: 2,
            name: 'Burger Menu Combo',
            description: 'Burger with fries and drink',
            price: 52.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=100'
        },
        {
            id: 3,
            name: 'Cheese Burger',
            description: 'Classic cheeseburger with our special sauce',
            price: 36.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=100'
        },
        {
            id: 4,
            name: 'Chicken Curry Sandwich',
            description: 'Spicy chicken curry sandwich',
            price: 47.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=100'
        },
        {
            id: 5,
            name: 'Club Sandwich',
            description: 'Triple-decker sandwich with bacon',
            price: 45.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?q=80&w=100'
        },
        {
            id: 6,
            name: 'Double Cheeseburger',
            description: 'Double beef patty with cheese',
            price: 32.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=100'
        },
        {
            id: 7,
            name: 'Big Tasty',
            description: 'Our signature tasty burger',
            price: 49.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=100'
        },
        {
            id: 8,
            name: 'Big Chili',
            description: 'Spicy burger with chili sauce',
            price: 49.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=100'
        },
        {
            id: 9,
            name: 'McChicken',
            description: 'Classic chicken burger',
            price: 36.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=100'
        },
        {
            id: 10,
            name: 'Filet-O-Fish',
            description: 'Fish fillet with tartar sauce',
            price: 33.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=100'
        },
        {
            id: 11,
            name: 'Big Mac',
            description: 'The legendary double-decker',
            price: 36.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=100'
        },
        {
            id: 12,
            name: 'Triple Cheese',
            description: 'Triple the cheese, triple the taste',
            price: 38.00,
            category_id: 1,
            image: 'https://images.unsplash.com/photo-1485451456034-3f9391c6f769?q=80&w=100'
        },
        // Drinks Products
        {
            id: 13,
            name: 'Coca-Cola',
            description: 'Classic cola drink',
            price: 15.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=100'
        },
        {
            id: 14,
            name: 'Espresso',
            description: 'Strong Italian coffee',
            price: 18.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=100'
        },
        {
            id: 15,
            name: 'Water',
            description: 'Mineral water',
            price: 8.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=100'
        },
        {
            id: 16,
            name: 'Ice Tea',
            description: 'Refreshing iced tea',
            price: 14.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=100'
        },
        {
            id: 17,
            name: 'Fanta',
            description: 'Orange flavored soda',
            price: 15.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=100'
        },
        {
            id: 18,
            name: 'Green Tea',
            description: 'Traditional Japanese green tea',
            price: 12.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=100'
        },
        {
            id: 19,
            name: 'Milkshake Banana',
            description: 'Creamy banana milkshake topped with whipped cream',
            price: 25.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=100&auto=format&fit=crop'
        },
        {
            id: 20,
            name: 'Chocolate Milkshake',
            description: 'Rich chocolate milkshake with chocolate syrup',
            price: 25.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=100&auto=format&fit=crop'
        },
        {
            id: 21,
            name: 'Strawberry Milkshake',
            description: 'Fresh strawberry milkshake with whipped cream',
            price: 25.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=100&auto=format&fit=crop'
        },
        {
            id: 22,
            name: 'Oreo Milkshake',
            description: 'Creamy vanilla milkshake with crushed Oreos',
            price: 28.00,
            category_id: 2,
            image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=100&auto=format&fit=crop'
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
    const [activeTab, setActiveTab] = useState('caisse');
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
    const [startNewInput, setStartNewInput] = useState(true);
    const [activeOrders, setActiveOrders] = useState([]);
    const [activeOrderId, setActiveOrderId] = useState(null);
    const [showOrderHistory, setShowOrderHistory] = useState(false);
    const [activeHistoryTab, setActiveHistoryTab] = useState('all'); // 'all', 'pending', 'paid', 'cancelled'
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertTitle, setAlertTitle] = useState('');
    const [alertCallback, setAlertCallback] = useState(null);
    const [isConfirm, setIsConfirm] = useState(false);
    const [tables, setTables] = useState([
        { id: '1', status: 'available' },
        { id: '2', status: 'available' },
        { id: '3', status: 'available' },
        { id: '4', status: 'available' },
        { id: '5', status: 'available' },
        { id: '6', status: 'available' },
        { id: '7', status: 'available' },
        { id: '8', status: 'available' },
        { id: '9', status: 'available' },
        { id: '10', status: 'available' },
        { id: '11', status: 'available' },
        { id: '12', status: 'available' },
        // Patio tables
        { id: '20', status: 'available' },
        { id: '21', status: 'available' },
        { id: '22', status: 'available' },
        { id: '23', status: 'available' },
        { id: '24', status: 'available' },
        { id: '25', status: 'available' },
    ]);
    const [activeFloor, setActiveFloor] = useState('Main Floor');

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
        // Check if there's an active order
        if (!activeOrderId) {
            showAlert('Veuillez créer une nouvelle commande d\'abord.', 'Attention');
            return;
        }

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
        if (newQuantity < 1) {
            // If quantity is less than 1, remove the item from cart
            removeFromCart(productId);
            return;
        }
        
        setCart(cart.map(item =>
            item.product_id === productId
                ? { 
                    ...item, 
                    quantity: newQuantity, 
                    subtotal: newQuantity * (item.unit_price || item.price) 
                }
                : item
        ));
    };

    const handleNewOrder = () => {
        // Generate unique ID for the new order
        const newOrderId = `TEMP-${Date.now()}`;
        
        // Create a new order with initial state
        const newOrder = {
            id: newOrderId,
            items: [],
            type: 'takeout', // Default type
            table_number: '',
            notes: '',
            status: 'pending', // En cours
            timestamp: new Date().toLocaleString('fr-FR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }),
            subtotal: 0,
            tax: 0,
            total: 0
        };
        
        // Add to active orders and set as current
        setActiveOrders([...activeOrders, newOrder]);
        
        // Activate the new order
        setActiveOrderId(newOrderId);
        setCart([]);
        setTableNumber('');
        setNotes('');
        setSelectedProduct(null);
        setActivePromotion(null);
        setCustomizations({});
        
        // Make sure we're showing the caisse tab with our new order
        setActiveTab('caisse');
        
        // Show service type modal for the new order
        setShowServiceTypeModal(true);
    };

    const switchToOrder = (orderId) => {
        // Save current order state if an order is active
        if (activeOrderId) {
            saveCurrentOrderState();
        }
        
        // Load the selected order
        const orderToLoad = activeOrders.find(order => order.id === orderId);
        if (orderToLoad) {
            setActiveOrderId(orderId);
            setCart(orderToLoad.items || []);
            setOrderType(orderToLoad.type || 'takeout');
            setTableNumber(orderToLoad.table_number || '');
            setNotes(orderToLoad.notes || '');
            // Recalculate will happen via useEffect
        }
    };

    const saveCurrentOrderState = () => {
        if (!activeOrderId) return;
        
        setActiveOrders(activeOrders.map(order => 
            order.id === activeOrderId
                ? { 
                    ...order, 
                    items: cart,
                    type: orderType,
                    table_number: tableNumber,
                    notes: notes,
                    subtotal: subtotal,
                    tax: tax,
                    total: total
                }
                : order
        ));
    };

    const cancelOrder = (orderId) => {
        const orderToCancel = orderId || activeOrderId;
        if (!orderToCancel) return;
        
        showConfirm('Êtes-vous sûr de vouloir annuler cette commande?', (confirmed) => {
            if (confirmed) {
                // Update order status to cancelled
                setActiveOrders(activeOrders.map(order => 
                    order.id === orderToCancel
                        ? { ...order, status: 'cancelled' } // Annulée
                        : order
                ));
                
                // If cancelling the active order, clear the cart
                if (orderToCancel === activeOrderId) {
                    setCart([]);
                    setActiveOrderId(null);
                }
            }
        });
    };

    useEffect(() => {
        if (activeOrderId) {
            saveCurrentOrderState();
        }
    }, [cart, orderType, tableNumber, notes, subtotal, tax, total]);

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

            // If there's no active order, create one
            if (!activeOrderId) {
                throw new Error('Aucune commande active. Veuillez créer une commande d\'abord.');
            }

            // Find the current active order
            const currentOrder = activeOrders.find(order => order.id === activeOrderId);
            if (!currentOrder) {
                throw new Error('Commande non trouvée.');
            }

            // Create the final paid order
            const finalOrder = {
                id: currentOrder.id.startsWith('TEMP-') 
                    ? `ORD-${String(orderNumber).padStart(4, '0')}` 
                    : currentOrder.id,
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
                status: 'paid', // Payée
                timestamp: currentOrder.timestamp,
                payment: {
                    method: payment.method,
                    details: payment.details,
                    amount: amount
                },
                promotion: activePromotion
            };

            // Generate the receipt
            const receiptGenerator = Receipt();
            receiptGenerator.generateReceipt(finalOrder);

            // Remove order from activeOrders
            setActiveOrders(activeOrders.filter(order => order.id !== activeOrderId));
            
            // Add to completed orders
            setOrders([...orders, finalOrder]);
            setOrderNumber(orderNumber + 1);
            
            // Reset everything to initial state
            setActiveOrderId(null);
            setCart([]);
            setTableNumber('');
            setNotes('');
            setPaymentAmount(0);
            setChange(0);
            setActivePromotion(null);
            setCustomizations({});
            setSelectedProduct(null);
            setShowPaymentModal(false);
            
            // Show success message
            showAlert('Paiement réussi!', 'Succès');

        } catch (error) {
            console.error('Error processing payment:', error);
            showAlert(error.message || 'Une erreur est survenue lors du traitement du paiement. Veuillez réessayer.', 'Erreur');
        }
    };

    const loadOrder = (order) => {
        setSelectedOrder(order);
        setCart(order.items);
        setTableNumber(order.table_number);
        setNotes(order.notes);
        setOrderType(order.type);
    };

    const handleServiceTypeSelect = (type, showTables = false) => {
        setOrderType(type);
        setShowServiceTypeModal(false);
        
        // If eat_in is selected and showTables is true, switch to tables tab temporarily
        if (type === 'eat_in' && showTables) {
            setActiveTab('tables');
        } else {
            // For other service types, make sure we stay on or return to caisse tab
            setActiveTab('caisse');
        }
    };

    const handlePromotionApply = (promotion) => {
        setActivePromotion(promotion);
        calculateTotals();
    };

    const handleCustomize = (product, customizations) => {
        // Check if there's an active order before proceeding
        if (!activeOrderId) {
            showAlert('Veuillez créer une nouvelle commande d\'abord.', 'Attention');
            setShowCustomizeModal(false);
            return;
        }

        if (customizations) {
            addToCart(product, customizations);
        }
        setShowCustomizeModal(false);
    };

    // Function to get status badge styling
    const getStatusBadgeClass = (status) => {
        switch(status) {
            case 'paid':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // Function to translate status to French
    const getStatusText = (status) => {
        switch(status) {
            case 'paid':
                return 'Payée';
            case 'pending':
                return 'En cours';
            case 'cancelled':
                return 'Annulée';
            default:
                return status;
        }
    };

    // Replace alert() function with a modal
    const showAlert = (message, title = 'Information') => {
        setAlertMessage(message);
        setAlertTitle(title);
        setIsConfirm(false);
        setAlertCallback(null);
        setShowAlertModal(true);
    };

    // Replace confirm() function with a modal
    const showConfirm = (message, callback, title = 'Confirmation') => {
        setAlertMessage(message);
        setAlertTitle(title);
        setIsConfirm(true);
        setAlertCallback(() => callback);
        setShowAlertModal(true);
    };

    const handleTableSelect = (tableId) => {
        // Check if table is already occupied
        const tableOccupied = activeOrders.some(order => 
            order.status === 'pending' && order.table_number === tableId
        );
        
        if (tableOccupied) {
            showAlert('Cette table est déjà occupée.', 'Attention');
            return;
        }
        
        // Set the table number
        setTableNumber(tableId);
        setOrderType('eat_in');
        
        // Switch to the Caisse tab
        setActiveTab('caisse');
    };

    // Update table status whenever activeOrders changes
    useEffect(() => {
        const updatedTables = [...tables];
        
        // Reset all tables to available first
        updatedTables.forEach(table => table.status = 'available');
        
        // Mark tables with active orders as occupied
        activeOrders.forEach(order => {
            if (order.status === 'pending' && order.table_number) {
                const tableIndex = updatedTables.findIndex(t => t.id === order.table_number);
                if (tableIndex >= 0) {
                    updatedTables[tableIndex].status = 'occupied';
                }
            }
        });
        
        setTables(updatedTables);
    }, [activeOrders]);

    // Update getTableColor function to remove the 'reserved' status option
    const getTableColor = (tableId, isSelected = false) => {
        const status = tableStatuses[tableId]?.status;
        
        if (status === 'occupied') return 'bg-red-400 border-red-600';
        return 'bg-green-400 border-green-600'; // available
    };

    const formatPrice = (price) => {
        // Handle null or undefined price values
        if (price === undefined || price === null) {
            return '0.00 MAD';
        }
        return `${price.toFixed(2)} MAD`;
    };

    const handleEditCartItem = (index) => {
        // Implement edit functionality
        console.log(`Editing item at index: ${index}`);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Système de Caisse" />
            
            <div className="min-h-screen bg-gray-100">
                <Head title="Point of Sale" />
                <div className="flex h-screen">
                    {/* Left Side - Cart - Wider to show more content */}
                    <div className="w-2/5 bg-white flex flex-col shadow-lg">
                        <div className="p-4 bg-blue-600 text-white">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold">Panier</h2>
                                <div>
                                    <span className="text-sm">
                                        {tableNumber ? `Table #${tableNumber}` : 'Aucune table'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Cart Header - more compact with active orders */}
                        <div className="p-3 bg-blue-900 text-white">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold">Panier</h2>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleNewOrder}
                                        className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm font-medium min-w-[100px] h-10 flex items-center justify-center shadow-md"
                                    >
                                        <PlusIcon className="h-5 w-5 mr-1" />
                                        Nouvelle
                                    </button>
                                    <div className="relative group">
                                        <button
                                            className="px-3 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 text-sm font-medium min-w-[100px] h-10 flex items-center justify-center shadow-md"
                                        >
                                            <ClipboardDocumentIcon className="h-5 w-5 mr-1" />
                                            Commandes <span className="ml-1 bg-white text-blue-900 rounded-full h-5 w-5 flex items-center justify-center text-xs">{activeOrders.filter(o => o.status === 'pending').length}</span>
                                        </button>
                                        
                                        {/* Active Orders Dropdown */}
                                        <div className="absolute right-0 mt-1 bg-white rounded-md shadow-lg overflow-hidden z-10 w-64 hidden group-hover:block">
                                            <div className="py-1 max-h-80 overflow-y-auto">
                                                {activeOrders.filter(o => o.status === 'pending').length === 0 ? (
                                                    <div className="px-4 py-3 text-sm text-gray-500">Aucune commande active</div>
                                                ) : (
                                                    activeOrders.filter(o => o.status === 'pending').map(order => (
                                                        <div 
                                                            key={order.id} 
                                                            className={`px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer ${activeOrderId === order.id ? 'bg-blue-50' : ''}`}
                                                            onClick={() => switchToOrder(order.id)}
                                                        >
                                                            <div className="flex justify-between items-center">
                                                                <div className="flex flex-col">
                                                                    <span className="font-medium">
                                                                        {order.type === 'eat_in' ? 'Sur Place' : order.type === 'takeout' ? 'À Emporter' : 'Livraison'}
                                                                        {order.table_number && ` - Table ${order.table_number}`}
                                                                    </span>
                                                                    <span className="text-xs text-gray-500">{order.timestamp}</span>
                                                                </div>
                                                                <span className="font-medium">{order.total.toFixed(2)} MAD</span>
                                                            </div>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* History Button */}
                                    <button
                                        onClick={() => setShowOrderHistory(!showOrderHistory)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium min-w-[100px] h-10 flex items-center justify-center shadow-md ${
                                            showOrderHistory ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        }`}
                                    >
                                        <ClockIcon className="h-5 w-5 mr-1" />
                                        Historique
                                    </button>
                                </div>
                            </div>
                            
                            {/* Active Order ID with larger cancel button */}
                            {activeOrderId && (
                                <div className="mt-2 flex justify-between items-center">
                                    <div className="bg-blue-700 text-white px-2 py-1 rounded text-sm flex items-center">
                                        <ClipboardDocumentIcon className="h-4 w-4 mr-1" />
                                        Commande active
                                    </div>
                                    <button 
                                        onClick={() => cancelOrder(activeOrderId)}
                                        className="bg-red-600 text-white px-3 py-1 rounded text-sm flex items-center hover:bg-red-700 shadow-md"
                                    >
                                        <XMarkIcon className="h-4 w-4 mr-1" />
                                        Annuler
                                    </button>
                                </div>
                            )}
                            
                            <div className="flex gap-2 mt-2 text-sm">
                                <div className="flex items-center gap-1">
                                    <span>Art.:</span>
                                    <span className="bg-white text-blue-900 px-2 py-1 rounded-full font-medium">
                                        {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>Total:</span>
                                    <span className="bg-white text-blue-900 px-2 py-1 rounded-full font-medium">
                                        {total.toFixed(2)} MAD
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Cart Items - Improved item display */}
                        <div className="flex-1 overflow-auto px-4 py-2">
                            {cart.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                                    <ShoppingCartIcon className="h-16 w-16 mb-4" />
                                    <p className="text-xl font-medium">Le panier est vide</p>
                                    <p className="text-sm">Ajoutez des produits depuis la grille</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {cart.map((item, index) => (
                                        <div 
                                            key={index} 
                                            onClick={() => {
                                                const product = staticProducts.find(p => p.id === item.product_id);
                                                if (product) {
                                                    setSelectedProduct(product);
                                                    setStartNewInput(true);
                                                }
                                            }}
                                            className={`bg-white rounded-lg shadow p-3 flex justify-between items-center cursor-pointer transition-colors ${
                                                selectedProduct?.id === item.product_id ? 'bg-blue-50 border-l-4 border-l-blue-500 pl-2' : ''
                                            }`}
                                        >
                                            <div className="flex-1">
                                                <div className="font-medium">{item.name}</div>
                                                <div className="text-gray-600">
                                                    {formatPrice(item.unit_price || item.price)} x {item.quantity}
                                                </div>
                                                {item.notes && (
                                                    <div className="text-xs text-gray-500 mt-1 italic">
                                                        Note: {item.notes}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <div className="font-bold text-gray-800">
                                                    {formatPrice((item.unit_price || item.price) * item.quantity)}
                                                </div>
                                                <div className="flex flex-col space-y-1">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            const product = staticProducts.find(p => p.id === item.product_id);
                                                            if (product) {
                                                                setSelectedProduct(product);
                                                                setStartNewInput(true);
                                                            }
                                                        }}
                                                        className="p-1 rounded hover:bg-gray-100"
                                                    >
                                                        <PencilIcon className="h-4 w-4 text-blue-500" />
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            removeFromCart(item.product_id);
                                                            if (selectedProduct?.id === item.product_id) {
                                                                setSelectedProduct(null);
                                                            }
                                                        }}
                                                        className="p-1 rounded hover:bg-gray-100"
                                                    >
                                                        <TrashIcon className="h-4 w-4 text-red-500" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Current Product Display - enhanced */}
                        {selectedProduct && (
                            <div className="border-t border-gray-200 p-3 bg-blue-50">
                                <div className="flex justify-between items-center">
                                    <div className="truncate flex-1">
                                        <h3 className="font-medium text-base truncate">{selectedProduct.name}</h3>
                                        <p className="text-sm text-gray-600">{formatPrice(selectedProduct.price)}</p>
                                    </div>
                                    <div className="text-xl font-bold ml-2 bg-white px-4 py-2 rounded-lg border border-blue-300 min-w-[50px] text-center">
                                        {(cart.find(item => item.product_id === selectedProduct.id)?.quantity || 0)}
                                    </div>
                                </div>
                                <div className="mt-2 text-xs text-gray-600 flex items-center">
                                    <div className="h-1 w-1 bg-blue-500 rounded-full mr-1"></div>
                                    Utilisez le clavier numérique pour modifier la quantité
                                </div>
                            </div>
                        )}

                        {/* Taxes and Total - more compact */}
                        <div className="border-t border-gray-200 p-2 bg-gray-50">
                            <div className="space-y-1">
                                <div className="flex justify-between text-xs text-gray-600">
                                    <span>Sous-total</span>
                                    <span>{subtotal.toFixed(2)} MAD</span>
                                </div>
                                <div className="flex justify-between text-xs text-gray-600">
                                    <span>TVA (20%)</span>
                                    <span>{tax.toFixed(2)} MAD</span>
                                </div>
                                {deliverySurcharge > 0 && (
                                    <div className="flex justify-between text-xs text-gray-600">
                                        <span>Frais livraison</span>
                                        <span>{deliverySurcharge.toFixed(2)} MAD</span>
                            </div>
                        )}
                                {activePromotion && (
                                    <div className="flex justify-between text-xs text-green-600">
                                        <span className="truncate">{activePromotion.name}</span>
                                        <span>-{activePromotion.discountAmount.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="h-px bg-gray-200 my-1"></div>
                                <div className="flex justify-between text-sm font-bold text-blue-900">
                                    <span>Total</span>
                                    <span>{total.toFixed(2)} MAD</span>
                                </div>
                            </div>
                        </div>

                        {/* Numeric Keypad - larger for touch */}
                        <div className="border-t border-gray-200">
                            <div className="grid grid-cols-4 gap-0">
                                <div className="col-span-3">
                                    <div className="grid grid-cols-3 gap-0">
                                        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, 'CE', '⌫'].map((num) => (
                                            <button 
                                                key={num}
                                                onClick={() => {
                                                    if (selectedProduct) {
                                                        const currentQty = cart.find(item => item.product_id === selectedProduct.id)?.quantity || 0;
                                                        if (num === '⌫') {
                                                            if (currentQty < 10) {
                                                                updateQuantity(selectedProduct.id, 0);
                                                            } else {
                                                                updateQuantity(selectedProduct.id, Math.floor(currentQty / 10));
                                                            }
                                                        } else if (num === 'CE') {
                                                            updateQuantity(selectedProduct.id, 0);
                                                            setStartNewInput(true);
                                                        } else {
                                                            if (startNewInput || currentQty === 0) {
                                                                updateQuantity(selectedProduct.id, parseInt(num));
                                                            } else {
                                                                const newQty = parseInt(currentQty.toString() + num);
                                                                updateQuantity(selectedProduct.id, newQty);
                                                            }
                                                            setStartNewInput(false);
                                                        }
                                                    }
                                                }}
                                                className={`p-4 text-xl font-medium hover:bg-gray-100 border-r border-b transition-colors h-16 ${
                                                    (num === 'CE') ? 'text-blue-600' : ''
                                                }`}
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
                                        className="p-4 text-xl font-medium hover:bg-gray-100 border-b transition-colors h-16"
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
                                        className="p-4 text-xl font-medium hover:bg-gray-100 border-b transition-colors h-16"
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
                                        className="p-4 text-xl font-medium hover:bg-gray-100 border-b transition-colors text-red-600 h-16"
                                    >
                                        C
                                    </button>
                                    <button 
                                        onClick={() => setShowPaymentModal(true)}
                                        className="p-4 text-xl font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors flex-1"
                                    >
                                        ↵
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Navigation - more compact */}
                        <div className="p-3 bg-white border-t">
                            <button
                                onClick={() => setShowPaymentModal(true)}
                                disabled={!activeOrderId || cart.length === 0}
                                className={`w-full p-3 rounded-md transition-colors text-base font-medium h-14 flex items-center justify-center ${
                                    !activeOrderId || cart.length === 0
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-green-600 text-white hover:bg-green-700 shadow-md'
                                }`}
                            >
                                <BanknotesIcon className="h-6 w-6 mr-2" />
                                Payer ({total.toFixed(2)} MAD)
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Products or Tables - Adjusted width proportion */}
                    <div className="w-3/5 flex flex-col bg-gray-100">
                        {/* Top Navigation Tabs */}
                        <div className="bg-white shadow-md mb-2">
                            <div className="max-w-7xl mx-auto p-2">
                                <div className="flex flex-wrap items-center">
                                    <button 
                                        onClick={() => setActiveTab('tables')} 
                                        className={`px-4 py-2 mr-2 rounded-md ${activeTab === 'tables' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    >
                                        Tables
                                    </button>
                                    <button 
                                        onClick={() => setActiveTab('caisse')} 
                                        className={`px-4 py-2 rounded-md ${activeTab === 'caisse' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                                    >
                                        Caisse
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Table Management View */}
                        {activeTab === 'tables' && (
                            <div className="flex-1 flex flex-col bg-gray-100 overflow-auto">
                                <div className="p-4">
                                    <div className="max-w-7xl mx-auto">
                                        {/* Floor Selection */}
                                        <div className="flex justify-end mb-4">
                                            <div className="flex gap-2">
                                                <button 
                                                    onClick={() => setActiveFloor('Main Floor')}
                                                    className={`px-4 py-2 rounded-md border ${activeFloor === 'Main Floor' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                                                >
                                                    Main Floor
                                                </button>
                                                <button 
                                                    onClick={() => setActiveFloor('Patio')}
                                                    className={`px-4 py-2 rounded-md border ${activeFloor === 'Patio' ? 'bg-blue-600 text-white' : 'bg-white'}`}
                                                >
                                                    Patio
                                                </button>
                                            </div>
                                        </div>
                                        
                                        {/* Floor Plan */}
                                        <div className="bg-gray-700 p-4 rounded-lg shadow-xl">
                                            {/* Restaurant Layout - Main Floor */}
                                            {activeFloor === 'Main Floor' && (
                                                <div className="bg-amber-100 p-6 rounded-md min-h-[600px] relative">
                                                    {/* Kitchen Area */}
                                                    <div className="absolute top-6 left-6 w-80 h-64 bg-gray-300 rounded-md border-2 border-gray-400 flex items-center justify-center">
                                                        <div className="absolute top-2 left-2 text-sm font-bold bg-gray-200 px-2 py-1 rounded">
                                                            Kitchen
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-4 p-4">
                                                            {/* Kitchen equipment */}
                                                            <div className="bg-gray-500 h-16 w-16 rounded-full"></div>
                                                            <div className="bg-gray-500 h-16 w-16 rounded-full"></div>
                                                            <div className="bg-gray-500 h-16 w-16 rounded-full"></div>
                                                            <div className="bg-gray-500 h-16 w-16 rounded-full"></div>
                                                            
                                                            {/* Sinks */}
                                                            <div className="bg-white h-16 w-16 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                                                <div className="bg-gray-400 h-1 w-8 rounded"></div>
                                                            </div>
                                                            <div className="bg-white h-16 w-16 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                                                <div className="bg-gray-400 h-1 w-8 rounded"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Tables Area */}
                                                    <div className="ml-96 grid grid-cols-3 gap-8 p-6">
                                                        {tables.filter(table => parseInt(table.id) < 20).map(table => (
                                                            <div 
                                                                key={table.id}
                                                                onClick={() => table.status !== 'occupied' && handleTableSelect(table.id)}
                                                                className={`relative ${
                                                                    table.status === 'occupied' 
                                                                        ? 'bg-red-400 border-red-600' 
                                                                        : 'bg-green-400 border-green-600'
                                                                } ${
                                                                    parseInt(table.id) > 8 ? 'w-48 h-32' : 'w-32 h-32'
                                                                } rounded-md flex items-center justify-center cursor-pointer shadow-md border-2 transition-transform transform hover:scale-105`}
                                                            >
                                                                <span className="text-2xl font-bold">{table.id}</span>
                                                                
                                                                {/* Table Chairs */}
                                                                <div className="absolute -top-6 left-10 w-12 h-6 bg-blue-300 rounded-t-full"></div>
                                                                <div className="absolute -right-6 top-10 w-6 h-12 bg-blue-300 rounded-r-full"></div>
                                                                <div className="absolute -bottom-6 left-10 w-12 h-6 bg-blue-300 rounded-b-full"></div>
                                                                <div className="absolute -left-6 top-10 w-6 h-12 bg-blue-300 rounded-l-full"></div>
                                                                
                                                                {parseInt(table.id) > 8 && (
                                                                    <>
                                                                        <div className="absolute -top-6 right-10 w-12 h-6 bg-blue-300 rounded-t-full"></div>
                                                                        <div className="absolute -bottom-6 right-10 w-12 h-6 bg-blue-300 rounded-b-full"></div>
                                                                    </>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {/* Patio Area */}
                                            {activeFloor === 'Patio' && (
                                                <div className="bg-emerald-100 p-6 rounded-md min-h-[600px] relative">
                                                    <div className="grid grid-cols-3 gap-8 p-6">
                                                        {tables.filter(table => parseInt(table.id) >= 20).map(table => (
                                                            <div 
                                                                key={table.id}
                                                                onClick={() => table.status !== 'occupied' && handleTableSelect(table.id)}
                                                                className={`relative ${
                                                                    table.status === 'occupied' 
                                                                        ? 'bg-red-400 border-red-600' 
                                                                        : 'bg-green-400 border-green-600'
                                                                } w-32 h-32 rounded-full flex items-center justify-center cursor-pointer shadow-md border-2 transition-transform transform hover:scale-105`}
                                                            >
                                                                <span className="text-2xl font-bold">{table.id}</span>
                                                                {/* Round Table Chairs */}
                                                                <div className="absolute -top-6 left-12 w-8 h-8 bg-blue-300 rounded-full"></div>
                                                                <div className="absolute top-12 -right-6 w-8 h-8 bg-blue-300 rounded-full"></div>
                                                                <div className="absolute -bottom-6 left-12 w-8 h-8 bg-blue-300 rounded-full"></div>
                                                                <div className="absolute top-12 -left-6 w-8 h-8 bg-blue-300 rounded-full"></div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        
                                        {/* Legend */}
                                        <div className="mt-4 flex gap-6 text-sm">
                                            <div className="flex items-center">
                                                <div className="w-4 h-4 bg-green-400 mr-2 rounded-sm"></div>
                                                <span>Disponible</span>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="w-4 h-4 bg-red-400 mr-2 rounded-sm"></div>
                                                <span>Occupée</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Cash Register (Caisse) View */}
                        {activeTab === 'caisse' && (
                            <>
                                {/* Service Type Pills */}
                                <div className="bg-white p-3 mb-2 border-b">
                                    <div className="flex items-center justify-center space-x-4">
                                        <button
                                            onClick={() => setOrderType('eat_in')}
                                            className={`px-4 py-2 rounded-full flex items-center ${
                                                orderType === 'eat_in' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                                            }`}
                                        >
                                            <HomeIcon className="w-5 h-5 mr-2" />
                                            Sur Place {tableNumber && `- Table ${tableNumber}`}
                                        </button>
                                        <button
                                            onClick={() => {
                                                setOrderType('takeout');
                                                setTableNumber('');
                                            }}
                                            className={`px-4 py-2 rounded-full flex items-center ${
                                                orderType === 'takeout' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                                            }`}
                                        >
                                            <ShoppingBagIcon className="w-5 h-5 mr-2" />
                                            À Emporter
                                        </button>
                                        <button
                                            onClick={() => {
                                                setOrderType('delivery');
                                                setTableNumber('');
                                            }}
                                            className={`px-4 py-2 rounded-full flex items-center ${
                                                orderType === 'delivery' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                                            }`}
                                        >
                                            <MapPinIcon className="w-5 h-5 mr-2" />
                                            Livraison
                                        </button>
                                    </div>
                                </div>
                                
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
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
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

                                {/* Products Grid - Improved spacing and sizing */}
                                <div className="flex-1 overflow-auto p-4">
                                    <div className="flex flex-col space-y-4">
                                        {categories.map((category) => (
                                            <div key={category.id}>
                                                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                                                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                                                    {staticProducts
                                                        .filter((product) => product.category_id === category.id)
                                                        .map((product) => (
                                                            <div
                                                                key={product.id}
                                                                className={`bg-white rounded-lg shadow p-3 cursor-pointer hover:bg-blue-50 transition-colors 
                                                                          flex flex-col items-center justify-between h-36`}
                                                                onClick={() => {
                                                                    setSelectedProduct(product);
                                                                    setShowCustomizeModal(true);
                                                                }}
                                                            >
                                                                <div className="h-16 w-16 flex items-center justify-center">
                                                                    {product.image ? (
                                                                        <img
                                                                            src={product.image}
                                                                            alt={product.name}
                                                                            className="h-full object-contain"
                                                                        />
                                                                    ) : (
                                                                        <DocumentTextIcon className="h-12 w-12 text-gray-400" />
                                                                    )}
                                                                </div>
                                                                <div className="text-center mt-2">
                                                                    <div className="font-medium text-sm">{product.name}</div>
                                                                    <div className="text-gray-600 font-bold">{product.price.toFixed(2)} MAD</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
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

            {/* Order History Log overlay */}
            {showOrderHistory && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl w-3/4 max-w-4xl max-h-[80vh] flex flex-col">
                        <div className="p-4 border-b flex justify-between items-center bg-blue-900 text-white rounded-t-lg">
                            <h2 className="text-xl font-bold">Historique des commandes</h2>
                            <button 
                                onClick={() => setShowOrderHistory(false)}
                                className="text-white hover:text-gray-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-auto flex-grow">
                            {/* Tab Navigation */}
                            <div className="flex gap-2 mb-4">
                                <button 
                                    onClick={() => setActiveHistoryTab('all')}
                                    className={`px-4 py-3 rounded-md text-sm font-medium flex items-center ${
                                        activeHistoryTab === 'all' 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                    Toutes
                                </button>
                                <button 
                                    onClick={() => setActiveHistoryTab('pending')}
                                    className={`px-4 py-3 rounded-md text-sm font-medium flex items-center ${
                                        activeHistoryTab === 'pending' 
                                            ? 'bg-yellow-500 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    En cours
                                    <span className="ml-2 bg-white text-yellow-600 rounded-full h-6 w-6 flex items-center justify-center text-xs">
                                        {[...activeOrders, ...orders].filter(order => order.status === 'pending').length}
                                    </span>
                                </button>
                                <button 
                                    onClick={() => setActiveHistoryTab('paid')}
                                    className={`px-4 py-3 rounded-md text-sm font-medium flex items-center ${
                                        activeHistoryTab === 'paid' 
                                            ? 'bg-green-600 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Payées
                                    <span className="ml-2 bg-white text-green-600 rounded-full h-6 w-6 flex items-center justify-center text-xs">
                                        {[...activeOrders, ...orders].filter(order => order.status === 'paid').length}
                                    </span>
                                </button>
                                <button 
                                    onClick={() => setActiveHistoryTab('cancelled')}
                                    className={`px-4 py-3 rounded-md text-sm font-medium flex items-center ${
                                        activeHistoryTab === 'cancelled' 
                                            ? 'bg-red-600 text-white' 
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Annulées
                                    <span className="ml-2 bg-white text-red-600 rounded-full h-6 w-6 flex items-center justify-center text-xs">
                                        {[...activeOrders, ...orders].filter(order => order.status === 'cancelled').length}
                                    </span>
                                </button>
                            </div>
                            
                            {/* All Orders */}
                            {activeHistoryTab === 'all' && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2 bg-blue-100 p-2 rounded-md text-blue-800">Toutes les commandes</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {[...activeOrders, ...orders].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).map(order => (
                                                    <tr key={order.id} className="hover:bg-gray-50">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.timestamp}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.id}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                            {order.type === 'eat_in' ? 'Sur Place' : order.type === 'takeout' ? 'À Emporter' : 'Livraison'}
                                                            {order.table_number && ` - Table ${order.table_number}`}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.total.toFixed(2)} MAD</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(order.status)}`}>
                                                                {getStatusText(order.status)}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                            <div className="flex gap-2">
                                                                {order.status === 'pending' && (
                                                                    <>
                                                                        <button 
                                                                            onClick={() => {
                                                                                switchToOrder(order.id);
                                                                                setShowOrderHistory(false);
                                                                            }}
                                                                            className="px-2 py-1 bg-blue-600 text-white rounded"
                                                                        >
                                                                            Modifier
                                                                        </button>
                                                                        <button 
                                                                            onClick={() => cancelOrder(order.id)}
                                                                            className="px-2 py-1 bg-red-600 text-white rounded"
                                                                        >
                                                                            Annuler
                                                                        </button>
                                                                    </>
                                                                )}
                                                                {order.status === 'paid' && (
                                                                    <button 
                                                                        onClick={() => {
                                                                            const receiptGenerator = Receipt();
                                                                            receiptGenerator.generateReceipt(order);
                                                                        }}
                                                                        className="px-2 py-1 bg-green-600 text-white rounded"
                                                                    >
                                                                        Imprimer
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {[...activeOrders, ...orders].length === 0 && (
                                                    <tr>
                                                        <td colSpan="6" className="px-6 py-4 text-center text-sm text-gray-500">Aucune commande trouvée</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                            
                            {/* Pending Orders */}
                            {activeHistoryTab === 'pending' && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2 bg-yellow-100 p-2 rounded-md text-yellow-800">Commandes en cours</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {[...activeOrders, ...orders]
                                                    .filter(order => order.status === 'pending')
                                                    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                                                    .map(order => (
                                                        <tr key={order.id} className="hover:bg-gray-50">
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.timestamp}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.id}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                                {order.type === 'eat_in' ? 'Sur Place' : order.type === 'takeout' ? 'À Emporter' : 'Livraison'}
                                                                {order.table_number && ` - Table ${order.table_number}`}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.total.toFixed(2)} MAD</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                <div className="flex gap-2">
                                                                    <button 
                                                                        onClick={() => {
                                                                            switchToOrder(order.id);
                                                                            setShowOrderHistory(false);
                                                                        }}
                                                                        className="px-2 py-1 bg-blue-600 text-white rounded"
                                                                    >
                                                                        Modifier
                                                                    </button>
                                                                    <button 
                                                                        onClick={() => cancelOrder(order.id)}
                                                                        className="px-2 py-1 bg-red-600 text-white rounded"
                                                                    >
                                                                        Annuler
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                                {[...activeOrders, ...orders].filter(order => order.status === 'pending').length === 0 && (
                                                    <tr>
                                                        <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">Aucune commande en cours</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                            
                            {/* Paid Orders */}
                            {activeHistoryTab === 'paid' && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2 bg-green-100 p-2 rounded-md text-green-800">Commandes payées</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {[...activeOrders, ...orders]
                                                    .filter(order => order.status === 'paid')
                                                    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                                                    .map(order => (
                                                        <tr key={order.id} className="hover:bg-gray-50">
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.timestamp}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.id}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                                {order.type === 'eat_in' ? 'Sur Place' : order.type === 'takeout' ? 'À Emporter' : 'Livraison'}
                                                                {order.table_number && ` - Table ${order.table_number}`}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.total.toFixed(2)} MAD</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                <button 
                                                                    onClick={() => {
                                                                        const receiptGenerator = Receipt();
                                                                        receiptGenerator.generateReceipt(order);
                                                                    }}
                                                                    className="px-2 py-1 bg-green-600 text-white rounded"
                                                                >
                                                                    Imprimer
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                                {[...activeOrders, ...orders].filter(order => order.status === 'paid').length === 0 && (
                                                    <tr>
                                                        <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">Aucune commande payée</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                            
                            {/* Cancelled Orders */}
                            {activeHistoryTab === 'cancelled' && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2 bg-red-100 p-2 rounded-md text-red-800">Commandes annulées</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {[...activeOrders, ...orders]
                                                    .filter(order => order.status === 'cancelled')
                                                    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                                                    .map(order => (
                                                        <tr key={order.id} className="hover:bg-gray-50">
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.timestamp}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.id}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                                {order.type === 'eat_in' ? 'Sur Place' : order.type === 'takeout' ? 'À Emporter' : 'Livraison'}
                                                                {order.table_number && ` - Table ${order.table_number}`}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{order.total.toFixed(2)} MAD</td>
                                                        </tr>
                                                    ))
                                                }
                                                {[...activeOrders, ...orders].filter(order => order.status === 'cancelled').length === 0 && (
                                                    <tr>
                                                        <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">Aucune commande annulée</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-4 border-t bg-gray-50 rounded-b-lg flex justify-end">
                            <button 
                                onClick={() => setShowOrderHistory(false)}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-base shadow-md min-w-[120px]"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* AlertModal */}
            {showAlertModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">{alertTitle}</h3>
                            <div className="mt-3">
                                {typeof alertMessage === 'string' 
                                    ? <p className="text-gray-600">{alertMessage}</p>
                                    : alertMessage
                                }
                            </div>
                        </div>
                        <div className="flex justify-end gap-3">
                            {isConfirm && (
                                <button
                                    onClick={() => {
                                        setShowAlertModal(false);
                                        if (alertCallback) alertCallback(false);
                                    }}
                                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                                >
                                    Annuler
                                </button>
                            )}
                            <button
                                onClick={() => {
                                    setShowAlertModal(false);
                                    if (alertCallback) alertCallback(true);
                                }}
                                className={`px-4 py-2 rounded text-white ${isConfirm ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}
                            >
                                {isConfirm ? 'Confirmer' : 'OK'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
};

export default PosIndex;