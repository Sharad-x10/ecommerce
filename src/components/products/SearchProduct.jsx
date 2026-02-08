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
        <svg className="h-5 w-5 text-blue-500 group-focus-within:text-blue-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Search collection..." 
        onChange={onType}
        className="w-full pl-12 pr-6 py-4 bg-white border-2 border-blue-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md text-gray-900 placeholder-gray-500 font-light tracking-wide transition-all duration-300 hover:shadow-lg"
      />
      </form>
      
      <div className="absolute inset-0 rounded-2xl bg-blue-100/30 opacity-0 group-focus-within:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
    </div>
  )
}

export default SearchProduct