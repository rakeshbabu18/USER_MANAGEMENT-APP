import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'

function User() {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getUser() {
      try {
        let res = await fetch(`http://localhost:4000/users-api/users/${id}`, {
          method: "GET"
        })
        if (res.status === 200 || res.status === 201) {
          let data = await res.json()
          setUser(data.payload)
        } else {
          setError("User not found")
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    if (id) {
      getUser()
    } else {
      setLoading(false)
    }
  }, [id])

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
    </div>
  )

  if (error) return (
    <div className="max-w-md mx-auto mt-10 p-6">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
        <p>{error}</p>
        <Link to="/users-list" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
          ← Back to Users List
        </Link>
      </div>
    </div>
  )

  if (!user) return (
    <div className="max-w-md mx-auto mt-10 p-6">
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-lg">
        <p>No user selected</p>
        <Link to="/users-list" className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
          ← Back to Users List
        </Link>
      </div>
    </div>
  )

  return (
    <div className="max-w-lg mx-auto mt-10 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        <div className="flex items-center justify-center mb-6">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-3xl">
            {user.name ? user.name.charAt(0).toUpperCase() : '?'}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">{user.name}</h2>
        <p className="text-gray-600 text-center mb-6">{user.email}</p>
        
        <div className="space-y-3">
          {user.dateOfBirth && (
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500">Date of Birth</span>
              <span className="text-gray-800">{new Date(user.dateOfBirth).toLocaleDateString()}</span>
            </div>
          )}
          {user.mobileNumber && (
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500">Mobile Number</span>
              <span className="text-gray-800">{user.mobileNumber}</span>
            </div>
          )}
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span className="text-gray-500">Status</span>
            <span className={`px-2 py-1 rounded text-sm ${user.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {user.status ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>
        
        <div className="mt-6 flex gap-3">
          <Link to="/users-list" className="flex-1 text-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-200">
            ← Back
          </Link>
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

export default User
