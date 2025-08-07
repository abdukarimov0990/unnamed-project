import React from 'react'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router' // E’TIBOR: react-router emas, react-router-dom bo‘lishi kerak
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import News from './pages/News'
import New from './pages/New'
import Lessons from './pages/Lessons'
import VideoLesson from './pages/VideoLesson'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/news' element={<News />} />
      <Route path='/news/:id' element={<New/>} />
      <Route path='/lessons' element={<Lessons/>} />
      <Route path='/lessons/:id' element={<VideoLesson/>} />

    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
