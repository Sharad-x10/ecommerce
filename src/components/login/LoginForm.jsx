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




    return ( <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={onSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                        type="text"
                        placeholder="Enter Your Full Name"
                        
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={setEmailFn}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input 
                        type="password"
                        placeholder="Enter Your Password"
                        
                        onChange={setPasswordFn}
                        value={password}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                    Sign In
                </button>
            </form>
        </div>
    )
      

}
