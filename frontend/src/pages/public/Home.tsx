'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, HeartPulse, ShieldPlus, BrainCircuit } from 'lucide-react';

export default function Home() {
  const navigate=useNavigate()
  const features = [
    {
      icon: <HeartPulse className="w-8 h-8 text-teal-600" />,
      title: "Personalized Care",
      description: "Tailored health plans designed specifically for your unique needs."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
      title: "Expert Doctors",
      description: "Consult with top medical professionals from around the world."
    },
    {
      icon: <ShieldPlus className="w-8 h-8 text-blue-600" />,
      title: "Preventive Health",
      description: "Proactive monitoring to prevent illness before it starts."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-indigo-600" />,
      title: "AI Diagnostics",
      description: "Cutting-edge AI analysis for accurate health assessments."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
        >
          Your Health, <span className="text-teal-600">Our Commitment</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-slate-600 max-w-3xl mx-auto mb-10"
        >
          Advanced healthcare solutions combining human expertise with AI precision.
        </motion.p>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-6xl mx-auto px-4 mb-20"
      >
        <Carousel 
          plugins={[Autoplay({ delay: 3000 })]}
          className="rounded-2xl shadow-xl overflow-hidden border border-slate-200 bg-white"
        >
          <CarouselContent>
            {[
              "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&auto=format&fit=crop"
            ].map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video">
                  <img
                    src={img}
                    alt={`Healthcare ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="text-white text-left"
                    >
                      <h3 className="text-2xl font-bold mb-2">Exceptional Healthcare Experience</h3>
                      <p className="text-lg">Where technology meets compassionate care</p>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 bg-white/80 hover:bg-white text-teal-600 border-none size-12 shadow-md" />
          <CarouselNext className="absolute right-4 bg-white/80 hover:bg-white text-teal-600 border-none size-12 shadow-md" />
        </Carousel>
      </motion.div>

      
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 mb-24"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Our Approach to Care</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white border border-slate-100 hover:shadow-md transition-all">
                <CardHeader className="items-center pt-8">
                  <div className="p-4 bg-teal-50 rounded-full">
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center px-6 pb-6">
                  <CardTitle className="text-xl mb-2 text-slate-800">{feature.title}</CardTitle>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

     
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 px-4 text-center mb-20"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-6"
          >
            Begin Your Health Journey Today
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8"
          >
            Join our community of patients achieving better health outcomes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              variant="default"
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90 rounded-lg px-8 py-6 text-lg font-semibold shadow-lg"
              onClick={() =>
                toast("Your health report is being prepared", {
                  description: "Our AI is analyzing your data for personalized insights",
                  action: {
                    label: "Track Progress",
                    onClick: () => console.log("Track clicked"),
                  },
                })
              }
            >
              Get Health Analysis
            </Button>
            <Button 
              onClick={()=>navigate("/appointment")}
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg px-8 py-6 text-lg font-semibold"
            >
              Speak to a Doctor
            </Button>
          </motion.div>
        </div>
      </motion.section>

    
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 mb-24"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Patient Experiences</h2>
        <Carousel 
          opts={{ loop: true }}
          className="rounded-lg"
        >
          <CarouselContent>
            {[
              {
                quote: "The AI analysis identified risk factors my regular doctor had missed. Potentially life-saving!",
                author: "Sarah Johnson",
                role: "Cardiology Patient"
              },
              {
                quote: "Virtual consultations saved me hours of travel time without compromising care quality.",
                author: "Michael Chen",
                role: "Diabetes Management"
              },
              {
                quote: "The preventive care program helped me lose 30lbs and reverse my pre-diabetes.",
                author: "Emily Wilson",
                role: "Preventive Care"
              }
            ].map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white border border-slate-100 p-6">
                    <CardContent className="p-0">
                      <div className="text--500 text-4xl mb-4">"</div>
                      <p className="text-slate-700 text-lg mb-6">{testimonial.quote}</p>
                      <div className="flex items-center gap-4">
                        <div className="size-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800">{testimonial.author}</p>
                          <p className="text-sm text-slate-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-white/80 hover:bg-white text-teal-600 border-none size-10 shadow-md" />
          <CarouselNext className="hidden md:flex bg-white/80 hover:bg-white text-teal-600 border-none size-10 shadow-md" />
        </Carousel>
      </motion.section>
    </div>
  );
}