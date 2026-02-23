import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='min-h-screen bg-white border-r w-16 sm:w-56 flex flex-col gap-1 pt-5'>

      <NavLink
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-indigo-50 border-r-4 border-primary text-primary' : 'text-gray-600'}`
        }
        to='/admin-dashboard'
      >
        {/* Dashboard icon */}
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
        </svg>
        <p className='hidden sm:block'>Dashboard</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-indigo-50 border-r-4 border-primary text-primary' : 'text-gray-600'}`
        }
        to='/all-appointments'
      >
        {/* Appointments icon */}
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
        </svg>
        <p className='hidden sm:block'>Appointments</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-indigo-50 border-r-4 border-primary text-primary' : 'text-gray-600'}`
        }
        to='/add-doctor'
      >
        {/* Add Doctor icon */}
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z' />
        </svg>
        <p className='hidden sm:block'>Add Doctor</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 cursor-pointer ${isActive ? 'bg-indigo-50 border-r-4 border-primary text-primary' : 'text-gray-600'}`
        }
        to='/doctor-list'
      >
        {/* Doctors List icon */}
        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
        </svg>
        <p className='hidden sm:block'>Doctors List</p>
      </NavLink>

    </div>
  )
}

export default Sidebar
