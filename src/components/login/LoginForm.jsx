import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
    const { login , setEmail , setPassword , email ,password , setFullName, fullName} = useAuth();
   
function onSubmit(event){
    event.preventDefault();

    console.log("email",email);
    console.log("password",password);
    console.log("fullName",fullName)

    if (email && password){
        login();
        navigate('/');
    }

    setEmail("");
    setPassword("");
    setFullName("");
}

    
function setEmailFn(event){
    setEmail(event.target.value);
    
}
function setPasswordFn(event){
    setPassword(event.target.value);

}
function setFullNameFn(event){
    setFullName(event.target.value);
}




  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-block w-12 h-px bg-blue-600 mb-6"></div>
          <h1 className="text-4xl font-display font-medium text-gray-900 mb-4 tracking-tight">Welcome Back</h1>
          <p className="text-gray-600 font-light">Sign in to access your account</p>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border border-blue-100">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3 tracking-wide">Full Name</label>
              <input 
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full px-5 py-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 font-light"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3 tracking-wide">Email</label>
              <input 
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={setEmailFn}
                className="w-full px-5 py-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 font-light"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3 tracking-wide">Password</label>
              <input 
                type="password"
                placeholder="Enter Your Password"
                onChange={setPasswordFn}
                value={password}
                className="w-full px-5 py-4 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 font-light"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl tracking-wide"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
      

}
