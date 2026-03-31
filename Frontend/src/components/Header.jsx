import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='flex justify-between px-10 bg-fuchsia-300 h-10' >
      <img src={null} alt="" />
      <ul>
        <li>
           <NavLink to="/" className={({isActive})=> (isActive?"bg-blue-400 text-lime-50 rounded-2xl p-2 pr-4 shadow me-5":"")}>
            Home
           </NavLink>
           <NavLink to="/add-user" className={({isActive})=> (isActive?"bg-blue-400 text-lime-50 rounded-2xl p-2 shadow":"")}>
            AddUser
           </NavLink>
           <NavLink to="/users-list" className={({isActive})=> (isActive?"bg-blue-400 text-lime-50 rounded-2xl p-2 shadow":"")}>
            UsersList
           </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header