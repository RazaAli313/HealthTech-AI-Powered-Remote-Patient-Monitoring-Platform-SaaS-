import './App.css'
import Navbar from './components/layouts/Navbar.tsx'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/public/Home.tsx'
import About from './pages/public/About.tsx'
import Contact from './pages/public/Contact.tsx'
import { ThemeProvider } from "./components/layouts/theme-provider.tsx"
import Footer from './components/layouts/Footer.tsx'
function App() {

  return (
    <>
     
      <Navbar></Navbar>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <main>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
     </Routes>
   
     
    </main>

   
      </ThemeProvider>
        <Footer></Footer>
    {/* <Footer></Footer> */}

    </>
  )
}

export default App
