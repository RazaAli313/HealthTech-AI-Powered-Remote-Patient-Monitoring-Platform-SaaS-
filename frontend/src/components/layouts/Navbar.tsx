import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="  mt-0 pt-2 space-x-3 text-center">

     <Link to="/">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact us</Link>
     
    

    
    </nav>

  )
}
