import React from 'react'

function SearchProduct({setSearch}) {
  function onType(event){
    setSearch(event.target.value);
  }
  function onSubmit(e){
    e.preventDefault();

  }
  return (
    
    <div className="relative max-w-md mx-auto group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-luxury-champagne-dark group-focus-within:text-luxury-emerald transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Search luxury collection..." 
        onChange={onType}
        className="w-full pl-12 pr-6 py-4 bg-white/90 dark:bg-luxury-charcoal/90 backdrop-blur-sm border-2 border-luxury-champagne/30 dark:border-luxury-champagne/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-luxury-champagne-dark focus:border-luxury-champagne shadow-luxury text-luxury-charcoal dark:text-luxury-ivory placeholder-luxury-charcoal/60 dark:placeholder-luxury-ivory/60 font-medium tracking-wide transition-all duration-300 hover:shadow-luxury-lg"
      />
      </form>
      
      {/* Luxury glow effect on focus */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-luxury-champagne-dark/20 to-luxury-emerald/20 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
    </div>
  )
}

export default SearchProduct