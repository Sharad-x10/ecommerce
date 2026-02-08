import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gradient-to-br from-luxury-charcoal via-luxury-black to-luxury-charcoal-light text-luxury-ivory border-t border-luxury-champagne/10 relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-luxury-champagne/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-emerald/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luxury-royal/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-champagne-dark to-luxury-champagne flex items-center justify-center font-display font-bold text-luxury-charcoal shadow-gold text-xl group-hover:scale-110 transition-transform duration-300">
                  E
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-luxury-champagne-dark to-luxury-champagne opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
              </div>
              <span className="ml-4 font-display font-bold text-xl bg-gradient-to-r from-luxury-champagne to-luxury-champagne-dark bg-clip-text text-transparent">Luxe Boutique</span>
            </Link>
            <p className="text-luxury-ivory/80 text-sm max-w-sm leading-relaxed mb-6 font-light">
              Curating exceptional experiences through premium products. Where luxury meets accessibility, and every detail reflects our commitment to excellence.
            </p>

            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-luxury-champagne/20 text-luxury-champagne/70 hover:text-luxury-champagne hover:bg-luxury-champagne/10 hover:border-luxury-champagne transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-300">
                  <path d="M8 19c7 0 10.8-6 10.8-11.2v-.5A7.5 7.5 0 0 0 20 4.6a7.3 7.3 0 0 1-2.1.6 3.7 3.7 0 0 0 1.6-2 7.4 7.4 0 0 1-2.4.9A3.7 3.7 0 0 0 12.6 6c-2 0-3.6 1.8-3.6 4 0 .3 0 .6.1.9A10.5 10.5 0 0 1 3.3 5.8a4 4 0 0 0-.5 2 3.9 3.9 0 0 0 1.6 3.2c-.9 0-1.7-.3-2.4-.7v.1c0 1.9 1.3 3.6 3 4a3.6 3.6 0 0 1-1 .1c-.2 0-.4 0-.6-.1a3.8 3.8 0 0 0 3.4 2.7A7.5 7.5 0 0 1 4 17.6 10.5 10.5 0 0 0 8 19" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-luxury-champagne/20 text-luxury-champagne/70 hover:text-luxury-champagne hover:bg-luxury-champagne/10 hover:border-luxury-champagne transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-300">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="group p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-luxury-champagne/20 text-luxury-champagne/70 hover:text-luxury-champagne hover:bg-luxury-champagne/10 hover:border-luxury-champagne transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-110 transition-transform duration-300">
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.6.7 1.6.7.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.7.1-3.5 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.6 3.4-1.2 3.4-1.2.6 1.8.2 3.2.1 3.5.8.9 1.2 2 1.2 3.2 0 4.5-2.7 5.4-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A12 12 0 0 0 12 .5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-luxury-champagne font-display font-semibold mb-4 tracking-wide">Collection</h4>
              <ul className="space-y-3 text-sm text-luxury-ivory/80">
                <li><Link to="/products" className="hover:text-luxury-champagne transition-colors duration-300 font-light">All Products</Link></li>
                <li><a href="#" className="hover:text-luxury-champagne transition-colors duration-300 font-light">New Arrivals</a></li>
                <li><a href="#" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Best Sellers</a></li>
                <li><a href="#" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Premium Selection</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-luxury-champagne font-display font-semibold mb-4 tracking-wide">Company</h4>
              <ul className="space-y-3 text-sm text-luxury-ivory/80">
                <li><a href="#" className="hover:text-luxury-champagne transition-colors duration-300 font-light">About Us</a></li>
                <li><a href="#" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Careers</a></li>
                <li><a href="#" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Press</a></li>
                <li><a href="#" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Sustainability</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-luxury-champagne font-display font-semibold mb-4 tracking-wide">Support</h4>
              <ul className="space-y-3 text-sm text-luxury-ivory/80">
                <li><a href="#" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Help Center</a></li>
                <li><a href="#" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Contact</a></li>
                <li><a href="#" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Shipping</a></li>
                <li><a href="#" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Returns</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-luxury-champagne font-display font-semibold mb-4 tracking-wide">Stay Connected</h4>
            <p className="text-sm text-luxury-ivory/80 mb-6 font-light leading-relaxed">Join our exclusive community for early access to new collections and special offers.</p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <div className="relative group">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-luxury-champagne/20 text-luxury-ivory placeholder-luxury-ivory/60 focus:outline-none focus:ring-2 focus:ring-luxury-champagne-dark focus:border-luxury-champagne transition-all duration-300 font-medium"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-luxury-champagne-dark/10 to-luxury-emerald/10 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
              </div>
              <button
                className="w-full group relative inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne text-luxury-charcoal font-bold shadow-gold hover:shadow-luxury-lg transition-all duration-300 transform hover:scale-105 tracking-wide overflow-hidden"
                type="submit"
              >
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-champagne to-luxury-champagne-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-luxury-champagne/20 text-sm text-luxury-ivory/70 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-light">© {new Date().getFullYear()} Luxe Boutique. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Terms</Link>
            <Link to="/privacy" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Privacy</Link>
            <Link to="/cookies" className="hover:text-luxury-champagne transition-colors duration-300 font-light">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer