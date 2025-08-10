'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useNavigate, useSearchParams } from "react-router-dom"
import { toast } from "sonner"
import { MailCheck } from 'lucide-react'
import { useEffect, useState } from "react"
import {Loader2} from 'lucide-react'

export default function VerifyEmailPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsVerified(true)
        toast.success("Email verified successfully!")
      } catch (error) {
        toast.error("Failed to verify email")
      } finally {
        setIsLoading(false)
      }
    }

    if (token) {
      verifyEmail()
    } else {
      setIsLoading(false)
    }
  }, [token])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-8 text-center"
      >
        {isLoading ? (
          <div className="flex flex-col items-center">
            <Loader2 className="w-12 h-12 animate-spin text-teal-600" />
            <p className="mt-4 text-slate-600">Verifying your email...</p>
          </div>
        ) : isVerified ? (
          <>
            <MailCheck className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-800 mb-2">
              Email Verified!
            </h1>
            <p className="text-slate-600 mb-6">
              Your email has been successfully verified. You can now sign in to your account.
            </p>
            <Button 
              className="w-full bg-teal-600 hover:bg-teal-700"
              onClick={() => navigate("/login")}
            >
              Go to Sign In
            </Button>
          </>
        ) : (
          <>
            <MailCheck className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-800 mb-2">
              Verification Failed
            </h1>
            <p className="text-slate-600 mb-6">
              The verification link is invalid or has expired.
            </p>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up Again
            </Button>
          </>
        )}
      </motion.div>
    </div>
  )
}