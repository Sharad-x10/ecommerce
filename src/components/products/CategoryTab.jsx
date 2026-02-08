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
          ? 'bg-blue-600 text-white shadow-lg border-2 border-blue-600' 
          : 'bg-white border-2 border-blue-200 text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 shadow-md'
      }`}
    >
      {CategoryName}
      
      <div className="absolute inset-0 rounded-full bg-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-md"></div>
      )}
    </button>
  )
}

export default CategoryTab