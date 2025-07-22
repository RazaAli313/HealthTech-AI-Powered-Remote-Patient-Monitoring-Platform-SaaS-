import './App.css'
import Navbar from './components/layouts/Navbar.tsx'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/public/Home.tsx'
import About from './pages/public/About.tsx'
import Contact from './pages/public/Contact.tsx'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <main>
    <div className='container bg-blue-400'
    >Health Tech is an AI powered SAAS based platform which is used for remote patient management... </div>
     <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
     </Routes>
    </main>
    <img></img>
    {/* <Footer></Footer> */}

    </>
  )
}

export default App
