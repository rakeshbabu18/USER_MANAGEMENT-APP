import {useState, useEffect} from 'react'

function UsersList() {

    let [users,setUsers] = useState([])
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)

    useEffect(()=>{
        async function getUsers(){
            try {
                console.log("Fetching users...")
                let res = await fetch("http://localhost:4000/users-api/users", {
                    method:"GET"
                });
                console.log("Response status:", res.status)
                if(res.status === 200){
                    let resobj = await res.json()
                    console.log("Response data:", resobj)
                    setUsers(resobj.payload)
                }
            } catch (err) {
                console.log("Error:", err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getUsers()
    },[])

  if (loading) return (
    <div className="flex justify-center items-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  )
  if (error) return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-red-50 border border-red-200 rounded-xl text-center shadow-sm">
      <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <h3 className="text-lg font-medium text-red-800">Failed to load users</h3>
      <p className="mt-2 text-red-600">{error}</p>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Users Directory</h1>
          <p className="mt-2 text-sm text-gray-500">A list of all users registered in your complete platform.</p>
        </div>
        <div className="mt-4 sm:mt-0">
           <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
             Total Users: {users.length}
           </span>
        </div>
      </div>

      {users.length === 0 ? (
        <div className="text-center py-16 bg-white border border-dashed border-gray-300 rounded-2xl shadow-sm">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No users found</h3>
          <p className="mt-1 text-sm text-gray-500">Get started by adding a new user.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map(user => (
            <div key={user._id} className="bg-white overflow-hidden shadow-sm hover:shadow-md border border-gray-100 rounded-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <div className="h-12 w-12 rounded-full bg-linear-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold shadow-inner">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">{user.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{user.email}</p>
                  </div>
                </div>
                
                <div className="mt-6 border-t border-gray-50 pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">DOB</p>
                    <p className="mt-1 text-sm text-gray-900 font-medium">{user.dateOfBirth ? new Date(user.dateOfBirth).toLocaleDateString() : 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</p>
                    <p className="mt-1 text-sm text-gray-900 font-medium">{user.mobileNumber || 'N/A'}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UsersList