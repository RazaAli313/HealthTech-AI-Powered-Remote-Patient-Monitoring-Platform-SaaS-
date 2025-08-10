'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react/'

interface AnimatedRouteProps {
  children: ReactNode
  className?: string
}

export function AnimatedRoute({ children, className }: AnimatedRouteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}