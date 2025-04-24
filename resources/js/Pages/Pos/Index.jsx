import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ServiceTypeModal from "./ServiceTypeModal";
import NoteModal from "./NoteModal";
import Receipt from "./Receipt";
import PromotionModal from "./PromotionModal";
import CustomizeModal from "./CustomizeModal";
import PaymentModal from "./PaymentModal";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PosIndex = ({ auth }) => {
    // Static Categories Data
    const [categories] = useState([
        { id: 1, name: "Plats", color: "#4F46E5" }, // Indigo for main dishes
        { id: 2, name: "Boissons", color: "#10B981" }, // Emerald for drinks
        { id: 3, name: "Pizzas", color: "#F59E0B" }, // Amber for pizzas
        { id: 4, name: "Desserts", color: "#EC4899" }, // Pink for desserts
        { id: 5, name: "Salades", color: "#34D399" }, // Emerald for salads
        { id: 6, name: "Pâtes", color: "#F97316" }, // Orange for pasta
        { id: 7, name: "Fruits de Mer", color: "#87CEEB" }, // Sky blue for seafood
        { id: 8, name: "Sandwich", color: "#8B4513" }, // Brown for sandwiches
    ]);

    // Static Products Data with Images
    const staticProducts = [
        // Burgers Category
        {
            id: 1,
            name: "Bacon Burger",
            description: "Smashed sweet potatoes",
            price: 49.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=599",
        },
        {
            id: 2,
            name: "Qiwi juice",
            description: "Burger with fries and drink",
            price: 29.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=500",
        },
        {
            id: 3,
            name: "Cheese Burger",
            description: "Classic cheeseburger with our special sauce",
            price: 36.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=599",
        },
        {
            id: 4,
            name: "Chicken Curry Sandwich",
            description: "Spicy chicken curry sandwich",
            price: 47.0,
            category_id: 1,
            image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=599",
        },
        {
            id: 5,
            name: "Club Sandwich",
            description: "Triple-decker sandwich with bacon",
            price: 45.0,
            category_id: 1,
            image: "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?q=80&w=599",
        },
        {
            id: 6,
            name: "Double Cheeseburger",
            description: "Double beef patty with cheese",
            price: 32.0,
            category_id: 1,
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=599",
        },
        {
            id: 7,
            name: "Big Tasty",
            description: "Our signature tasty burger",
            price: 49.0,
            category_id: 1,
            image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=599",
        },
        {
            id: 8,
            name: "Big Chili",
            description: "Spicy burger with chili sauce",
            price: 49.0,
            category_id: 1,
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=599",
        },
        {
            id: 9,
            name: "McChicken",
            description: "Classic chicken burger",
            price: 36.0,
            category_id: 1,
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=599",
        },
        {
            id: 10,
            name: "Filet-O-Fish",
            description: "Fish fillet with tartar sauce",
            price: 33.0,
            category_id: 1,
            image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=599",
        },
        {
            id: 11,
            name: "Big Mac",
            description: "The legendary double-decker",
            price: 36.0,
            category_id: 1,
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=599",
        },
        {
            id: 12,
            name: "Triple Cheese",
            description: "Triple the cheese, triple the taste",
            price: 38.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1485451456034-3f9391c6f769?q=80&w=599",
        },
        {
            id: 13,
            name: "Veggie Burger",
            description: "Plant-based patty with fresh vegetables",
            price: 42.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=599",
        },
        {
            id: 14,
            name: "Mushroom Swiss Burger",
            description: "Beef patty with sautéed mushrooms and Swiss cheese",
            price: 45.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=599",
        },
        {
            id: 15,
            name: "BBQ Bacon Burger",
            description: "Beef patty with BBQ sauce and crispy bacon",
            price: 47.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=599",
        },

        // Drinks Category
        {
            id: 16,
            name: "Coca-Cola",
            description: "Classic cola drink",
            price: 15.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=599",
        },
        {
            id: 17,
            name: "Espresso",
            description: "Strong Italian coffee",
            price: 18.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=599",
        },
        {
            id: 18,
            name: "Water",
            description: "Mineral water",
            price: 8.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=599",
        },
        {
            id: 19,
            name: "Ice Tea",
            description: "Refreshing iced tea",
            price: 14.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=599",
        },
        {
            id: 20,
            name: "Fanta",
            description: "Orange flavored soda",
            price: 15.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=599",
        },
        {
            id: 21,
            name: "Green Tea",
            description: "Traditional Japanese green tea",
            price: 12.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=599",
        },
        {
            id: 22,
            name: "Milkshake Banana",
            description: "Creamy banana milkshake topped with whipped cream",
            price: 25.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=599&auto=format&fit=crop",
        },
        {
            id: 23,
            name: "Chocolate Milkshake",
            description: "Rich chocolate milkshake with chocolate syrup",
            price: 25.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=599&auto=format&fit=crop",
        },
        {
            id: 24,
            name: "Strawberry Milkshake",
            description: "Fresh strawberry milkshake with whipped cream",
            price: 25.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=599&auto=format&fit=crop",
        },
        {
            id: 25,
            name: "Oreo Milkshake",
            description: "Creamy vanilla milkshake with crushed Oreos",
            price: 28.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=599&auto=format&fit=crop",
        },
        {
            id: 26,
            name: "Cappuccino",
            description: "Italian coffee with steamed milk foam",
            price: 22.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=599",
        },
        {
            id: 27,
            name: "Latte",
            description: "Espresso with steamed milk",
            price: 20.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=599",
        },
        {
            id: 28,
            name: "Orange Juice",
            description: "Freshly squeezed orange juice",
            price: 18.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=599",
        },
        {
            id: 29,
            name: "Sprite",
            description: "Lemon-lime flavored soda",
            price: 15.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?q=80&w=599",
        },
        {
            id: 30,
            name: "Smoothie",
            description: "Mixed fruit smoothie",
            price: 24.0,
            category_id: 2,
            image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=599",
        },

        // Pizzas Category (new category)
        {
            id: 31,
            name: "Margherita Pizza",
            description:
                "Classic pizza with tomato sauce, mozzarella, and basil",
            price: 55.0,
            category_id: 3,
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=599",
        },
        {
            id: 32,
            name: "Pepperoni Pizza",
            description: "Pizza topped with pepperoni slices",
            price: 65.0,
            category_id: 3,
            image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=599",
        },
        {
            id: 33,
            name: "Vegetarian Pizza",
            description: "Pizza with assorted vegetables",
            price: 60.0,
            category_id: 3,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=599",
        },
        {
            id: 34,
            name: "Hawaiian Pizza",
            description: "Pizza with ham and pineapple",
            price: 62.0,
            category_id: 3,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=599",
        },
        {
            id: 35,
            name: "BBQ Chicken Pizza",
            description: "Pizza with BBQ sauce and chicken",
            price: 68.0,
            category_id: 3,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=599",
        },
        {
            id: 36,
            name: "Meat Lovers Pizza",
            description: "Pizza loaded with various meats",
            price: 70.0,
            category_id: 3,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=599",
        },
        {
            id: 37,
            name: "Four Cheese Pizza",
            description: "Pizza with four different types of cheese",
            price: 65.0,
            category_id: 3,
            image: "https://images.unsplash.com/photo-1548369937-47519962c11a?q=80&w=599",
        },
        {
            id: 38,
            name: "Mushroom Pizza",
            description: "Pizza with various mushrooms",
            price: 63.0,
            category_id: 3,
            image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?q=80&w=599",
        },
        {
            id: 39,
            name: "Seafood Pizza",
            description: "Pizza with assorted seafood toppings",
            price: 75.0,
            category_id: 3,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=599",
        },
        {
            id: 40,
            name: "Spicy Pizza",
            description: "Pizza with spicy peppers and jalapeños",
            price: 64.0,
            category_id: 3,
            image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=599",
        },

        // Desserts Category (new category)
        {
            id: 41,
            name: "Chocolate Cake",
            description: "Rich chocolate cake with ganache",
            price: 35.0,
            category_id: 4,
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=599",
        },
        {
            id: 42,
            name: "Cheesecake",
            description: "Creamy New York style cheesecake",
            price: 38.0,
            category_id: 4,
            image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=599",
        },
        {
            id: 43,
            name: "Ice Cream",
            description: "Assorted flavors of ice cream",
            price: 25.0,
            category_id: 4,
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=599",
        },
        {
            id: 44,
            name: "Apple Pie",
            description: "Traditional apple pie with cinnamon",
            price: 32.0,
            category_id: 4,
            image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=599",
        },
        {
            id: 45,
            name: "Tiramisu",
            description: "Italian coffee-flavored dessert",
            price: 40.0,
            category_id: 4,
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=599",
        },
        {
            id: 46,
            name: "Brownie",
            description: "Chocolate brownie with walnuts",
            price: 28.0,
            category_id: 4,
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=599",
        },
        {
            id: 47,
            name: "Crème Brûlée",
            description: "French custard with caramelized sugar top",
            price: 42.0,
            category_id: 4,
            image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=599",
        },
        {
            id: 48,
            name: "Fruit Salad",
            description: "Fresh seasonal fruits",
            price: 30.0,
            category_id: 4,
            image: "https://images.unsplash.com/photo-1564093497595-593b96d80180?q=80&w=599",
        },
        {
            id: 49,
            name: "Panna Cotta",
            description: "Italian cream dessert with berry sauce",
            price: 36.0,
            category_id: 4,
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=599",
        },
        {
            id: 50,
            name: "Chocolate Mousse",
            description: "Light and airy chocolate dessert",
            price: 34.0,
            category_id: 4,
            image: "https://images.unsplash.com/photo-1511715282680-fbf93a50e721?q=80&w=599",
        },

        // Salads Category (new category)
        {
            id: 51,
            name: "Caesar Salad",
            description: "Romaine lettuce with Caesar dressing and croutons",
            price: 45.0,
            category_id: 5,
            image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=599",
        },
        {
            id: 52,
            name: "Greek Salad",
            description: "Tomatoes, cucumbers, olives, and feta cheese",
            price: 48.0,
            category_id: 5,
            image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=599",
        },
        {
            id: 53,
            name: "Caprese Salad",
            description: "Tomatoes, mozzarella, and basil with balsamic glaze",
            price: 50.0,
            category_id: 5,
            image: "https://images.unsplash.com/photo-1595587870672-c79b47875c6a?q=80&w=599",
        },
        {
            id: 54,
            name: "Chicken Salad",
            description: "Mixed greens with grilled chicken",
            price: 55.0,
            category_id: 5,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=599",
        },
        {
            id: 55,
            name: "Tuna Salad",
            description: "Mixed greens with tuna and boiled eggs",
            price: 52.0,
            category_id: 5,
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=599",
        },
        {
            id: 56,
            name: "Waldorf Salad",
            description: "Apples, celery, walnuts with mayonnaise",
            price: 47.0,
            category_id: 5,
            image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=599",
        },
        {
            id: 57,
            name: "Cobb Salad",
            description:
                "Lettuce, chicken, bacon, eggs, avocado, and blue cheese",
            price: 58.0,
            category_id: 5,
            image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=599",
        },
        {
            id: 58,
            name: "Quinoa Salad",
            description: "Quinoa with vegetables and herbs",
            price: 49.0,
            category_id: 5,
            image: "https://images.unsplash.com/photo-1556386470-bcdc6a5e9b9e?q=80&w=599",
        },
        {
            id: 59,
            name: "Pasta Salad",
            description: "Pasta with vegetables and Italian dressing",
            price: 46.0,
            category_id: 5,
            image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=599",
        },
        {
            id: 60,
            name: "Seafood Salad",
            description: "Mixed seafood with greens and lemon dressing",
            price: 60.0,
            category_id: 5,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=599",
        },

        // Pasta Category (new category)
        {
            id: 61,
            name: "Spaghetti Bolognese",
            description: "Spaghetti with meat sauce",
            price: 58.0,
            category_id: 6,
            image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=599",
        },
        {
            id: 62,
            name: "Fettuccine Alfredo",
            description: "Fettuccine with creamy Alfredo sauce",
            price: 56.0,
            category_id: 6,
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=599",
        },
        {
            id: 63,
            name: "Lasagna",
            description: "Layered pasta with meat and cheese",
            price: 62.0,
            category_id: 6,
            image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=599",
        },
        {
            id: 64,
            name: "Penne Arrabbiata",
            description: "Penne with spicy tomato sauce",
            price: 54.0,
            category_id: 6,
            image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=599",
        },
        {
            id: 65,
            name: "Carbonara",
            description: "Spaghetti with eggs, cheese, and pancetta",
            price: 59.0,
            category_id: 6,
            image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=599",
        },
        {
            id: 66,
            name: "Ravioli",
            description: "Stuffed pasta with ricotta and spinach",
            price: 60.0,
            category_id: 6,
            image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=599",
        },
        {
            id: 67,
            name: "Gnocchi",
            description: "Potato dumplings with tomato sauce",
            price: 57.0,
            category_id: 6,
            image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=599",
        },
        {
            id: 68,
            name: "Linguine with Clams",
            description: "Linguine with clams in white wine sauce",
            price: 65.0,
            category_id: 6,
            image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=599",
        },
        {
            id: 69,
            name: "Pesto Pasta",
            description: "Pasta with basil pesto sauce",
            price: 55.0,
            category_id: 6,
            image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=599",
        },
        {
            id: 70,
            name: "Macaroni and Cheese",
            description: "Macaroni with creamy cheese sauce",
            price: 52.0,
            category_id: 6,
            image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?q=80&w=599",
        },

        // Seafood Category (new category)
        {
            id: 71,
            name: "Grilled Salmon",
            description: "Salmon fillet with lemon butter sauce",
            price: 75.0,
            category_id: 7,
            image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=599",
        },
        {
            id: 72,
            name: "Shrimp Scampi",
            description: "Shrimp in garlic butter sauce",
            price: 70.0,
            category_id: 7,
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=599",
        },
        {
            id: 73,
            name: "Fish and Chips",
            description: "Battered fish with french fries",
            price: 65.0,
            category_id: 7,
            image: "https://images.unsplash.com/photo-1579208030886-b937da0925dc?q=80&w=599",
        },
        {
            id: 74,
            name: "Lobster Tail",
            description: "Grilled lobster tail with butter",
            price: 95.0,
            category_id: 7,
            image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=599",
        },
        {
            id: 75,
            name: "Calamari",
            description: "Fried squid rings with marinara sauce",
            price: 60.0,
            category_id: 7,
            image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=599",
        },
        {
            id: 76,
            name: "Crab Cakes",
            description: "Pan-fried crab cakes with remoulade",
            price: 68.0,
            category_id: 7,
            image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?q=80&w=599",
        },
        {
            id: 77,
            name: "Seafood Paella",
            description: "Spanish rice dish with assorted seafood",
            price: 80.0,
            category_id: 7,
            image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=599",
        },
        {
            id: 78,
            name: "Tuna Steak",
            description: "Seared tuna steak with sesame crust",
            price: 72.0,
            category_id: 7,
            image: "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?q=80&w=599",
        },
        {
            id: 79,
            name: "Mussels Mariniere",
            description: "Mussels in white wine sauce",
            price: 65.0,
            category_id: 7,
            image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=599",
        },
        {
            id: 80,
            name: "Seafood Soup",
            description: "Rich soup with various seafood",
            price: 62.0,
            category_id: 7,
            image: "https://images.unsplash.com/photo-1614777986387-015c2a89b696?q=80&w=599",
        },
        {
            id: 81,
            name: "Club Sandwich",
            description:
                "Triple-decker sandwich with chicken, bacon, lettuce, and tomato",
            price: 45.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?q=80&w=1000",
        },
        {
            id: 82,
            name: "Grilled Cheese",
            description: "Classic grilled cheese with multiple cheese blend",
            price: 35.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
        },
        {
            id: 83,
            name: "Chicken Sandwich",
            description:
                "Grilled chicken breast with lettuce and special sauce",
            price: 42.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1000",
        },
        {
            id: 84,
            name: "Veggie Delight",
            description: "Fresh vegetables with hummus and avocado",
            price: 38.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=1000",
        },
        {
            id: 85,
            name: "BLT Supreme",
            description:
                "Bacon, lettuce, and tomato with mayo on toasted bread",
            price: 40.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?q=80&w=1000",
        },
        {
            id: 86,
            name: "Tuna Melt",
            description: "Tuna salad with melted cheese on grilled bread",
            price: 43.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1000",
        },
        {
            id: 87,
            name: "Mediterranean Sandwich",
            description: "Grilled vegetables, feta, and olive tapenade",
            price: 41.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=1000",
        },
        {
            id: 88,
            name: "Steak Sandwich",
            description: "Grilled steak with caramelized onions and cheese",
            price: 52.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1511344407683-b1172dce025f?q=80&w=1000",
        },
        {
            id: 89,
            name: "Egg & Avocado",
            description: "Fried egg with mashed avocado and microgreens",
            price: 39.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000",
        },
        {
            id: 90,
            name: "Pulled Pork Sandwich",
            description: "BBQ pulled pork with coleslaw",
            price: 46.0,
            category_id: 8,
            image: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?q=80&w=1000",
        },
    ];

    const [activeCategory, setActiveCategory] = useState(null);
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [cart, setCart] = useState([]);
    const [orderType, setOrderType] = useState("eat_in");
    const [tableNumber, setTableNumber] = useState("");
    const [notes, setNotes] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [total, setTotal] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [activeTab, setActiveTab] = useState("caisse");
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
    const [activeHistoryTab, setActiveHistoryTab] = useState("all"); // 'all', 'pending', 'paid', 'cancelled'
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertTitle, setAlertTitle] = useState("");
    const [alertCallback, setAlertCallback] = useState(null);
    const [isConfirm, setIsConfirm] = useState(false);
    const [tables, setTables] = useState([
        { id: "1", status: "available" },
        { id: "2", status: "available" },
        { id: "3", status: "available" },
        { id: "4", status: "available" },
        { id: "5", status: "available" },
        { id: "6", status: "available" },
        { id: "7", status: "available" },
        { id: "8", status: "available" },
        { id: "9", status: "available" },
        { id: "10", status: "available" },
        { id: "11", status: "available" },
        { id: "12", status: "available" },
        // Patio tables
        { id: "20", status: "available" },
        { id: "21", status: "available" },
        { id: "22", status: "available" },
        { id: "23", status: "available" },
        { id: "24", status: "available" },
        { id: "25", status: "available" },
    ]);
    const [activeFloor, setActiveFloor] = useState("Main Floor");

    useEffect(() => {
        calculateTotals();
        updateCounts();
    }, [cart, orderType]);

    const updateCounts = () => {
        const foodItems = cart
            .filter(
                (item) =>
                    staticProducts.find((p) => p.id === item.product_id)
                        ?.category_id === 1
            )
            .reduce((sum, item) => sum + item.quantity, 0);

        const drinkItems = cart
            .filter(
                (item) =>
                    staticProducts.find((p) => p.id === item.product_id)
                        ?.category_id === 2
            )
            .reduce((sum, item) => sum + item.quantity, 0);

        setFoodCount(foodItems);
        setDrinksCount(drinkItems);
    };

    const filteredProducts = staticProducts
        .filter((product) =>
            activeCategory ? product.category_id === activeCategory : true
        )
        .filter((product) =>
            searchQuery
                ? product.name.toLowerCase().includes(searchQuery.toLowerCase())
                : true
        );

    const calculateTotals = () => {
        const newSubtotal = cart.reduce((sum, item) => {
            let itemTotal = item.quantity * item.unit_price;

            // Add customization charges
            if (customizations[item.product_id]) {
                itemTotal +=
                    customizations[item.product_id].extraCharge * item.quantity;
            }

            return sum + itemTotal;
        }, 0);

        const newTax = newSubtotal * 0.2; // 20% tax
        let newTotal = newSubtotal + newTax;

        // Add delivery surcharge if delivery is selected
        if (orderType === "delivery") {
            const surcharge = newSubtotal * 0.1;
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
            showAlert(
                "Veuillez créer une nouvelle commande d'abord.",
                "Attention"
            );
            return;
        }

        const existingItem = cart.find(
            (item) =>
                item.product_id === product.id &&
                JSON.stringify(item.customizations) ===
                    JSON.stringify(customizations)
        );

        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.product_id === product.id &&
                    JSON.stringify(item.customizations) ===
                        JSON.stringify(customizations)
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                              subtotal: (item.quantity + 1) * item.unit_price,
                          }
                        : item
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    product_id: product.id,
                    name: product.name,
                    description: product.description,
                    image: product.image,
                    quantity: 1,
                    unit_price: product.price,
                    subtotal: product.price,
                    customizations: customizations,
                },
            ]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.product_id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCart(
            cart.map((item) =>
                item.product_id === productId
                    ? {
                          ...item,
                          quantity: newQuantity,
                          subtotal: newQuantity * item.unit_price,
                      }
                    : item
            )
        );
    };

    const handleNewOrder = () => {
        // Generate unique ID for the new order
        const newOrderId = `TEMP-${Date.now()}`;

        // Create a new order with initial state
        const newOrder = {
            id: newOrderId,
            items: [],
            type: "takeout", // Default type
            table_number: "",
            notes: "",
            status: "pending", // En cours
            timestamp: new Date().toLocaleString("fr-FR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
            }),
            subtotal: 0,
            tax: 0,
            total: 0,
        };

        // Add to active orders and set as current
        setActiveOrders([...activeOrders, newOrder]);

        // Activate the new order
        setActiveOrderId(newOrderId);
        setCart([]);
        setTableNumber("");
        setNotes("");
        setSelectedProduct(null);
        setActivePromotion(null);
        setCustomizations({});

        // Make sure we're showing the caisse tab with our new order
        setActiveTab("caisse");

        // Show service type modal for the new order
        setShowServiceTypeModal(true);
    };

    const switchToOrder = (orderId) => {
        // Save current order state if an order is active
        if (activeOrderId) {
            saveCurrentOrderState();
        }

        // Load the selected order
        const orderToLoad = activeOrders.find((order) => order.id === orderId);
        if (orderToLoad) {
            setActiveOrderId(orderId);
            setCart(orderToLoad.items || []);
            setOrderType(orderToLoad.type || "takeout");
            setTableNumber(orderToLoad.table_number || "");
            setNotes(orderToLoad.notes || "");
            // Recalculate will happen via useEffect
        }
    };

    const saveCurrentOrderState = () => {
        if (!activeOrderId) return;

        setActiveOrders(
            activeOrders.map((order) =>
                order.id === activeOrderId
                    ? {
                          ...order,
                          items: cart,
                          type: orderType,
                          table_number: tableNumber,
                          notes: notes,
                          subtotal: subtotal,
                          tax: tax,
                          total: total,
                      }
                    : order
            )
        );
    };

    const cancelOrder = (orderId) => {
        const orderToCancel = orderId || activeOrderId;
        if (!orderToCancel) return;

        showConfirm(
            "Êtes-vous sûr de vouloir annuler cette commande?",
            (confirmed) => {
                if (confirmed) {
                    // Update order status to cancelled
                    setActiveOrders(
                        activeOrders.map((order) =>
                            order.id === orderToCancel
                                ? { ...order, status: "cancelled" } // Annulée
                                : order
                        )
                    );

                    // If cancelling the active order, clear the cart
                    if (orderToCancel === activeOrderId) {
                        setCart([]);
                        setActiveOrderId(null);
                    }
                }
            }
        );
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
                throw new Error("Méthode de paiement invalide");
            }

            // Set the payment amount from the payment details
            const amount =
                payment.method === "cash" ? payment.details.amount : total;
            setPaymentAmount(amount);

            if (amount < total) {
                throw new Error(
                    "Le montant payé doit être supérieur ou égal au montant total"
                );
            }

            // If there's no active order, create one
            if (!activeOrderId) {
                throw new Error(
                    "Aucune commande active. Veuillez créer une commande d'abord."
                );
            }

            // Find the current active order
            const currentOrder = activeOrders.find(
                (order) => order.id === activeOrderId
            );
            if (!currentOrder) {
                throw new Error("Commande non trouvée.");
            }

            // Create the final paid order
            const finalOrder = {
                id: currentOrder.id.startsWith("TEMP-")
                    ? `ORD-${String(orderNumber).padStart(4, "0")}`
                    : currentOrder.id,
                cashier: auth.user.name,
                items: cart.map((item) => ({
                    name: item.name,
                    quantity: item.quantity,
                    unit_price: item.unit_price,
                    subtotal: item.quantity * item.unit_price,
                    customizations: customizations[item.product_id],
                })),
                type: orderType,
                table_number: tableNumber,
                notes,
                subtotal,
                tax,
                total,
                status: "paid", // Payée
                timestamp: currentOrder.timestamp,
                payment: {
                    method: payment.method,
                    details: payment.details,
                    amount: amount,
                },
                promotion: activePromotion,
            };

            // Generate the receipt
            const receiptGenerator = Receipt();
            receiptGenerator.generateReceipt(finalOrder);

            // Remove order from activeOrders
            setActiveOrders(
                activeOrders.filter((order) => order.id !== activeOrderId)
            );

            // Add to completed orders
            setOrders([...orders, finalOrder]);
            setOrderNumber(orderNumber + 1);

            // Reset everything to initial state
            setActiveOrderId(null);
            setCart([]);
            setTableNumber("");
            setNotes("");
            setPaymentAmount(0);
            setChange(0);
            setActivePromotion(null);
            setCustomizations({});
            setSelectedProduct(null);
            setShowPaymentModal(false);

            // Show success message
            showAlert("Paiement réussi!", "Succès");
        } catch (error) {
            console.error("Error processing payment:", error);
            showAlert(
                error.message ||
                    "Une erreur est survenue lors du traitement du paiement. Veuillez réessayer.",
                "Erreur"
            );
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
        if (type === "eat_in" && showTables) {
            setActiveTab("tables");
        } else {
            // For other service types, make sure we stay on or return to caisse tab
            setActiveTab("caisse");
        }
    };

    const handlePromotionApply = (promotion) => {
        setActivePromotion(promotion);
        calculateTotals();
    };

    const handleCustomize = (product, customizations) => {
        // Check if there's an active order before proceeding
        if (!activeOrderId) {
            showAlert(
                "Veuillez créer une nouvelle commande d'abord.",
                "Attention"
            );
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
        switch (status) {
            case "paid":
                return "bg-green-100 text-green-800";
            case "pending":
                return "bg-yellow-100 text-yellow-800";
            case "cancelled":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    // Function to translate status to French
    const getStatusText = (status) => {
        switch (status) {
            case "paid":
                return "Payée";
            case "pending":
                return "En cours";
            case "cancelled":
                return "Annulée";
            default:
                return status;
        }
    };

    // Replace alert() function with a modal
    const showAlert = (message, title = "Information") => {
        setAlertMessage(message);
        setAlertTitle(title);
        setIsConfirm(false);
        setAlertCallback(null);
        setShowAlertModal(true);
    };

    // Replace confirm() function with a modal
    const showConfirm = (message, callback, title = "Confirmation") => {
        setAlertMessage(message);
        setAlertTitle(title);
        setIsConfirm(true);
        setAlertCallback(() => callback);
        setShowAlertModal(true);
    };

    const handleTableSelect = (tableId) => {
        // Check if table is already occupied
        const tableOccupied = activeOrders.some(
            (order) =>
                order.status === "pending" && order.table_number === tableId
        );

        if (tableOccupied) {
            showAlert("Cette table est déjà occupée.", "Attention");
            return;
        }

        // Set the table number
        setTableNumber(tableId);
        setOrderType("eat_in");

        // Switch to the Caisse tab
        setActiveTab("caisse");
    };

    // Update table status whenever activeOrders changes
    useEffect(() => {
        const updatedTables = [...tables];

        // Reset all tables to available first
        updatedTables.forEach((table) => (table.status = "available"));

        // Mark tables with active orders as occupied
        activeOrders.forEach((order) => {
            if (order.status === "pending" && order.table_number) {
                const tableIndex = updatedTables.findIndex(
                    (t) => t.id === order.table_number
                );
                if (tableIndex >= 0) {
                    updatedTables[tableIndex].status = "occupied";
                }
            }
        });

        setTables(updatedTables);
    }, [activeOrders]);

    // Update getTableColor function to remove the 'reserved' status option
    const getTableColor = (tableId, isSelected = false) => {
        const status = tableStatuses[tableId]?.status;

        if (status === "occupied") return "bg-red-400 border-red-600";
        return "bg-green-400 border-green-600"; // available
    };

    return (
        <>
            <Head title="Système de Caisse" />

            <div className="flex h-screen bg-gray-100">
                {/* Left Side - Cart */}
                <div className="w-1/3 bg-white flex flex-col shadow-lg">
                    {/* Cart Header - more compact with active orders */}
                    <div className="p-3 bg-blue-900 text-white">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">Panier</h2>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleNewOrder}
                                    className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm font-medium min-w-[10px] h-7 flex items-center justify-center shadow-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    {/* Nouvelle */}
                                </button>
                                <div className="relative group">
                                    <button className="px-3 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 text-sm font-medium min-w-[10px] h-7 flex items-center justify-center shadow-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 mr-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                            />
                                        </svg>
                                        {/* Commandes  */}
                                        <span className="ml-1 bg-white text-blue-900 rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                            {
                                                activeOrders.filter(
                                                    (o) =>
                                                        o.status === "pending"
                                                ).length
                                            }
                                        </span>
                                    </button>

                                    {/* Active Orders Dropdown */}
                                    <div className="absolute right-0 mt-1 bg-white rounded-md shadow-lg overflow-hidden z-10 w-64 hidden group-hover:block">
                                        <div className="py-1 max-h-80 overflow-y-auto">
                                            {activeOrders.filter(
                                                (o) => o.status === "pending"
                                            ).length === 0 ? (
                                                <div className="px-4 py-3 text-sm text-gray-500">
                                                    Aucune commande active
                                                </div>
                                            ) : (
                                                activeOrders
                                                    .filter(
                                                        (o) =>
                                                            o.status ===
                                                            "pending"
                                                    )
                                                    .map((order) => (
                                                        <div
                                                            key={order.id}
                                                            className={`px-4 py-3 text-sm hover:bg-gray-100 cursor-pointer ${
                                                                activeOrderId ===
                                                                order.id
                                                                    ? "bg-blue-50"
                                                                    : ""
                                                            }`}
                                                            onClick={() =>
                                                                switchToOrder(
                                                                    order.id
                                                                )
                                                            }
                                                        >
                                                            <div className="flex justify-between items-center">
                                                                <div className="flex flex-col">
                                                                    <span className="font-medium">
                                                                        {order.type ===
                                                                        "eat_in"
                                                                            ? "Sur Place"
                                                                            : order.type ===
                                                                              "takeout"
                                                                            ? "À Emporter"
                                                                            : "Livraison"}
                                                                        {order.table_number &&
                                                                            ` - Table ${order.table_number}`}
                                                                    </span>
                                                                    <span className="text-xs text-gray-500">
                                                                        {
                                                                            order.timestamp
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <span className="font-medium">
                                                                    {order.total.toFixed(
                                                                        2
                                                                    )}{" "}
                                                                    MAD
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* History Button */}
                                <button
                                    onClick={() =>
                                        setShowOrderHistory(!showOrderHistory)
                                    }
                                    className={`px-3 py-2 rounded-md text-sm font-medium  h-7 flex items-center justify-center shadow-md ${
                                        showOrderHistory
                                            ? "bg-indigo-700 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    {/* Historique */}
                                </button>
                            </div>
                        </div>

                        {/* Active Order ID with larger cancel button */}
                        {activeOrderId && (
                            <div className="mt-2 flex justify-between items-center">
                                <div className="bg-blue-700 text-white px-2 py-1 rounded text-sm flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                        />
                                    </svg>
                                    Commande active
                                </div>
                                <button
                                    onClick={() => cancelOrder(activeOrderId)}
                                    className="bg-red-600 text-white px-3 py-1 rounded text-sm flex items-center hover:bg-red-700 shadow-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                    Annuler
                                </button>
                            </div>
                        )}

                        <div className="flex gap-2 mt-2 text-sm">
                            <div className="flex items-center gap-1">
                                <span>Art.:</span>
                                <span className="bg-white text-blue-900 px-2 py-1 rounded-full font-medium">
                                    {cart.reduce(
                                        (sum, item) => sum + item.quantity,
                                        0
                                    )}
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

                    {/* Cart Items List - more compact */}
                    <div className="flex-1 overflow-auto">
                        {cart.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-gray-500 p-2">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg> */}
                                <DotLottieReact
                                    className="h-20 w-20 mb-1 text-gray-500 "
                                    src="https://lottie.host/2c33af02-1a9b-469c-8c3f-a9de5005fae3/IasMtb1nNU.lottie"
                                    loop
                                    speed="2"
                                    autoplay
                                />
                                <p className="text-base font-medium">
                                    Votre panier est vide
                                </p>
                                <p className="text-xs">
                                    Ajoutez des articles du menu
                                </p>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div
                                    key={item.product_id}
                                    onClick={() =>
                                        setSelectedProduct(
                                            staticProducts.find(
                                                (p) => p.id === item.product_id
                                            )
                                        )
                                    }
                                    className={`flex items-start px-2 py-1.5 hover:bg-gray-50 border-b border-gray-100 transition-colors cursor-pointer ${
                                        selectedProduct?.id === item.product_id
                                            ? "bg-blue-50"
                                            : ""
                                    }`}
                                >
                                    <div className="flex items-center mr-2">
                                        <span className="w-8 text-center font-bold text-base">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <div className="min-w-0">
                                                <span className="font-medium text-gray-900 text-sm truncate block">
                                                    {item.name}
                                                </span>
                                                {customizations[
                                                    item.product_id
                                                ] && (
                                                    <div className="text-xs text-blue-600">
                                                        <div className="truncate">
                                                            {Object.entries(
                                                                customizations[
                                                                    item
                                                                        .product_id
                                                                ].options
                                                            )
                                                                .map(
                                                                    ([
                                                                        category,
                                                                        selection,
                                                                    ]) =>
                                                                        Array.isArray(
                                                                            selection
                                                                        )
                                                                            ? selection
                                                                                  .map(
                                                                                      (
                                                                                          opt
                                                                                      ) =>
                                                                                          `${
                                                                                              opt.name ||
                                                                                              opt
                                                                                          }`
                                                                                  )
                                                                                  .join(
                                                                                      ", "
                                                                                  )
                                                                            : `${
                                                                                  selection.name ||
                                                                                  selection
                                                                              }`
                                                                )
                                                                .join(" | ")}
                                                        </div>
                                                        {customizations[
                                                            item.product_id
                                                        ].instructions && (
                                                            <div className="text-gray-600 italic text-xs truncate">
                                                                {
                                                                    customizations[
                                                                        item
                                                                            .product_id
                                                                    ]
                                                                        .instructions
                                                                }
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                                <div className="text-xs text-gray-500 flex items-center">
                                                    <span>
                                                        {item.unit_price.toFixed(
                                                            2
                                                        )}{" "}
                                                        MAD
                                                    </span>
                                                    <span className="mx-1">
                                                        ×
                                                    </span>
                                                    <span>{item.quantity}</span>
                                                </div>
                                            </div>
                                            <div className="text-sm font-medium text-gray-900 ml-1 whitespace-nowrap">
                                                {(
                                                    item.quantity *
                                                    item.unit_price
                                                ).toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Current Product Display - more compact */}
                    {selectedProduct && (
                        <div className="border-t border-gray-200 p-2 bg-blue-50">
                            <div className="flex justify-between items-center">
                                <div className="truncate">
                                    <h3 className="font-medium text-sm truncate">
                                        {selectedProduct.name}
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                        {selectedProduct.price.toFixed(2)} MAD
                                    </p>
                                </div>
                                <div className="text-xl font-bold ml-2">
                                    {cart.find(
                                        (item) =>
                                            item.product_id ===
                                            selectedProduct.id
                                    )?.quantity || 0}
                                </div>
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
                                    <span>
                                        {deliverySurcharge.toFixed(2)} MAD
                                    </span>
                                </div>
                            )}
                            {activePromotion && (
                                <div className="flex justify-between text-xs text-green-600">
                                    <span className="truncate">
                                        {activePromotion.name}
                                    </span>
                                    <span>
                                        -
                                        {activePromotion.discountAmount.toFixed(
                                            2
                                        )}
                                    </span>
                                </div>
                            )}
                            <div className="h-px bg-gray-200 my-1"></div>
                            <div className="flex justify-between text-sm font-bold text-blue-900">
                                <span>Total</span>
                                <span>{total.toFixed(2)} MAD</span>
                            </div>
                        </div>
                    </div>

                    {/* Numeric Keypad - more compact */}
                    <div className="border-t border-gray-200">
                        <div className="grid grid-cols-4 gap-0">
                            <div className="col-span-3">
                                <div className="grid grid-cols-3 gap-0">
                                    {[
                                        7,
                                        8,
                                        9,
                                        4,
                                        5,
                                        6,
                                        1,
                                        2,
                                        3,
                                        0,
                                        "CE",
                                        "⌫",
                                    ].map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => {
                                                if (selectedProduct) {
                                                    const currentQty =
                                                        cart.find(
                                                            (item) =>
                                                                item.product_id ===
                                                                selectedProduct.id
                                                        )?.quantity || 0;
                                                    if (num === "⌫") {
                                                        if (currentQty < 10) {
                                                            updateQuantity(
                                                                selectedProduct.id,
                                                                0
                                                            );
                                                        } else {
                                                            updateQuantity(
                                                                selectedProduct.id,
                                                                Math.floor(
                                                                    currentQty /
                                                                        10
                                                                )
                                                            );
                                                        }
                                                    } else if (num === "CE") {
                                                        updateQuantity(
                                                            selectedProduct.id,
                                                            0
                                                        );
                                                        setStartNewInput(true);
                                                    } else {
                                                        if (
                                                            startNewInput ||
                                                            currentQty === 0
                                                        ) {
                                                            updateQuantity(
                                                                selectedProduct.id,
                                                                parseInt(num)
                                                            );
                                                        } else {
                                                            const newQty =
                                                                parseInt(
                                                                    currentQty.toString() +
                                                                        num
                                                                );
                                                            updateQuantity(
                                                                selectedProduct.id,
                                                                newQty
                                                            );
                                                        }
                                                        setStartNewInput(false);
                                                    }
                                                }
                                            }}
                                            className={`p-2 text-base font-medium hover:bg-gray-100 border-r border-b transition-colors ${
                                                num === "CE"
                                                    ? "text-blue-600"
                                                    : ""
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
                                            const currentQty =
                                                cart.find(
                                                    (item) =>
                                                        item.product_id ===
                                                        selectedProduct.id
                                                )?.quantity || 0;
                                            updateQuantity(
                                                selectedProduct.id,
                                                currentQty + 1
                                            );
                                        }
                                    }}
                                    className="p-2 text-base font-medium hover:bg-gray-100 border-b transition-colors"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => {
                                        if (selectedProduct) {
                                            const currentQty =
                                                cart.find(
                                                    (item) =>
                                                        item.product_id ===
                                                        selectedProduct.id
                                                )?.quantity || 0;
                                            if (currentQty > 1) {
                                                updateQuantity(
                                                    selectedProduct.id,
                                                    currentQty - 1
                                                );
                                            }
                                        }
                                    }}
                                    className="p-2 text-base font-medium hover:bg-gray-100 border-b transition-colors"
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
                                    className="p-2 text-base font-medium hover:bg-gray-100 border-b transition-colors text-red-600"
                                >
                                    C
                                </button>
                                <button
                                    onClick={() => setShowPaymentModal(true)}
                                    className="p-2 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors flex-1"
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
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-green-600 text-white hover:bg-green-700 shadow-md"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            Payer ({total.toFixed(2)} MAD)
                        </button>
                    </div>
                </div>

                {/* Right Side - Products or Tables */}
                <div className="flex-1 flex flex-col bg-gray-100">
                    {/* Top Navigation Tabs */}
                    <div className="bg-white shadow-md mb-2">
                        <div className="max-w-7xl mx-auto p-2">
                            <div className="flex flex-wrap items-center">
                                <button
                                    onClick={() => setActiveTab("tables")}
                                    className={`px-4 py-2 mr-2 rounded-md ${
                                        activeTab === "tables"
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                                >
                                    Tables
                                </button>
                                <button
                                    onClick={() => setActiveTab("caisse")}
                                    className={`px-4 py-2 rounded-md ${
                                        activeTab === "caisse"
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                                >
                                    Caisse
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Table Management View */}
                    {activeTab === "tables" && (
                        <div className="flex-1 flex flex-col bg-gray-100 overflow-auto">
                            <div className="p-4">
                                <div className="max-w-7xl mx-auto">
                                    {/* Floor Selection */}
                                    <div className="flex justify-end mb-4">
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() =>
                                                    setActiveFloor("Main Floor")
                                                }
                                                className={`px-4 py-2 rounded-md border ${
                                                    activeFloor === "Main Floor"
                                                        ? "bg-blue-600 text-white"
                                                        : "bg-white"
                                                }`}
                                            >
                                                Main Floor
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setActiveFloor("Patio")
                                                }
                                                className={`px-4 py-2 rounded-md border ${
                                                    activeFloor === "Patio"
                                                        ? "bg-blue-600 text-white"
                                                        : "bg-white"
                                                }`}
                                            >
                                                Patio
                                            </button>
                                        </div>
                                    </div>

                                    {/* Floor Plan */}
                                    <div className="bg-gray-700 p-4 rounded-lg shadow-xl">
                                        {/* Restaurant Layout - Main Floor */}
                                        {activeFloor === "Main Floor" && (
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
                                                    {tables
                                                        .filter(
                                                            (table) =>
                                                                parseInt(
                                                                    table.id
                                                                ) < 20
                                                        )
                                                        .map((table) => (
                                                            <div
                                                                key={table.id}
                                                                onClick={() =>
                                                                    table.status !==
                                                                        "occupied" &&
                                                                    handleTableSelect(
                                                                        table.id
                                                                    )
                                                                }
                                                                className={`relative ${
                                                                    table.status ===
                                                                    "occupied"
                                                                        ? "bg-red-400 border-red-600"
                                                                        : "bg-green-400 border-green-600"
                                                                } ${
                                                                    parseInt(
                                                                        table.id
                                                                    ) > 8
                                                                        ? "w-48 h-32"
                                                                        : "w-32 h-32"
                                                                } rounded-md flex items-center justify-center cursor-pointer shadow-md border-2 transition-transform transform hover:scale-105`}
                                                            >
                                                                <span className="text-2xl font-bold">
                                                                    {table.id}
                                                                </span>

                                                                {/* Table Chairs */}
                                                                <div className="absolute -top-6 left-10 w-12 h-6 bg-blue-300 rounded-t-full"></div>
                                                                <div className="absolute -right-6 top-10 w-6 h-12 bg-blue-300 rounded-r-full"></div>
                                                                <div className="absolute -bottom-6 left-10 w-12 h-6 bg-blue-300 rounded-b-full"></div>
                                                                <div className="absolute -left-6 top-10 w-6 h-12 bg-blue-300 rounded-l-full"></div>

                                                                {parseInt(
                                                                    table.id
                                                                ) > 8 && (
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
                                        {activeFloor === "Patio" && (
                                            <div className="bg-emerald-100 p-6 rounded-md min-h-[600px] relative">
                                                <div className="grid grid-cols-3 gap-8 p-6">
                                                    {tables
                                                        .filter(
                                                            (table) =>
                                                                parseInt(
                                                                    table.id
                                                                ) >= 20
                                                        )
                                                        .map((table) => (
                                                            <div
                                                                key={table.id}
                                                                onClick={() =>
                                                                    table.status !==
                                                                        "occupied" &&
                                                                    handleTableSelect(
                                                                        table.id
                                                                    )
                                                                }
                                                                className={`relative ${
                                                                    table.status ===
                                                                    "occupied"
                                                                        ? "bg-red-400 border-red-600"
                                                                        : "bg-green-400 border-green-600"
                                                                } w-32 h-32 rounded-full flex items-center justify-center cursor-pointer shadow-md border-2 transition-transform transform hover:scale-105`}
                                                            >
                                                                <span className="text-2xl font-bold">
                                                                    {table.id}
                                                                </span>
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
                    {activeTab === "caisse" && (
                        <>
                            {/* Service Type Pills */}
                            {/* <div className="bg-white p-3 mb-2 border-b">
                                <div className="flex items-center justify-center space-x-4">
                                    <button
                                        onClick={() => setOrderType('eat_in')}
                                        className={`px-4 py-2 rounded-full flex items-center ${
                                            orderType === 'eat_in' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                                        }`}
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
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
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
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
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Livraison
                                    </button>
                                </div>
                            </div> */}

                            {/* Search and Categories */}
                            <div className="p-4 bg-white border-b shadow-sm">
                                <div className="max-w-4xl mx-auto">
                                    <div className="flex items-center mb-4">
                                        <div className="flex-1 relative">
                                            <input
                                                type="text"
                                                placeholder="Rechercher des produits..."
                                                value={searchQuery}
                                                onChange={(e) =>
                                                    setSearchQuery(
                                                        e.target.value
                                                    )
                                                }
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
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            {searchQuery && (
                                                <button
                                                    onClick={() =>
                                                        setSearchQuery("")
                                                    }
                                                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                        <button
                                            onClick={() =>
                                                setShowAllCategories(
                                                    !showAllCategories
                                                )
                                            }
                                            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM14 4a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1V4zM2 9a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V9zM8 9a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1V9zM14 9a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1V9zM2 14a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1zM8 14a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1zM14 14a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1z" />
                                            </svg>
                                            {showAllCategories
                                                ? "Masquer Catégories"
                                                : "Afficher Catégories"}
                                        </button>
                                    </div>
                                    {showAllCategories ? (
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                                            {categories.map((category) => (
                                                <div
                                                    key={category.id}
                                                    onClick={() => {
                                                        setActiveCategory(
                                                            category.id
                                                        );
                                                        setShowAllCategories(
                                                            false
                                                        );
                                                    }}
                                                    className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200 flex flex-col items-center"
                                                    style={{
                                                        backgroundColor:
                                                            category.color +
                                                            "20",
                                                    }}
                                                >
                                                    <div
                                                        className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-3 border-2 transform transition-all duration-300 hover:scale-110 hover:rotate-6"
                                                        style={{
                                                            borderColor:
                                                                category.color,
                                                        }}
                                                    >
                                                        {category.name ===
                                                        "Plats" ? (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-8 w-8 text-gray-700 transition-all duration-300 hover:text-amber-300"
                                                                viewBox="0 0 512 512"
                                                                fill="currentColor"
                                                            >
                                                                {/* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                                                                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM312.6 63.7c-6.2-6.2-16.4-6.2-22.6 0L256 97.6 222.1 63.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l33.9 33.9-45.3 45.3-56.6-56.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.6 56.6-45.3 45.3L86.3 199.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L97.6 256 63.7 289.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9 45.3 45.3-56.6 56.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56.6-56.6 45.3 45.3-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 414.4l33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-33.9-33.9 45.3-45.3 56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56.6-56.6 45.3-45.3 33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L414.4 256l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9-45.3-45.3 56.6-56.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-56.6 56.6-45.3-45.3 33.9-33.9c6.2-6.2 6.2-16.4 0-22.6zM142.9 256l45.3-45.3L233.4 256l-45.3 45.3L142.9 256zm67.9 67.9L256 278.6l45.3 45.3L256 369.1l-45.3-45.3zM278.6 256l45.3-45.3L369.1 256l-45.3 45.3L278.6 256zm22.6-67.9L256 233.4l-45.3-45.3L256 142.9l45.3 45.3z" />
                                                            </svg>
                                                        ) : category.name ===
                                                          "Boissons" ? (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-8 w-8 text-gray-700 transition-all duration-300 hover:text-green-600"
                                                                viewBox="0 0 512 512"
                                                                fill="currentColor"
                                                            >
                                                                {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                                                <path d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z" />
                                                            </svg>
                                                        ) : category.name ===
                                                          "Pizzas" ? (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-8 w-8 text-gray-700 transition-all duration-300 hover:text-yellow-600"
                                                                viewBox="0 0 512 512"
                                                                fill="currentColor"
                                                            >
                                                                {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                                                <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                                            </svg>
                                                        ) : category.name ===
                                                          "Desserts" ? (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-8 w-8 text-gray-700 transition-all duration-300 hover:text-fuchsia-600"
                                                                viewBox="0 0 512 512"
                                                                fill="currentColor"
                                                            >
                                                                {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                                                <path d="M367.1 160c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16l-.9 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l53.5 0 181 0 53.5 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-.9 0zM96 288L200.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 288 96 288z" />
                                                            </svg>
                                                        ) : category.name ===
                                                          "Salades" ? (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-8 w-8 text-gray-700 transition-all duration-300 hover:text-green-600"
                                                                viewBox="0 0 512 512"
                                                                fill="currentColor"
                                                            >
                                                                {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                                                <path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32L8.6 224C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256l457.1 0c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28l-231.5 0c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z" />
                                                            </svg>
                                                        ) : category.name ===
                                                          "Pâtes" ? (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-8 w-8 text-gray-700 transition-all duration-300 hover:text-blue-600"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        ) : category.name ===
                                                          "Sandwich" ? (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-8 w-8 text-gray-700 transition-all duration-300 hover:text-amber-700"
                                                                viewBox="0 0 512 512"
                                                                fill="currentColor"
                                                            >
                                                                {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                                                <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1L61.1 224zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L64 352c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 16c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-16z" />
                                                            </svg>
                                                        ) : (
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-8 w-8 text-gray-700 transition-all duration-300 hover:text-orange-400"
                                                                viewBox="0 0 512 512"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M64 32C28.7 32 0 60.7 0 96s28.7 64 64 64l1 0c3.7 88.9 77 160 167 160l56 0 0-192-24 0L88.8 128 64 128c-17.7 0-32-14.3-32-32s14.3-32 32-32l400 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32zM224 456c0 13.3 10.7 24 24 24l72 0 0-72.2-64.1-22.4c-12.5-4.4-26.2 2.2-30.6 14.7s2.2 26.2 14.7 30.6l4.5 1.6C233 433.9 224 443.9 224 456zm128 23.3c36.4-3.3 69.5-17.6 96.1-39.6l-86.5-34.6c-3 1.8-6.2 3.2-9.6 4.3l0 69.9zM472.6 415c24.6-30.3 39.4-68.9 39.4-111c0-12.3-1.3-24.3-3.7-35.9L382.8 355.1c.8 3.4 1.2 7 1.2 10.6c0 4.6-.7 9-1.9 13.1L472.6 415zM336 128l-16 0 0 192 18.3 0c9.9 0 19.1 3.2 26.6 8.5l133.5-92.4C471.8 172.6 409.1 128 336 128zM168 192a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-gray-800 tracking-tight transition-all duration-300 transform group-hover:translate-y-[-2px]">
                                                        {category.name}
                                                    </h3>
                                                    <div className="flex items-center justify-center mt-2 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/80">
                                                        <span
                                                            className="text-sm font-medium transition-all duration-300"
                                                            style={{
                                                                color: category.color,
                                                            }}
                                                        >
                                                            {
                                                                staticProducts.filter(
                                                                    (p) =>
                                                                        p.category_id ===
                                                                        category.id
                                                                ).length
                                                            }{" "}
                                                            produits
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                            <button
                                                onClick={() =>
                                                    setActiveCategory(null)
                                                }
                                                className={`px-4 py-2 rounded-full flex-shrink-0 font-medium transition-all duration-200 ${
                                                    !activeCategory
                                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200 transform scale-100"
                                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5"
                                                        viewBox="0 0 512 512"
                                                        fill="currentColor"
                                                    >
                                                        {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                                        <path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
                                                    </svg>
                                                    <span>
                                                        Tous les produits
                                                    </span>
                                                </div>
                                            </button>
                                            {categories.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() =>
                                                        setActiveCategory(
                                                            category.id
                                                        )
                                                    }
                                                    className={`px-4 py-2 rounded-full flex-shrink-0 font-medium transition-all duration-200 flex items-center gap-2 ${
                                                        activeCategory ===
                                                        category.id
                                                            ? "text-white shadow-lg transform scale-100"
                                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                                    }`}
                                                    style={{
                                                        backgroundColor:
                                                            activeCategory ===
                                                            category.id
                                                                ? category.color
                                                                : undefined,
                                                        boxShadow:
                                                            activeCategory ===
                                                            category.id
                                                                ? `0 10px 15px -3px ${category.color}40`
                                                                : undefined,
                                                    }}
                                                >
                                                    {category.name ===
                                                    "Plats" ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 512 512"
                                                            fill="currentColor"
                                                        >
                                                            {/* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                                                            <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM312.6 63.7c-6.2-6.2-16.4-6.2-22.6 0L256 97.6 222.1 63.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l33.9 33.9-45.3 45.3-56.6-56.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.6 56.6-45.3 45.3L86.3 199.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L97.6 256 63.7 289.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9 45.3 45.3-56.6 56.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56.6-56.6 45.3 45.3-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 414.4l33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-33.9-33.9 45.3-45.3 56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56.6-56.6 45.3-45.3 33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L414.4 256l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9-45.3-45.3 56.6-56.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-56.6 56.6-45.3-45.3 33.9-33.9c6.2-6.2 6.2-16.4 0-22.6zM142.9 256l45.3-45.3L233.4 256l-45.3 45.3L142.9 256zm67.9 67.9L256 278.6l45.3 45.3L256 369.1l-45.3-45.3zM278.6 256l45.3-45.3L369.1 256l-45.3 45.3L278.6 256zm22.6-67.9L256 233.4l-45.3-45.3L256 142.9l45.3 45.3z" />
                                                        </svg>
                                                    ) : category.name ===
                                                      "Boissons" ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 640 512"
                                                            fill="currentColor"
                                                        >
                                                            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                                            <path d="M96 64c0-17.7 14.3-32 32-32l320 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128zM32 416l512 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                                                        </svg>
                                                    ) : category.name ===
                                                      "Pizzas" ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 512 512"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                                        </svg>
                                                    ) : category.name ===
                                                      "Desserts" ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 512 512"
                                                            fill="currentColor"
                                                        >
                                                            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                                            <path d="M367.1 160c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16l-.9 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l53.5 0 181 0 53.5 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-.9 0zM96 288L200.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 288 96 288z" />
                                                        </svg>
                                                    ) : category.name ===
                                                      "Salades" ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 512 512"
                                                            fill="currentColor"
                                                        >
                                                            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                                                            <path d="M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32L8.6 224C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256l457.1 0c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28l-231.5 0c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z" />
                                                        </svg>
                                                    ) : category.name ===
                                                      "Pâtes" ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    ) : category.name ===
                                                      "Fruits de Mer" ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 512 512"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M64 32C28.7 32 0 60.7 0 96s28.7 64 64 64l1 0c3.7 88.9 77 160 167 160l56 0 0-192-24 0L88.8 128 64 128c-17.7 0-32-14.3-32-32s14.3-32 32-32l400 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32zM224 456c0 13.3 10.7 24 24 24l72 0 0-72.2-64.1-22.4c-12.5-4.4-26.2 2.2-30.6 14.7s2.2 26.2 14.7 30.6l4.5 1.6C233 433.9 224 443.9 224 456zm128 23.3c36.4-3.3 69.5-17.6 96.1-39.6l-86.5-34.6c-3 1.8-6.2 3.2-9.6 4.3l0 69.9zM472.6 415c24.6-30.3 39.4-68.9 39.4-111c0-12.3-1.3-24.3-3.7-35.9L382.8 355.1c.8 3.4 1.2 7 1.2 10.6c0 4.6-.7 9-1.9 13.1L472.6 415zM336 128l-16 0 0 192 18.3 0c9.9 0 19.1 3.2 26.6 8.5l133.5-92.4C471.8 172.6 409.1 128 336 128zM168 192a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                                                        </svg>
                                                    ) : category.name ===
                                                      "Sandwich" ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 512 512"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1L61.1 224zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L64 352c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 16c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-16z" />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 512 512"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                                                        </svg>
                                                    )}
                                                    {category.name}
                                                    {activeCategory ===
                                                        category.id && (
                                                        <span className="absolute -top-1 -right-1 bg-white text-xs text-gray-800 font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                                                            {
                                                                staticProducts.filter(
                                                                    (p) =>
                                                                        p.category_id ===
                                                                        category.id
                                                                ).length
                                                            }
                                                        </span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="flex-1 p-1 overflow-auto bg-gray-100">
                                <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-8 gap-2">
                                    {filteredProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            onClick={() => {
                                                setSelectedProduct(product);
                                                setShowCustomizeModal(true);
                                            }}
                                            className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md hover:bg-blue-50 transition-all duration-200 border border-gray-100"
                                        >
                                            <div className="relative h-24">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.src =
                                                            "https://via.placeholder.com/100?text=Pas+d%27image";
                                                    }}
                                                />
                                                <div className="absolute top-1 left-1">
                                                    <span className="px-1.5 py-0.5 text-xs font-medium rounded-full bg-white text-gray-800 shadow-sm">
                                                        {
                                                            categories.find(
                                                                (c) =>
                                                                    c.id ===
                                                                    product.category_id
                                                            )?.name
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-2 text-center">
                                                <h3 className="font-medium text-gray-900 text-xs truncate">
                                                    {product.name}
                                                </h3>
                                                <div className="mt-0.5 text-sm font-semibold text-blue-600">
                                                    {product.price.toFixed(2)}{" "}
                                                    MAD
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
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
                            <h2 className="text-xl font-bold">
                                Historique des commandes
                            </h2>
                            <button
                                onClick={() => setShowOrderHistory(false)}
                                className="text-white hover:text-gray-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4 overflow-auto flex-grow">
                            {/* Tab Navigation */}
                            <div className="flex gap-2 mb-4">
                                <button
                                    onClick={() => setActiveHistoryTab("all")}
                                    className={`px-4 py-3 rounded-md text-sm font-medium flex items-center ${
                                        activeHistoryTab === "all"
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                        />
                                    </svg>
                                    Toutes
                                </button>
                                <button
                                    onClick={() =>
                                        setActiveHistoryTab("pending")
                                    }
                                    className={`px-4 py-3 rounded-md text-sm font-medium flex items-center ${
                                        activeHistoryTab === "pending"
                                            ? "bg-yellow-500 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    En cours
                                    <span className="ml-2 bg-white text-yellow-600 rounded-full h-6 w-6 flex items-center justify-center text-xs">
                                        {
                                            [...activeOrders, ...orders].filter(
                                                (order) =>
                                                    order.status === "pending"
                                            ).length
                                        }
                                    </span>
                                </button>
                                <button
                                    onClick={() => setActiveHistoryTab("paid")}
                                    className={`px-4 py-3 rounded-md text-sm font-medium flex items-center ${
                                        activeHistoryTab === "paid"
                                            ? "bg-green-600 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Payées
                                    <span className="ml-2 bg-white text-green-600 rounded-full h-6 w-6 flex items-center justify-center text-xs">
                                        {
                                            [...activeOrders, ...orders].filter(
                                                (order) =>
                                                    order.status === "paid"
                                            ).length
                                        }
                                    </span>
                                </button>
                                <button
                                    onClick={() =>
                                        setActiveHistoryTab("cancelled")
                                    }
                                    className={`px-4 py-3 rounded-md text-sm font-medium flex items-center ${
                                        activeHistoryTab === "cancelled"
                                            ? "bg-red-600 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                    }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Annulées
                                    <span className="ml-2 bg-white text-red-600 rounded-full h-6 w-6 flex items-center justify-center text-xs">
                                        {
                                            [...activeOrders, ...orders].filter(
                                                (order) =>
                                                    order.status === "cancelled"
                                            ).length
                                        }
                                    </span>
                                </button>
                            </div>

                            {/* All Orders */}
                            {activeHistoryTab === "all" && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2 bg-blue-100 p-2 rounded-md text-blue-800">
                                        Toutes les commandes
                                    </h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Date
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        ID
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Type
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Total
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Statut
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {[...activeOrders, ...orders]
                                                    .sort(
                                                        (a, b) =>
                                                            new Date(
                                                                b.timestamp
                                                            ) -
                                                            new Date(
                                                                a.timestamp
                                                            )
                                                    )
                                                    .map((order) => (
                                                        <tr
                                                            key={order.id}
                                                            className="hover:bg-gray-50"
                                                        >
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {
                                                                    order.timestamp
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                {order.id}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                                {order.type ===
                                                                "eat_in"
                                                                    ? "Sur Place"
                                                                    : order.type ===
                                                                      "takeout"
                                                                    ? "À Emporter"
                                                                    : "Livraison"}
                                                                {order.table_number &&
                                                                    ` - Table ${order.table_number}`}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                {order.total.toFixed(
                                                                    2
                                                                )}{" "}
                                                                MAD
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap">
                                                                <span
                                                                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                                                                        order.status
                                                                    )}`}
                                                                >
                                                                    {getStatusText(
                                                                        order.status
                                                                    )}
                                                                </span>
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                <div className="flex gap-2">
                                                                    {order.status ===
                                                                        "pending" && (
                                                                        <>
                                                                            <button
                                                                                onClick={() => {
                                                                                    switchToOrder(
                                                                                        order.id
                                                                                    );
                                                                                    setShowOrderHistory(
                                                                                        false
                                                                                    );
                                                                                }}
                                                                                className="px-2 py-1 bg-blue-600 text-white rounded"
                                                                            >
                                                                                Modifier
                                                                            </button>
                                                                            <button
                                                                                onClick={() =>
                                                                                    cancelOrder(
                                                                                        order.id
                                                                                    )
                                                                                }
                                                                                className="px-2 py-1 bg-red-600 text-white rounded"
                                                                            >
                                                                                Annuler
                                                                            </button>
                                                                        </>
                                                                    )}
                                                                    {order.status ===
                                                                        "paid" && (
                                                                        <button
                                                                            onClick={() => {
                                                                                const receiptGenerator =
                                                                                    Receipt();
                                                                                receiptGenerator.generateReceipt(
                                                                                    order
                                                                                );
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
                                                {[...activeOrders, ...orders]
                                                    .length === 0 && (
                                                    <tr>
                                                        <td
                                                            colSpan="6"
                                                            className="px-6 py-4 text-center text-sm text-gray-500"
                                                        >
                                                            Aucune commande
                                                            trouvée
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* Pending Orders */}
                            {activeHistoryTab === "pending" && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2 bg-yellow-100 p-2 rounded-md text-yellow-800">
                                        Commandes en cours
                                    </h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Date
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        ID
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Type
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Total
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {[...activeOrders, ...orders]
                                                    .filter(
                                                        (order) =>
                                                            order.status ===
                                                            "pending"
                                                    )
                                                    .sort(
                                                        (a, b) =>
                                                            new Date(
                                                                b.timestamp
                                                            ) -
                                                            new Date(
                                                                a.timestamp
                                                            )
                                                    )
                                                    .map((order) => (
                                                        <tr
                                                            key={order.id}
                                                            className="hover:bg-gray-50"
                                                        >
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {
                                                                    order.timestamp
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                {order.id}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                                {order.type ===
                                                                "eat_in"
                                                                    ? "Sur Place"
                                                                    : order.type ===
                                                                      "takeout"
                                                                    ? "À Emporter"
                                                                    : "Livraison"}
                                                                {order.table_number &&
                                                                    ` - Table ${order.table_number}`}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                {order.total.toFixed(
                                                                    2
                                                                )}{" "}
                                                                MAD
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                <div className="flex gap-2">
                                                                    <button
                                                                        onClick={() => {
                                                                            switchToOrder(
                                                                                order.id
                                                                            );
                                                                            setShowOrderHistory(
                                                                                false
                                                                            );
                                                                        }}
                                                                        className="px-2 py-1 bg-blue-600 text-white rounded"
                                                                    >
                                                                        Modifier
                                                                    </button>
                                                                    <button
                                                                        onClick={() =>
                                                                            cancelOrder(
                                                                                order.id
                                                                            )
                                                                        }
                                                                        className="px-2 py-1 bg-red-600 text-white rounded"
                                                                    >
                                                                        Annuler
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                {[
                                                    ...activeOrders,
                                                    ...orders,
                                                ].filter(
                                                    (order) =>
                                                        order.status ===
                                                        "pending"
                                                ).length === 0 && (
                                                    <tr>
                                                        <td
                                                            colSpan="5"
                                                            className="px-6 py-4 text-center text-sm text-gray-500"
                                                        >
                                                            Aucune commande en
                                                            cours
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* Paid Orders */}
                            {activeHistoryTab === "paid" && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2 bg-green-100 p-2 rounded-md text-green-800">
                                        Commandes payées
                                    </h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Date
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        ID
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Type
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Total
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {[...activeOrders, ...orders]
                                                    .filter(
                                                        (order) =>
                                                            order.status ===
                                                            "paid"
                                                    )
                                                    .sort(
                                                        (a, b) =>
                                                            new Date(
                                                                b.timestamp
                                                            ) -
                                                            new Date(
                                                                a.timestamp
                                                            )
                                                    )
                                                    .map((order) => (
                                                        <tr
                                                            key={order.id}
                                                            className="hover:bg-gray-50"
                                                        >
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {
                                                                    order.timestamp
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                {order.id}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                                {order.type ===
                                                                "eat_in"
                                                                    ? "Sur Place"
                                                                    : order.type ===
                                                                      "takeout"
                                                                    ? "À Emporter"
                                                                    : "Livraison"}
                                                                {order.table_number &&
                                                                    ` - Table ${order.table_number}`}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                {order.total.toFixed(
                                                                    2
                                                                )}{" "}
                                                                MAD
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                <button
                                                                    onClick={() => {
                                                                        const receiptGenerator =
                                                                            Receipt();
                                                                        receiptGenerator.generateReceipt(
                                                                            order
                                                                        );
                                                                    }}
                                                                    className="px-2 py-1 bg-green-600 text-white rounded"
                                                                >
                                                                    Imprimer
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                {[
                                                    ...activeOrders,
                                                    ...orders,
                                                ].filter(
                                                    (order) =>
                                                        order.status === "paid"
                                                ).length === 0 && (
                                                    <tr>
                                                        <td
                                                            colSpan="5"
                                                            className="px-6 py-4 text-center text-sm text-gray-500"
                                                        >
                                                            Aucune commande
                                                            payée
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* Cancelled Orders */}
                            {activeHistoryTab === "cancelled" && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold mb-2 bg-red-100 p-2 rounded-md text-red-800">
                                        Commandes annulées
                                    </h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Date
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        ID
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Type
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {[...activeOrders, ...orders]
                                                    .filter(
                                                        (order) =>
                                                            order.status ===
                                                            "cancelled"
                                                    )
                                                    .sort(
                                                        (a, b) =>
                                                            new Date(
                                                                b.timestamp
                                                            ) -
                                                            new Date(
                                                                a.timestamp
                                                            )
                                                    )
                                                    .map((order) => (
                                                        <tr
                                                            key={order.id}
                                                            className="hover:bg-gray-50"
                                                        >
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {
                                                                    order.timestamp
                                                                }
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                {order.id}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                                {order.type ===
                                                                "eat_in"
                                                                    ? "Sur Place"
                                                                    : order.type ===
                                                                      "takeout"
                                                                    ? "À Emporter"
                                                                    : "Livraison"}
                                                                {order.table_number &&
                                                                    ` - Table ${order.table_number}`}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                                {order.total.toFixed(
                                                                    2
                                                                )}{" "}
                                                                MAD
                                                            </td>
                                                        </tr>
                                                    ))}
                                                {[
                                                    ...activeOrders,
                                                    ...orders,
                                                ].filter(
                                                    (order) =>
                                                        order.status ===
                                                        "cancelled"
                                                ).length === 0 && (
                                                    <tr>
                                                        <td
                                                            colSpan="4"
                                                            className="px-6 py-4 text-center text-sm text-gray-500"
                                                        >
                                                            Aucune commande
                                                            annulée
                                                        </td>
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
                            <h3 className="text-lg font-semibold text-gray-900">
                                {alertTitle}
                            </h3>
                            <div className="mt-3">
                                {typeof alertMessage === "string" ? (
                                    <p className="text-gray-600">
                                        {alertMessage}
                                    </p>
                                ) : (
                                    alertMessage
                                )}
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
                                className={`px-4 py-2 rounded text-white ${
                                    isConfirm
                                        ? "bg-blue-600 hover:bg-blue-700"
                                        : "bg-green-600 hover:bg-green-700"
                                }`}
                            >
                                {isConfirm ? "Confirmer" : "OK"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PosIndex;
