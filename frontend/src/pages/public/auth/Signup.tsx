'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { GoogleLogo } from "@/components/icons"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { useState } from "react"
import { UserRoleSelector } from "@/components/auth/role-selector"
import {Loader2,HeartPulse} from 'lucide-react'

export default function SignUpPage() {
  const navigate = useNavigate()
  const [role, setRole] = useState<'patient' | 'doctor'>('patient')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success("Account created successfully!")
      navigate(`/${role}/dashboard`)
    } catch (error) {
      toast.error("Failed to create account")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
      >
        <div className="p-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <HeartPulse className="w-12 h-12 text-teal-600" />
          </motion.div>
          
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl font-bold text-center text-slate-800 mb-2"
      >
        Create Your Account
      </motion.h1>
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-center text-slate-500 mb-8"
      >
        Join our healthcare platform as a patient or doctor
      </motion.p>

      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <UserRoleSelector role={role} onRoleChange={setRole} />
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-600">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your@email.com" 
              className="h-11"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-slate-600">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              className="h-11"
              minLength={8}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className="text-slate-600">Confirm Password</Label>
            <Input 
              id="confirm-password" 
              type="password" 
              placeholder="••••••••" 
              className="h-11"
              minLength={8}
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full h-11 bg-teal-600 hover:bg-teal-700 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              'Create Account'
            )}
          </Button>
        </motion.div>
      </form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      >
        <Separator className="my-6" />
        <Button 
          variant="outline"
          className="w-full h-11 gap-2"
          onClick={() => toast("Redirecting to Google authentication")}
        >
          <GoogleLogo className="w-5 h-5" />
          Continue with Google
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 text-center text-sm text-slate-500"
      >
        Already have an account?{" "}
        <button 
          className="text-teal-600 hover:underline font-medium"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
      </motion.div>
    </div>
  </motion.div>
</div>
)
}