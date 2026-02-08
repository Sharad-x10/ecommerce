import React from 'react'

function FilterByRating({setMinRate, setMaxRate} ) {
    function setMin(event){
        setMinRate(event.target.value);

    }
    function setMax(event){
        setMaxRate(event.target.value);

    }
  return (
    <div className="space-y-6">
        <div className="group">
          <label className="block text-gray-900 font-medium mb-3 tracking-wide flex items-center gap-2">
            <span className="text-yellow-500 text-lg">⭐</span>
            Minimum Rating
          </label>
          <div className="relative">
            <input 
              type='number' 
              min="0" 
              max="5" 
              step="0.1"
              onChange={setMin} 
              className="w-full px-5 py-4 bg-white border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md text-gray-900 font-light tracking-wide transition-all duration-300 hover:shadow-lg group-hover:border-blue-400" 
              placeholder="0.0"
            />
            <div className="absolute inset-0 rounded-xl bg-blue-100/30 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
        
        <div className="group">
          <label className="block text-gray-900 font-medium mb-3 tracking-wide flex items-center gap-2">
            <span className="text-yellow-500 text-lg">⭐</span>
            Maximum Rating
          </label>
          <div className="relative">
            <input
              type='number' 
              min="0" 
              max="5" 
              step="0.1"
              onChange={setMax} 
              className="w-full px-5 py-4 bg-white border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md text-gray-900 font-light tracking-wide transition-all duration-300 hover:shadow-lg group-hover:border-blue-400" 
              placeholder="5.0"
            /> 
            <div className="absolute inset-0 rounded-xl bg-blue-100/30 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
      
    </div>
  )
}

export default FilterByRating
