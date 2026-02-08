import React from 'react'

function ProductRange({ setMinValue, setMaxValue }) {

    function setMin(event) {
        setMinValue(event.target.value);

    }

    function setMax(event) {
        setMaxValue(event.target.value);

    }

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0">
      <div className="flex-1 group">
        <label className="block text-luxury-champagne font-medium mb-3 tracking-wide">Minimum Price</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-champagne-dark font-semibold">$</span>
          <input 
            type='number' 
            onChange={setMin} 
            className="w-full pl-8 pr-4 py-3 bg-white/90 dark:bg-luxury-charcoal/90 backdrop-blur-sm border-2 border-luxury-champagne/30 dark:border-luxury-champagne/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-champagne-dark focus:border-luxury-champagne shadow-lg text-luxury-charcoal dark:text-luxury-ivory font-medium tracking-wide transition-all duration-300 hover:shadow-luxury group-hover:border-luxury-champagne" 
            placeholder="0"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-luxury-champagne-dark/10 to-luxury-emerald/10 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
        </div>
      </div>
      <div className="flex-1 group">
        <label className="block text-luxury-champagne font-medium mb-3 tracking-wide">Maximum Price</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-champagne-dark font-semibold">$</span>
          <input 
            type='number' 
            onChange={setMax} 
            className="w-full pl-8 pr-4 py-3 bg-white/90 dark:bg-luxury-charcoal/90 backdrop-blur-sm border-2 border-luxury-champagne/30 dark:border-luxury-champagne/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-luxury-champagne-dark focus:border-luxury-champagne shadow-lg text-luxury-charcoal dark:text-luxury-ivory font-medium tracking-wide transition-all duration-300 hover:shadow-luxury group-hover:border-luxury-champagne" 
            placeholder="1000"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-luxury-champagne-dark/10 to-luxury-emerald/10 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
        </div>
      </div>

    </div>
  )
}

export default ProductRange
