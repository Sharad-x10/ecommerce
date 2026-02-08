import React from 'react'
import WelcomeBanner from '../components/home/WelcomeBanner'
import ProductCard from '../components/products/ProductCard'
import { products } from '../data/productsData'
import PracticeState from '../components/common/PracticeState'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className="min-h-screen bg-luxury-ivory">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-ivory via-luxury-ivory-soft to-luxury-stone-light opacity-60"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal via-luxury-espresso to-luxury-charcoal-dark"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 animate-fade-in">
                <div className="inline-block w-16 h-px bg-luxury-gold mb-8"></div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light text-luxury-ivory mb-6 tracking-tight leading-none">
                  Curated
                  <span className="block font-normal text-luxury-gold italic">Excellence</span>
                </h1>
                <div className="inline-block w-16 h-px bg-luxury-gold mt-8"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-luxury-ivory/80 font-light leading-relaxed mb-12 max-w-3xl mx-auto animate-slide-up">
                Discover a meticulously curated collection where timeless design meets uncompromising quality
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
                <Link 
                  to="/products"
                  className="group inline-flex items-center px-8 py-4 bg-luxury-gold text-luxury-charcoal font-medium tracking-wide rounded-luxury hover:bg-luxury-gold-light transition-all duration-500 hover:shadow-gold"
                >
                  <span>Explore Collection</span>
                  <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <button className="group inline-flex items-center px-8 py-4 border border-luxury-ivory/30 text-luxury-ivory font-medium tracking-wide rounded-luxury hover:bg-luxury-ivory/10 hover:border-luxury-ivory/50 transition-all duration-500">
                  <span>Learn More</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 right-20 w-2 h-2 bg-luxury-gold rounded-full animate-float opacity-60"></div>
          <div className="absolute bottom-32 left-16 w-1 h-1 bg-luxury-gold rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        </section>

        {/* Featured Products Section */}
        <section className="py-32 bg-luxury-ivory relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-block w-12 h-px bg-luxury-neutral mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-display font-light text-luxury-charcoal mb-6 tracking-tight">
                Featured Selection
              </h2>
              <p className="text-lg text-luxury-neutral max-w-2xl mx-auto font-light leading-relaxed">
                Handpicked pieces that exemplify our commitment to exceptional craftsmanship and enduring style
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {products.slice(0, 8).map((product, index) => (
                <div 
                  key={product.id} 
                  className="group animate-fade-in" 
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                to="/products"
                className="inline-flex items-center px-10 py-4 border border-luxury-charcoal text-luxury-charcoal font-medium tracking-wide rounded-luxury hover:bg-luxury-charcoal hover:text-luxury-ivory transition-all duration-500 hover:shadow-luxury"
              >
                <span>View All Products</span>
                <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 bg-luxury-stone-light relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-stone-light via-luxury-ivory-soft to-luxury-stone-light"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-block w-12 h-px bg-luxury-neutral mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-display font-light text-luxury-charcoal mb-6 tracking-tight">
                Our Promise
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors duration-500">
                  <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-luxury-charcoal mb-4 tracking-wide">Exceptional Quality</h3>
                <p className="text-luxury-neutral font-light leading-relaxed">Every piece is carefully selected and rigorously tested to meet our exacting standards</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors duration-500">
                  <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-luxury-charcoal mb-4 tracking-wide">Timeless Design</h3>
                <p className="text-luxury-neutral font-light leading-relaxed">Classic aesthetics that transcend trends, ensuring lasting appeal and enduring value</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors duration-500">
                  <svg className="w-8 h-8 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-luxury-charcoal mb-4 tracking-wide">Personal Service</h3>
                <p className="text-luxury-neutral font-light leading-relaxed">Dedicated support and personalized attention to ensure your complete satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-32 bg-luxury-charcoal relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-luxury-charcoal via-luxury-espresso to-luxury-charcoal-dark"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-block w-12 h-px bg-luxury-gold mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-luxury-ivory mb-6 tracking-tight">
              Stay Informed
            </h2>
            <p className="text-xl text-luxury-ivory/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Be the first to discover new arrivals, exclusive collections, and insider insights
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-luxury-ivory/10 border border-luxury-ivory/20 rounded-luxury text-luxury-ivory placeholder-luxury-ivory/60 focus:outline-none focus:border-luxury-gold focus:bg-luxury-ivory/15 transition-all duration-300"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-luxury-gold text-luxury-charcoal font-medium tracking-wide rounded-luxury hover:bg-luxury-gold-light transition-all duration-300 hover:shadow-gold"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
        
        <PracticeState/>
      </div>
    </div>
  )
}

export default Homepage