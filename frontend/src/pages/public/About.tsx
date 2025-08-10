'use client'

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import Team from '../../components/Team.tsx';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <Card className="border border-slate-200 shadow-sm overflow-hidden">
          <CardHeader>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <CardTitle className="text-3xl font-bold text-teal-700">Health AI</CardTitle>
              <CardDescription className="text-lg text-slate-400 mt-2">
                Health Tech is an AI powered SAAS platform for remote patient management and advanced healthcare solutions.
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex-1"
              >
                <p className="text-slate-300 text-lg leading-relaxed">
                  This is a SaaS-based HealthTech platform that leverages AI (LLMs + RAG) to monitor patient health remotely, 
                  provide intelligent recommendations, manage electronic health records (EHR), and enable seamless doctor-patient 
                  interactions through chat and video consultations. Our platform combines cutting-edge technology with medical 
                  expertise to deliver personalized healthcare solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex-1"
              >
                <Link to="https://healthai.agency/">
                  <img 
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=80" 
                    alt="Healthcare platform"
                    className="rounded-lg shadow-md w-full h-auto object-cover hover:shadow-lg transition-shadow"
                  />
                </Link>
              </motion.div>
            </div>
          </CardContent>

          <CardFooter>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-slate-500 text-sm"
            >
              Founded in 2025 (Lahore, Pakistan) | Certified Healthcare Technology Provider
            </motion.p>
          </CardFooter>
        </Card>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Our Team</h1>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Meet the dedicated professionals behind our innovative healthcare solutions
          </p>
          <Team />
        </motion.div>
      </motion.div>
    </div>
  );
}