import React from 'react'
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Vincent from './pages/Vincent'
import Icarus from './pages/Icarus'
import Header from './components/Header'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
