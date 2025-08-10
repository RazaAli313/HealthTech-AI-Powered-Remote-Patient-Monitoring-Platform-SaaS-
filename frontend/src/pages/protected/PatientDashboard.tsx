'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Activity, 
  HeartPulse, 
  Thermometer, 
  Droplets,
  Calendar,
  MessageSquare,
  Bell
} from 'lucide-react'
import { useNavigate } from "react-router-dom"
import { LineChart } from "@/components/charts/line-chart"

const vitalsData = [
  { name: 'Mon', heartRate: 72, temp: 36.6, oxygen: 98 },
  { name: 'Tue', heartRate: 75, temp: 36.7, oxygen: 97 },
  { name: 'Wed', heartRate: 78, temp: 36.8, oxygen: 96 },
  { name: 'Thu', heartRate: 80, temp: 37.0, oxygen: 98 },
  { name: 'Fri', heartRate: 76, temp: 36.9, oxygen: 97 },
  { name: 'Sat', heartRate: 74, temp: 36.7, oxygen: 98 },
  { name: 'Sun', heartRate: 72, temp: 36.6, oxygen: 99 },
]

export default function PatientDashboard() {
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
            Health Dashboard
          </motion.h1>
          <Button 
            variant="outline"
            className="gap-2"
            onClick={() => navigate("/ai-assistant")}
          >
            <MessageSquare className="w-4 h-4" />
            AI Assistant
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
              <CardTitle className="text-sm font-medium text-slate-600">Heart Rate</CardTitle>
              <HeartPulse className="h-4 w-4 text-rose-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">72</div>
              <p className="text-xs text-slate-500">bpm, normal</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Temperature</CardTitle>
              <Thermometer className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">36.6°C</div>
              <p className="text-xs text-slate-500">normal</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Oxygen</CardTitle>
              <Droplets className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <p className="text-xs text-slate-500">normal</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Activity</CardTitle>
              <Activity className="h-4 w-4 text-teal-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,240</div>
              <p className="text-xs text-slate-500">steps today</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Vitals Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Vitals Overview</CardTitle>
              </CardHeader>
              <CardContent>
              // In your PatientDashboard.tsx
<LineChart 
  data={vitalsData}
  lines={[
    { dataKey: 'heartRate', stroke: '#ef4444', name: 'Heart Rate (bpm)' },
    { dataKey: 'temp', stroke: '#f59e0b', name: 'Temp (°C)' },
    { dataKey: 'oxygen', stroke: '#3b82f6', name: 'Oxygen (%)' }
  ]}
/>              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Appointments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Upcoming</CardTitle>
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
                <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-50">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Annual Checkup</h4>
                    <p className="text-sm text-slate-500">Today, 10:30 AM</p>
                    <p className="text-sm text-slate-500">Dr. Sarah Johnson</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-3 rounded-lg bg-slate-50">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Follow-up</h4>
                    <p className="text-sm text-slate-500">Tomorrow, 2:00 PM</p>
                    <p className="text-sm text-slate-500">Dr. Michael Chen</p>
                  </div>
                </div>
                <Button 
                  className="w-full mt-4 gap-2"
                  onClick={() => navigate("/book-appointment")}
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Health Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-500" />
                <CardTitle className="text-lg">Health Alerts</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 flex items-start gap-3">
                <div className="p-2 bg-amber-100 rounded-full">
                  <Bell className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium">Irregular Heart Rate Detected</h4>
                  <p className="text-sm text-slate-600">
                    Your wearable detected an elevated heart rate yesterday at 3:45 PM. 
                    Consider scheduling a checkup if this persists.
                  </p>
                  <Button 
                    variant="link" 
                    className="text-amber-600 p-0 h-auto mt-2"
                    onClick={() => navigate("/heart-rate-analysis")}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}