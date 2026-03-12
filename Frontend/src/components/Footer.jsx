import React from 'react'

function Footer() {
  return (
    <footer className="bg-white border-t border-indigo-50 mt-auto py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className='w-6 h-6 rounded-md  from-blue-600 to-purple-600 flex items-center justify-center shadow'>
              <span className='text-white font-bold text-xs'>U</span>
            </span>
            <span className="text-gray-900 font-semibold tracking-wide">UserDash</span>
          </div>
          <p className="text-sm text-gray-500 font-medium text-center md:text-left">
            © {new Date().getFullYear()} User Management App. All rights reserved.
          </p>
           
        </div>
      </div>
    </footer>
  )
}

export default Footer
