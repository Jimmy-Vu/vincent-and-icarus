import React, { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Vincent from './pages/vincent'
import Icarus from './pages/icarus'
import Header from './components/header'
import NotFound from './pages/not-found'
import Footer from './components/footer'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="vincent" element={<Vincent />} />
        <Route path="icarus" element={<Icarus />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

const Root = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Header />
      <div className="w-full max-w-screen-2xl pt-28 flex justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
