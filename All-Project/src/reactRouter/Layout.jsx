import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/header'
//In React Router, <Outlet> is a placeholder (or container) used to render nested child routes.

export default function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}