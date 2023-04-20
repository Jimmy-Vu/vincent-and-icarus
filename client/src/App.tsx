import React, { useEffect, useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Vincent from './pages/vincent'
import Icarus from './pages/icarus'
import Header from './components/header'
import ErrorPage from './pages/error'
import NotFound from './pages/notFound'

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
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex grow">
        <Outlet />
      </div>
    </div>
  );
}
