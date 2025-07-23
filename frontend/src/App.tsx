import './App.css'
import Navbar from './components/layouts/Navbar.tsx'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/public/Home.tsx'
import About from './pages/public/About.tsx'
import Contact from './pages/public/Contact.tsx'
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
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

    <div className="flex min-h-svh items-center justify-center">
      <Button className='mr-2'  variant="outline">Explore More</Button>
       <Button
      variant="outline"
      onClick={() =>
        toast("Your report has been generated", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
     Generate Report 
    </Button>
    </div>
      </ThemeProvider>
        <Footer></Footer>
    {/* <Footer></Footer> */}

    </>
  )
}

export default App
