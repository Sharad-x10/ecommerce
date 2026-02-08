import React from 'react';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/products/ProductCard';

function Cartpage() {
  const { cartItems, cartCount, cartTotal, removeFromCart, clearCart } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-blue-600 flex items-center justify-center shadow-xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m13-7l2 7m-4-7v7" />
              </svg>
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 text-lg mb-8 font-light">
              Your cart is currently empty. Discover our collection of premium products.
            </p>
            <a 
              href="/products" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 tracking-wide"
            >
              <span>Browse Collection</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4 tracking-tight">
              Your Shopping Cart
            </h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            {cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="flex items-center justify-between mb-8 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">{cartCount}</span>
            </div>
            <div>
              <h2 className="text-xl font-display font-semibold text-gray-900">
                Cart Summary
              </h2>
              <p className="text-gray-600 font-light">
                Items selected
              </p>
            </div>
          </div>
          
          <button
            className="group px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 tracking-wide"
            onClick={() => {
              if (window.confirm('Clear your entire cart?')) clearCart();
            }}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Cart
            </span>
          </button>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
          {cartItems.map(item => (
            <div key={item.id} className="transform hover:scale-105 transition-all duration-300">
              <ProductCard product={item} />
            </div>
          ))}
        </div>

        <div className="max-w-md ml-auto">
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-blue-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-display font-bold text-gray-900 mb-6 tracking-wide">
                Order Total
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="text-gray-600 font-light">Subtotal</span>
                  <span className="text-gray-900 font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-100">
                  <span className="text-gray-600 font-light">Shipping</span>
                  <span className="text-green-600 font-semibold">Free</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t-2 border-blue-200">
                  <span className="text-xl font-display font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
              
              <button className="w-full group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 tracking-wide overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Proceed to Checkout
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
