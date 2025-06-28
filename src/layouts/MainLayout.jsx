import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col font-roboto'>
      <Header></Header>
      <main className='grow'>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout
