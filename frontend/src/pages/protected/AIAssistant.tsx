'use client'
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Bot,  
  Stethoscope,
  Sparkles,
  Loader2
} from 'lucide-react'
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Message = {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI health assistant. How can I help you today?',
      role: 'assistant',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on your medical history, I recommend increasing your water intake.",
        "Your recent vitals look good overall, but I notice your sleep patterns could be improved.",
        "That symptom could be related to several conditions. Would you like me to check your records?",
        "I've analyzed your activity data and suggest adding more cardio exercises."
      ]
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        role: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-slate-400 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="border-0 shadow-none bg-gray-500">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-teal-100 rounded-full">
                <Bot className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <CardTitle className="text-xl">AI Health Assistant</CardTitle>
                <p className="text-sm text-slate-500">
                  Ask questions about your health, symptoms, or medical records
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Chat Messages */}
              <div className="space-y-4 h-[60vh] overflow-y-auto pr-2 text-slate-500">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.role === 'assistant' && (
                        <Avatar className="h-8 w-8 text-slate-500">
                          <AvatarImage src="/ai-avatar.png" />
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${message.role === 'user' 
                          ? 'bg-teal-600 text-white' 
                          : 'bg-white border border-slate-200'}`}
                      >
                        {message.content}
                      </div>
                      {message.role === 'user' && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/user-avatar.png" />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/ai-avatar.png" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="bg-white border border-slate-200 rounded-lg p-4 w-24 flex justify-center">
                      <Loader2 className="w-5 h-5 animate-spin text-teal-600" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="sticky bottom-0 bg-slate-50 pt-4"
              >
                <div className="relative">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about symptoms, medications, or health advice..."
                    className="pr-24 h-12 rounded-lg text-slate-600"
                  />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <Stethoscope className="w-4 h-4" />
                    </Button>
                    <Button
                      type="submit"
                      className="h-8 gap-1"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          Ask
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  AI responses are based on your medical records and general health knowledge.
                  Always consult a doctor for serious concerns.
                </p>
              </motion.form>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}