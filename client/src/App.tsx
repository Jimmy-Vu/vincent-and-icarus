import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Vincent from './pages/vincent'
import Icarus from './pages/icarus'
import Header from './components/Header'
import NotFound from './pages/not-found'
import Footer from './components/Footer'
import GetStarted from './pages/get-started'

export default function App(): React.ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="vincent" element={<Vincent />} />
        <Route path="icarus" element={<Icarus />} />
        <Route path="get-started" element={<GetStarted />} />
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

const Root = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center w-full h-screen min-h-screen">
      <Header />
      <div className="w-full max-w-screen-2xl h-full pt-28 flex justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
