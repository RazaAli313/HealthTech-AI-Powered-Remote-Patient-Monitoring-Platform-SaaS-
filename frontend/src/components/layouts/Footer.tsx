import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    
<div className="w-screen h-56  bg-gray-800">
    <div className='flex flex-col items-center'>
          <Link to="/" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</Link>
            <Link to="about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</Link>
            <Link to="contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</Link>
            <Link to="/staff" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Staff</Link>
    </div>
    <p className="flex flex-col text-center">
    &copy; 2025 | All rights reserved @ Health AI , Powered by Syed Muhammad Raza Ali Zaidi
    </p>
    
   
</div>
      
   
  )
}
