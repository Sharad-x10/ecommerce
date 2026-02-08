import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-200">
            <span className="text-5xl font-display text-blue-600">404</span>
          </div>
          <div className="inline-block w-12 h-px bg-blue-600 mb-6"></div>
          <h1 className="text-5xl font-display font-medium text-gray-900 mb-6 tracking-tight">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">We couldn't find the page you're looking for. It may have been moved or no longer exists.</p>
          <Link 
            to='/' 
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl tracking-wide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
