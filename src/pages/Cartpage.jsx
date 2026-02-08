import React from 'react';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/products/ProductCard';

function Cartpage() {
  const { cartItems, cartCount, cartTotal, removeFromCart, clearCart } = useCart();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-luxury-ivory via-white to-luxury-ivory-dark dark:from-luxury-charcoal dark:via-luxury-black dark:to-luxury-charcoal-light">
        {/* Luxury background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-luxury-champagne/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-luxury-emerald/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-luxury-champagne-dark to-luxury-champagne flex items-center justify-center shadow-gold">
              <svg className="w-12 h-12 text-luxury-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m13-7l2 7m-4-7v7" />
              </svg>
            </div>
            <h2 className="text-3xl font-display font-bold text-luxury-charcoal dark:text-luxury-ivory mb-4">
              Your Collection Awaits
            </h2>
            <p className="text-luxury-charcoal/70 dark:text-luxury-ivory/70 text-lg mb-8 font-light">
              Your luxury cart is currently empty. Discover our curated collection of premium products.
            </p>
            <a 
              href="/products" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne text-luxury-charcoal font-bold shadow-gold hover:shadow-luxury-lg transition-all duration-300 transform hover:scale-105 tracking-wide"
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
    <div className="min-h-screen bg-gradient-to-br from-luxury-ivory via-white to-luxury-ivory-dark dark:from-luxury-charcoal dark:via-luxury-black dark:to-luxury-charcoal-light">
      {/* Luxury background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-luxury-champagne/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-emerald/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luxury-royal/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne mx-auto rounded-full mb-4"></div>
            <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-luxury-charcoal via-luxury-champagne-dark to-luxury-emerald dark:from-luxury-champagne dark:via-luxury-champagne-dark dark:to-luxury-emerald-light bg-clip-text text-transparent mb-4 tracking-tight">
              Your Luxury Collection
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne mx-auto rounded-full"></div>
          </div>
          
          <p className="text-luxury-charcoal/70 dark:text-luxury-ivory/70 text-lg max-w-2xl mx-auto leading-relaxed mb-8 font-light">
            {cartCount} carefully selected {cartCount === 1 ? 'item' : 'items'} in your exclusive collection
          </p>
        </div>

        <div className="flex items-center justify-between mb-8 p-6 bg-white/80 dark:bg-luxury-charcoal/80 backdrop-blur-sm rounded-2xl border border-luxury-champagne/20 shadow-luxury">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-champagne-dark to-luxury-champagne flex items-center justify-center shadow-gold">
              <span className="text-luxury-charcoal font-bold text-lg">{cartCount}</span>
            </div>
            <div>
              <h2 className="text-xl font-display font-semibold text-luxury-charcoal dark:text-luxury-ivory">
                Collection Summary
              </h2>
              <p className="text-luxury-charcoal/70 dark:text-luxury-ivory/70 font-light">
                Premium items selected with care
              </p>
            </div>
          </div>
          
          <button
            className="group px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 tracking-wide"
            onClick={() => {
              if (window.confirm('Clear your entire collection?')) clearCart();
            }}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Collection
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

        {/* Luxury Total Section */}
        <div className="max-w-md ml-auto">
          <div className="bg-gradient-to-br from-luxury-charcoal via-luxury-black to-luxury-charcoal-light text-luxury-ivory p-8 rounded-2xl shadow-luxury-lg border border-luxury-champagne/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-luxury-champagne/10 via-transparent to-transparent"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-emerald/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-display font-bold text-luxury-champagne mb-6 tracking-wide">
                Collection Total
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-luxury-champagne/20">
                  <span className="text-luxury-ivory/80 font-light">Subtotal</span>
                  <span className="text-luxury-champagne font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-luxury-champagne/20">
                  <span className="text-luxury-ivory/80 font-light">Shipping</span>
                  <span className="text-luxury-emerald-light font-semibold">Complimentary</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t-2 border-luxury-champagne/30">
                  <span className="text-xl font-display font-bold text-luxury-champagne">Total</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-luxury-champagne-dark to-luxury-emerald-light bg-clip-text text-transparent">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
              
              <button className="w-full group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne text-luxury-charcoal font-bold shadow-gold hover:shadow-luxury-lg transition-all duration-300 transform hover:scale-105 tracking-wide overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Proceed to Checkout
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-champagne to-luxury-champagne-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
