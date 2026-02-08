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
        <label className="block text-gray-900 font-medium mb-3 tracking-wide">Minimum Price</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 font-semibold">$</span>
          <input 
            type='number' 
            onChange={setMin} 
            className="w-full pl-8 pr-4 py-4 bg-white border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md text-gray-900 font-light tracking-wide transition-all duration-300 hover:shadow-lg group-hover:border-blue-400" 
            placeholder="0"
          />
          <div className="absolute inset-0 rounded-xl bg-blue-100/30 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
        </div>
      </div>
      <div className="flex-1 group">
        <label className="block text-gray-900 font-medium mb-3 tracking-wide">Maximum Price</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 font-semibold">$</span>
          <input 
            type='number' 
            onChange={setMax} 
            className="w-full pl-8 pr-4 py-4 bg-white border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md text-gray-900 font-light tracking-wide transition-all duration-300 hover:shadow-lg group-hover:border-blue-400" 
            placeholder="1000"
          />
          <div className="absolute inset-0 rounded-xl bg-blue-100/30 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
        </div>
      </div>

    </div>
  )
}

export default ProductRange
