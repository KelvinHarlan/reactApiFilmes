import { Outlet } from 'react-router-dom';
import Nav from './components/navBar/Nav';
import './App.css';
import Footer from './components/footer/Footer';





function App() {
  return (
    <>
      <Nav/>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
