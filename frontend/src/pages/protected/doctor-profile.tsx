'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, Phone, MapPin, Star, Award, Stethoscope } from 'lucide-react'
import { useParams, useNavigate } from "react-router-dom"

export default function DoctorProfilePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  // Mock data - replace with API call
  const doctor = {
    id: id || '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.8,
    reviews: 124,
    experience: '12 years',
    education: 'MD, Harvard Medical School',
    bio: 'Board-certified cardiologist with extensive experience in preventive cardiology and heart failure management.',
    imageUrl: '/doctors/1.jpg'
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Doctor Info Card */}
          <div className="md:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="w-32 h-32 mb-4">
                    <AvatarImage src={doctor.imageUrl} />
                    <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  
                  <h2 className="text-2xl font-bold">{doctor.name}</h2>
                  <Badge variant="outline" className="text-teal-600">
                    {doctor.specialty}
                  </Badge>
                  
                  <div className="flex items-center text-amber-500">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-1 font-medium">{doctor.rating}</span>
                    <span className="text-slate-500 ml-1">({doctor.reviews} reviews)</span>
                  </div>
                  
                  <div className="w-full space-y-3 text-left">
                    <div className="flex items-center text-slate-600">
                      <Stethoscope className="w-4 h-4 mr-2" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Award className="w-4 h-4 mr-2" />
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Boston General Hospital</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>(617) 555-0123</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>s.johnson@hospital.org</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-6"
                    onClick={() => navigate(`/book-appointment?doctor=${doctor.id}`)}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About Dr. {doctor.name.split(' ')[1]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">{doctor.bio}</p>
              </CardContent>
            </Card>
            
            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle>Specialties & Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Preventive Cardiology',
                    'Heart Failure Management',
                    'Echocardiography',
                    'Stress Testing',
                    'Cardiac Rehabilitation'
                  ].map((specialty) => (
                    <Badge key={specialty} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { day: 'Monday', time: '9:00 AM - 5:00 PM' },
                    { day: 'Wednesday', time: '9:00 AM - 5:00 PM' },
                    { day: 'Friday', time: '10:00 AM - 3:00 PM' }
                  ].map((slot) => (
                    <div key={slot.day} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium">{slot.day}</span>
                      <span className="text-slate-600">{slot.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}