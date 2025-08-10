'use client'

import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-teal-700 to-blue-800 shadow-lg w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
              >
                <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
              >
                Health AI
              </motion.span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
                { name: 'Services', path: '/services' },
                { name: 'Doctors', path: '/staff' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Appointments', path: '/appointment' },
                { name: 'Pay now', path: '/pay' },
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/10 text-white shadow-md'
                        : 'text-white/90 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  <motion.div whileHover={{ scale: 1.05 }}>
                    {item.name}
                  </motion.div>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="relative rounded-full p-1 text-white/90 hover:text-white focus:outline-none"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <motion.div whileHover={{ scale: 1.1 }}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </motion.div>
            </button>

            <div className="relative">
              <button
                type="button"
                className="relative flex rounded-full focus:outline-none"
                id="user-menu-button"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <img
                    className="h-8 w-8 rounded-full border-2 border-white/30 hover:border-white/50 transition-all"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User profile"
                  />
                </motion.div>
              </button>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Contact', path: '/contact' },
              { name: 'Doctors', path: '/staff' },
              { name: 'Testimonials', path: '/testimonials' },
              { name: 'Appointments', path: '/appointment' },
              { name: 'Pay now', path: '/pay' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
