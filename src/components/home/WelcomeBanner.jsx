import React from 'react'

function WelcomeBanner({ user }) {
  return (
    <section className="relative overflow-hidden rounded-3xl p-12 sm:p-16 bg-gradient-to-br from-luxury-charcoal via-luxury-black to-luxury-charcoal-light text-luxury-ivory shadow-luxury-lg border border-luxury-champagne/10">
      {/* Luxury background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-luxury-champagne/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-champagne/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-luxury-emerald/5 rounded-full blur-3xl"></div>
      
      {/* Decorative luxury pattern */}
      <svg className="pointer-events-none absolute right-8 top-8 opacity-10 w-32 h-32" viewBox="0 0 200 200" aria-hidden>
        <defs>
          <linearGradient id="luxuryGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#d4af37" stopOpacity="0.3"/>
            <stop offset="1" stopColor="#f7e7ce" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#luxuryGrad)"></circle>
        <circle cx="100" cy="100" r="60" fill="none" stroke="#d4af37" strokeWidth="2" strokeOpacity="0.2"></circle>
        <circle cx="100" cy="100" r="40" fill="none" stroke="#f7e7ce" strokeWidth="1" strokeOpacity="0.3"></circle>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne px-4 py-2 text-sm font-bold text-luxury-charcoal shadow-gold tracking-wide">
              ✨ EXCLUSIVE
            </span>
            <span className="text-sm text-luxury-champagne/90 font-medium tracking-wide">Limited Collection</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Welcome to 
            <span className="block bg-gradient-to-r from-luxury-champagne via-luxury-champagne-dark to-luxury-emerald-light bg-clip-text text-transparent">
              Luxury, {user}
            </span>
            <span className="text-3xl ml-4">🎆</span>
          </h1>

          <p className="text-luxury-ivory/90 max-w-2xl text-lg sm:text-xl leading-relaxed mb-8 font-light">
            Discover our meticulously curated collection of premium products, handpicked for the discerning connoisseur. Each piece tells a story of craftsmanship, elegance, and timeless sophistication.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button className="group relative inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne text-luxury-charcoal font-bold shadow-gold hover:shadow-luxury-lg focus:outline-none focus:ring-2 focus:ring-luxury-champagne/50 transition-all duration-300 transform hover:scale-105 tracking-wide overflow-hidden">
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-champagne to-luxury-champagne-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group inline-flex items-center px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-luxury-champagne/30 text-luxury-champagne hover:bg-luxury-champagne/10 hover:border-luxury-champagne focus:outline-none focus:ring-2 focus:ring-luxury-champagne/50 transition-all duration-300 font-semibold tracking-wide">
              <span>Discover More</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-luxury-champagne/20 group hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-luxury-champagne-dark to-luxury-champagne flex items-center justify-center text-luxury-charcoal font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                🚚
              </div>
              <span className="text-luxury-ivory font-medium">Complimentary Shipping</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-luxury-champagne/20 group hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-luxury-emerald to-luxury-emerald-light flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                ↩️
              </div>
              <span className="text-luxury-ivory font-medium">Effortless Returns</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-xl border border-luxury-champagne/20 group hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-luxury-royal to-luxury-royal-light flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                🔒
              </div>
              <span className="text-luxury-ivory font-medium">Secure Transactions</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-80 xl:w-96 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-luxury-champagne/20 flex items-center justify-center p-12 group hover:scale-105 transition-transform duration-500" aria-hidden>
          <div className="relative">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-12 transition-transform duration-700">
              <rect x="20" y="20" width="160" height="160" rx="24" fill="url(#luxuryGradient)" />
              <circle cx="100" cy="80" r="35" fill="white" opacity="0.15" />
              <path d="M60 140c12-12 28-16 80 0" stroke="white" strokeOpacity="0.2" strokeWidth="6" strokeLinecap="round" />
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#f7e7ce" fontSize="32" fontWeight="700">✨</text>
              <defs>
                <linearGradient id="luxuryGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#d4af37" stopOpacity="0.3"/>
                  <stop offset="1" stopColor="#1a1a1a" stopOpacity="0.8"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-br from-luxury-champagne/20 to-luxury-emerald/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeBanner