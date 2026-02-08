import React from 'react'

function FilterByRating({setMinRate, setMaxRate} ) {
    function setMin(event){
        setMinRate(event.target.value);

    }
    function setMax(event){
        setMaxRate(event.target.value);

    }
  return (
    <div className="space-y-4">
        <div className="group">
          <label className="block text-luxury-champagne font-medium mb-3 tracking-wide flex items-center gap-2">
            <span className="text-luxury-champagne-dark text-lg">⭐</span>
            Minimum Rating
          </label>
          <div className="relative">
            <input 
              type='number' 
              min="0" 
              max="5" 
              step="0.1"
              onChange={setMin} 
              className="w-full px-4 py-3 bg-white/90 dark:bg-luxury-charcoal/90 backdrop-blur-sm border-2 border-luxury-champagne/30 dark:border-luxury-champagne/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-champagne-dark focus:border-luxury-champagne shadow-lg text-luxury-charcoal dark:text-luxury-ivory font-medium tracking-wide transition-all duration-300 hover:shadow-luxury group-hover:border-luxury-champagne" 
              placeholder="0.0"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-luxury-champagne-dark/10 to-luxury-emerald/10 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
        
        <div className="group">
          <label className="block text-luxury-champagne font-medium mb-3 tracking-wide flex items-center gap-2">
            <span className="text-luxury-champagne-dark text-lg">⭐</span>
            Maximum Rating
          </label>
          <div className="relative">
            <input
              type='number' 
              min="0" 
              max="5" 
              step="0.1"
              onChange={setMax} 
              className="w-full px-4 py-3 bg-white/90 dark:bg-luxury-charcoal/90 backdrop-blur-sm border-2 border-luxury-champagne/30 dark:border-luxury-champagne/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-champagne-dark focus:border-luxury-champagne shadow-lg text-luxury-charcoal dark:text-luxury-ivory font-medium tracking-wide transition-all duration-300 hover:shadow-luxury group-hover:border-luxury-champagne" 
              placeholder="5.0"
            /> 
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-luxury-champagne-dark/10 to-luxury-emerald/10 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
      
    </div>
  )
}

export default FilterByRating
