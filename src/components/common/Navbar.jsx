import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

function Navbar() {
  const cartCtx = useCart();
  const cartCount = cartCtx?.cartCount ?? 0;

  return (
    <nav className="bg-gradient-to-r from-luxury-charcoal via-luxury-black to-luxury-charcoal dark:from-luxury-black dark:via-luxury-charcoal dark:to-luxury-black text-luxury-ivory sticky top-0 z-50 shadow-luxury border-b border-luxury-champagne/10 backdrop-blur-luxury">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-champagne-dark to-luxury-champagne flex items-center justify-center font-display font-bold text-luxury-charcoal shadow-gold text-xl group-hover:scale-110 transition-transform duration-300">
                E
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-luxury-champagne-dark to-luxury-champagne opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
            </div>
            <span className="font-display font-bold text-2xl bg-gradient-to-r from-luxury-champagne to-luxury-champagne-dark bg-clip-text text-transparent group-hover:from-luxury-champagne-dark group-hover:to-luxury-emerald-light transition-all duration-300">Luxe Boutique</span>
          </Link>

          {/* Desktop Menu */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="relative text-luxury-ivory/90 hover:text-luxury-champagne transition-colors duration-300 px-4 py-2 rounded-lg font-medium tracking-wide group"
            >
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link
              to="/products"
              className="relative text-luxury-ivory/90 hover:text-luxury-champagne transition-colors duration-300 px-4 py-2 rounded-lg font-medium tracking-wide group"
            >
              Collection
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne group-hover:w-full transition-all duration-300"></div>
            </Link>

            {/* Luxury Cart */}
            <Link
              to="/cart"
              className="relative group flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne text-luxury-charcoal font-semibold shadow-gold hover:shadow-luxury-lg transform hover:scale-105 transition-all duration-300 tracking-wide"
            >
              {/* Cart Icon */}
              <svg
                className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7m13-7l2 7m-4-7v7"
                />
              </svg>

              Cart

              {/* Luxury Cart Count Badge */}
              {cartCount > 0 && (
                <div className="absolute -top-2 -right-2 flex items-center justify-center min-w-6 h-6 px-2 text-xs font-bold rounded-full bg-gradient-to-r from-luxury-emerald to-luxury-emerald-light text-white shadow-emerald animate-pulse">
                  {cartCount}
                </div>
              )}
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
            </Link>
             <Link
              to="/login"
              className="relative text-luxury-ivory/90 hover:text-luxury-champagne transition-colors duration-300 px-4 py-2 rounded-lg font-medium tracking-wide group"
            >
              Login
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne group-hover:w-full transition-all duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
