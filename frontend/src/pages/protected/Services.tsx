
'use client'

import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { HeartPulse, Stethoscope, BrainCircuit, ShieldPlus, Activity, Pill } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: <HeartPulse className="w-8 h-8 text-teal-600" />,
    title: "AI-Powered Diagnostics",
    description: "Our advanced AI analyzes your symptoms and medical history to provide accurate preliminary diagnoses.",
    features: [
      "Instant symptom analysis",
      "Personalized health insights",
      "24/7 availability"
    ]
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    title: "Virtual Consultations",
    description: "Connect with board-certified doctors through secure video calls from anywhere.",
    features: [
      "No waiting rooms",
      "Prescription delivery",
      "Follow-up scheduling"
    ]
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-indigo-600" />,
    title: "Mental Health Support",
    description: "Comprehensive mental wellness programs with licensed therapists and AI mood tracking.",
    features: [
      "Cognitive behavioral therapy",
      "Stress management",
      "Anonymous support groups"
    ]
  },
  {
    icon: <ShieldPlus className="w-8 h-8 text-emerald-600" />,
    title: "Preventive Care",
    description: "Proactive health monitoring to catch potential issues before they become problems.",
    features: [
      "Health risk assessments",
      "Personalized wellness plans",
      "Biometric tracking"
    ]
  },
  {
    icon: <Activity className="w-8 h-8 text-amber-600" />,
    title: "Chronic Disease Management",
    description: "Specialized programs for diabetes, hypertension, and other chronic conditions.",
    features: [
      "Remote monitoring",
      "Medication management",
      "Nutrition planning"
    ]
  },
  {
    icon: <Pill className="w-8 h-8 text-purple-600" />,
    title: "Pharmacy Integration",
    description: "Seamless medication management with our partner pharmacies.",
    features: [
      "Auto-refills",
      "Price comparisons",
      "Home delivery"
    ]
  }
];

export default function Services() {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
     
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Comprehensive <span className="text-teal-600">Healthcare</span> Services
        </h1>
        <p className="text-lg text-slate-600">
          We combine cutting-edge technology with compassionate care to deliver exceptional medical services.
        </p>
      </motion.section>


      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full bg-white border border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="items-center">
                <div className="p-4 bg-teal-50 rounded-full">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-center text-slate-800">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round"  strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

     
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Experience Better Healthcare?
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of patients who trust us with their health and wellness.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-teal-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold" onClick={()=>navigate("/appointment")}>
            Book an Appointment
          </Button>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
            Speak to Our Team
          </Button>
        </div>
      </motion.section>
    </div>
  );
}