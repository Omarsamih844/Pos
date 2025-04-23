<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\Produit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PosController extends Controller
{
    public function index()
    {
        $categories = Categorie::all();
        $produits = Produit::all();
        return Inertia::render('Pos/Index', [
            'categories' => $categories,
            'produits' => $produits,
        ]);
    }

    public function storeOrder(Request $request)
    {
        $request->validate([
            'items' => ['required', 'array'],
            'items.*.product_id' => ['required', 'exists:products,id'],
            'items.*.quantity' => ['required', 'integer', 'min:1'],
            'type' => ['required', 'in:eat_in,takeaway'],
            'table_number' => ['required_if:type,eat_in'],
            'subtotal' => ['required', 'numeric', 'min:0'],
            'tax' => ['required', 'numeric', 'min:0'],
            'total' => ['required', 'numeric', 'min:0'],
        ]);

        $order = Order::create([
            'status' => 'pending',
            'type' => $request->type,
            'table_number' => $request->table_number,
            'notes' => $request->notes,
            'subtotal' => $request->subtotal,
            'tax' => $request->tax,
            'total' => $request->total,
            'user_id' => auth()->id(),
        ]);

        foreach ($request->items as $item) {
            $product = Product::find($item['product_id']);
            $order->items()->create([
                'product_id' => $item['product_id'],
                'quantity' => $item['quantity'],
                'unit_price' => $product->price,
                'subtotal' => $product->price * $item['quantity'],
            ]);
        }

        return redirect()->back()->with('success', 'Order created successfully!');
    }
}