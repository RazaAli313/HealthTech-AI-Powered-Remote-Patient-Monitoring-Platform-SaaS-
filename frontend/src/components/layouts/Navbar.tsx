import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
   <nav className="bg-gray-800 flex justify-center ">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    
        <button type="button" aria-controls="mobile-menu" aria-expanded="false" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
        
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"  data-slot="icon" aria-hidden="true" className="block size-6">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"  data-slot="icon" aria-hidden="true" className="hidden size-6">
            <path d="M6 18 18 6M6 6l12 12"   />
          </svg>
        </button>
      </div>
      <div className="flex  justify-start">
          <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" className="h-8 w-auto" />
          <h3>Health AI</h3>
        </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          
            <Link to="/" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</Link>
            <Link to="about" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</Link>
            <Link to="contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</Link>
            <Link to="/staff" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Staff</Link>
            <Link to="/testimonials" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Testimonials</Link>
            <Link to="/appointment" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Book Appointment</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"  data-slot="icon" aria-hidden="true" className="size-6">
            <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"  />
          </svg>
        </button>

    
        <div className="relative ml-3">
          <div>
            <button id="user-menu-button" type="button" aria-expanded="false" aria-haspopup="true" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-8 rounded-full" />
            </button>
          </div>

{/*        
          <div role="menu" aria-labelledby="user-menu-button" aria-orientation="vertical" className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-hidden">
          
            <Link id="user-menu-item-0" role="menuitem" to="#" className="block px-4 py-2 text-sm text-gray-700">Your Profile</Link>
            <Link id="user-menu-item-1" role="menuitem" to="#" className="block px-4 py-2 text-sm text-gray-700">Settings</Link>
            <Link id="user-menu-item-2" role="menuitem" to="#"  className="block px-4 py-2 text-sm text-gray-700">Sign out</Link>
          </div> */}
        </div>
      </div>
    </div>
  </div>

 
  <div id="mobile-menu" className="sm:hidden">
    <div className="space-y-1 px-2 pt-2 pb-3">
     
      <Link to="#" aria-current="page" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</Link>
      <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</Link>
      <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</Link>
      <Link to="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</Link>
    </div>
  </div>
</nav>


  )
}
