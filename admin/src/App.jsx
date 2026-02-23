import React, { useContext } from 'react'
import Login from './pages/Login'
import { AdminContext } from './context/AdminContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AllAppointments from './pages/AllAppointments'
import AddDoctor from './pages/AddDoctor'
import DoctorsList from './pages/DoctorsList'

const App = () => {
  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <div className='flex-1 p-5 min-h-screen'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/admin-dashboard' element={<Dashboard />} />
            <Route path='/all-appointments' element={<AllAppointments />} />
            <Route path='/add-doctor' element={<AddDoctor />} />
            <Route path='/doctor-list' element={<DoctorsList />} />
          </Routes>
        </div>
      </div>
    </div>
  ) : (
    <Login />
  )
}

export default App
