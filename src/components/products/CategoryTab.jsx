import React from 'react'

function CategoryTab({CategoryName, setSelectedCategory, selectedCategory}) {
    function handleClick(){
        setSelectedCategory(CategoryName)
    }
    
    const isActive = selectedCategory === CategoryName;
    
  return (
    <button 
      onClick={handleClick} 
      className={`group relative inline-block px-8 py-3 mx-2 my-2 rounded-full font-medium transition-all duration-300 capitalize tracking-wide transform hover:scale-105 ${
        isActive 
          ? 'bg-gradient-to-r from-luxury-champagne-dark to-luxury-champagne text-luxury-charcoal shadow-gold border-2 border-luxury-champagne-dark' 
          : 'bg-white/10 dark:bg-luxury-charcoal/50 backdrop-blur-sm border-2 border-luxury-champagne/30 dark:border-luxury-champagne/20 text-luxury-ivory dark:text-luxury-champagne hover:border-luxury-champagne hover:bg-luxury-champagne/10 hover:text-luxury-champagne shadow-lg'
      }`}
    >
      {CategoryName}
      
      {/* Luxury shimmer effect on hover */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-luxury-champagne/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-luxury-emerald rounded-full shadow-emerald"></div>
      )}
    </button>
  )
}

export default CategoryTab