import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Outlet/>
    </>
  )
}

export default App
