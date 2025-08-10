'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Stethoscope,
  User,
  Calendar,
  ClipboardList,
  MessageSquare,
  AlertTriangle
} from 'lucide-react'
import { useNavigate } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const patients = [
  { id: 1, name: "Sarah Johnson", lastVisit: "2 days ago", condition: "Hypertension", alert: true },
  { id: 2, name: "Michael Chen", lastVisit: "1 week ago", condition: "Diabetes", alert: false },
  { id: 3, name: "Emily Wilson", lastVisit: "3 days ago", condition: "Hyperlipidemia", alert: true },
  { id: 4, name: "David Kim", lastVisit: "2 weeks ago", condition: "Asthma", alert: false }
]

const appointments = [
  { id: 1, patient: "Sarah Johnson", time: "Today, 10:30 AM", type: "Follow-up" },
  { id: 2, patient: "New Patient", time: "Today, 2:00 PM", type: "Consultation" },
  { id: 3, patient: "Michael Chen", time: "Tomorrow, 9:00 AM", type: "Annual Checkup" }
]

export default function DoctorDashboard() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-2xl font-bold text-slate-800"
          >
            Doctor Dashboard
          </motion.h1>
          <Button 
            onClick={() => navigate("/patients/new")}
            className="gap-2"
          >
            <User className="w-4 h-4" />
            New Patient
          </Button>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <Card className="hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Active Patients</CardTitle>
              <User className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-slate-500">+8 this month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Today's Appointments</CardTitle>
              <Calendar className="h-4 w-4 text-teal-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-slate-500">2 completed</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Pending Reviews</CardTitle>
              <ClipboardList className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-slate-500">Lab reports & scans</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-rose-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-slate-500">Require attention</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patient List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Recent Patients</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-teal-600"
                    onClick={() => navigate("/patients")}
                  >
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {patients.map((patient) => (
                    <motion.div
                      key={patient.id}
                      whileHover={{ scale: 1.01 }}
                      className="flex items-center gap-4 p-4 rounded-lg border border-slate-100 hover:shadow-sm cursor-pointer"
                      onClick={() => navigate(`/patients/${patient.id}`)}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/avatars/${patient.id}.jpg`} />
                        <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">{patient.name}</h4>
                        <p className="text-sm text-slate-500 truncate">{patient.condition}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-slate-500">{patient.lastVisit}</p>
                        {patient.alert && (
                          <Badge variant="destructive" className="mt-1">
                            Alert
                          </Badge>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Appointments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Today's Schedule</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-teal-600"
                    onClick={() => navigate("/appointments")}
                  >
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {appointments.map((appt) => (
                  <div 
                    key={appt.id}
                    className="flex items-start gap-4 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer"
                    onClick={() => navigate(`/appointments/${appt.id}`)}
                  >
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Calendar className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{appt.patient}</h4>
                      <p className="text-sm text-slate-500">{appt.time}</p>
                      <Badge variant="outline" className="mt-1">
                        {appt.type}
                      </Badge>
                    </div>
                  </div>
                ))}
                <Button 
                  className="w-full mt-4 gap-2"
                  onClick={() => navigate("/appointments/new")}
                >
                  <Calendar className="w-4 h-4" />
                  New Appointment
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-20 gap-2 flex-col">
                    <Stethoscope className="w-5 h-5" />
                    <span>New Note</span>
                  </Button>
                  <Button variant="outline" className="h-20 gap-2 flex-col">
                    <ClipboardList className="w-5 h-5" />
                    <span>Review Labs</span>
                  </Button>
                  <Button variant="outline" className="h-20 gap-2 flex-col">
                    <MessageSquare className="w-5 h-5" />
                    <span>Messages</span>
                  </Button>
                  <Button variant="outline" className="h-20 gap-2 flex-col">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Alerts</span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}