import React from 'react'
import { Outlet } from 'remix'

const ServicesPage : React.FC = () => {
  return (
    <div className='mt-[80px]'>
        <p>Services</p>
        <Outlet />
    </div>
  )
}

export default ServicesPage