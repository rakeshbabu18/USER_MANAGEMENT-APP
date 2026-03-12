import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl shadow-sm border border-gray-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-2xl transform transition-all hover:scale-[1.01] duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 tracking-tight">
          User Management App
        </h1>
        <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
          Manage your users efficiently. Add new users, view the user list, and manage details all in one place with a beautiful interface.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link to="/add-user" className="group relative inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
               
              Add New User
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </Link>
          <Link to="/users-list" className="group relative inline-flex items-center justify-center bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-4 px-8 rounded-xl shadow-md transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              
              View Users List
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
