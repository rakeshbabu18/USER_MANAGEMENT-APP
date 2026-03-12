import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import AddUser from './components/AddUser'
import UsersList from './components/UsersList'
import User from './components/User'

function App() {
  const RouterObj = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'add-user',
          element: <AddUser />
        },
        {
          path: 'users-list',
          element: <UsersList />
        },
        {
          path: 'user/:id',
          element: <User />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={RouterObj} />
  )
}

export default App
