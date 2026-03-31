import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

function AddUser() {
  const {register, handleSubmit, reset, formState: { errors }} = useForm()
    const navigate = useNavigate()
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(null)

    const onUserCreate = async (newUser) => {
        setLoading(true)
        setError(null)
        
        try {
            let res = await fetch("http://localhost:4000/users-api/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            
            let data = await res.json()
            
            if (res.status === 201) {
              reset()
              toast.success('User registered successfully!')
              navigate('/users-list')
            } else {
              setError(data?.message || 'Unable to create user. Please try again.')
            }
        }
        catch(err){
          console.log("Error:", err)
          setError(err.message)
        }
        finally{
            setLoading(false)
        }
    }
  return (
    <div className='max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
      <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
        <div className='bg-linear-to-r from-blue-600 to-purple-600 py-6 px-8'>
          <h1 className='text-3xl font-extrabold text-white text-center'>Add New User</h1>
          <p className='text-blue-100 text-center mt-2'>Fill in the details below to create a new user profile.</p>
        </div>
        
        <div className='p-8'>
          {error && (
            <div className='mb-6 p-4 rounded-lg bg-red-50 border-l-4 border-red-500 flex items-start'>
               <svg className='h-5 w-5 text-red-500 mr-3 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                 <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd'/>
               </svg>
               <p className='text-sm text-red-700 font-medium'>{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit(onUserCreate)} className='space-y-6'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-700'>Full Name</label>
                <input 
                  type="text" 
                  placeholder='Enter full name' 
                  {...register('name', {
                    required: 'Full name is required',
                    minLength: {
                      value: 3,
                      message: 'Full name must be at least 3 characters'
                    },
                    pattern: {
                      value: /^[A-Za-z ]+$/,
                      message: 'Full name can contain only letters and spaces'
                    }
                  })} 
                  className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50'
                />
                {errors.name && <p className='text-sm text-red-600'>{errors.name.message}</p>}
              </div>
              
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-700'>Email Address</label>
                <input 
                  type="email" 
                  placeholder='test@example.com' 
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Enter a valid email address'
                    }
                  })} 
                  className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50'
                />
                {errors.email && <p className='text-sm text-red-600'>{errors.email.message}</p>}
              </div>
              
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-700'>Date of Birth</label>
                <input 
                  type="date" 
                  {...register('dateOfBirth', {
                    required: 'Date of birth is required',
                    validate: (value) => {
                      const selectedDate = new Date(value)
                      const today = new Date()
                      today.setHours(0, 0, 0, 0)
                      return selectedDate < today || 'Date of birth must be in the past'
                    }
                  })} 
                  className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50 text-gray-700'
                />
                {errors.dateOfBirth && <p className='text-sm text-red-600'>{errors.dateOfBirth.message}</p>}
              </div>
              
              <div className='space-y-2'>
                <label className='block text-sm font-semibold text-gray-700'>Mobile Number</label>
                <input 
                  type="text" 
                  placeholder='+91 XXXXX XXXXX' 
                  {...register('mobileNumber', {
                    required: 'Mobile number is required',
                    pattern: {
                      value: /^\+?[0-9]{10}$/,
                      message: 'Mobile number must be 10 digits'
                    }
                  })} 
                  className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-gray-50'
                />
                {errors.mobileNumber && <p className='text-sm text-red-600'>{errors.mobileNumber.message}</p>}
              </div>
            </div>
            
            <div className='pt-4'>
              <button 
                type='submit' 
                disabled={loading}
                className={`w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:-translate-y-0.5'}`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating User...
                  </>
                ) : 'Add User Profile'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser
