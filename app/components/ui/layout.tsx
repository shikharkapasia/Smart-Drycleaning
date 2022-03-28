import React from 'react'
import { useLocation } from 'remix'
import Footer from './footer'
import Header from './header'

const Layout : React.FC = ({children}) => {

  const location = useLocation();

  return (
    <div className='flex flex-col min-h-[calc(100vh - 64px)] h-auto min-w-screen'>
        <Header pathname={location.pathname} />
        {children}
        <Footer/>
    </div>
  )
}

export default Layout