import React from 'react'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router' // E’TIBOR: react-router emas, react-router-dom bo‘lishi kerak
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import News from './pages/News'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/news' element={<News />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
