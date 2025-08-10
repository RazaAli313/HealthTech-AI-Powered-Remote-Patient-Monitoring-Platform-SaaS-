'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Users,
  Activity,
  Stethoscope,
  Shield,
  Settings,
  FileText,
  AlertCircle
} from 'lucide-react'
import { BarChart } from "@/components/charts/bar-chart"
import { useNavigate } from "react-router-dom"

const stats = [
  { name: 'Total Users', value: '2,543', icon: Users, change: '+12%', changeType: 'positive' },
  { name: 'Active Doctors', value: '147', icon: Stethoscope, change: '+5%', changeType: 'positive' },
  { name: 'Platform Activity', value: 'High', icon: Activity, change: '3%', changeType: 'neutral' },
  { name: 'Security Alerts', value: '2', icon: Shield, change: '-1', changeType: 'negative' }
]

const recentActivities = [
  { id: 1, user: 'Dr. Sarah Johnson', action: 'Updated patient records', time: '2 mins ago' },
  { id: 2, user: 'System', action: 'Completed nightly backup', time: '1 hour ago' },
  { id: 3, user: 'Admin', action: 'Modified user permissions', time: '3 hours ago' },
  { id: 4, user: 'Michael Chen', action: 'Uploaded lab results', time: '5 hours ago' },
  { id: 5, user: 'System', action: 'Applied security patch', time: '1 day ago' }
]

export default function AdminDashboard() {
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
            Admin Dashboard
          </motion.h1>
          <Button 
            variant="outline"
            className="gap-2"
            onClick={() => navigate("/admin/settings")}
          >
            <Settings className="w-4 h-4" />
            System Settings
          </Button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">{stat.name}</CardTitle>
                  <stat.icon className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${
                    stat.changeType === 'positive' 
                      ? 'text-teal-600' 
                      : stat.changeType === 'negative' 
                        ? 'text-rose-600' 
                        : 'text-slate-500'
                  }`}>
                    {stat.change} {stat.changeType === 'positive' ? '↑' : stat.changeType === 'negative' ? '↓' : ''}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         {/* Analytics */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3 }}
  className="lg:col-span-2"
>
  <Card>
    <CardHeader>
      <CardTitle>Platform Analytics</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-80">
        <BarChart
          data={[
            { name: 'Jan', users: 400, doctors: 240 },
            { name: 'Feb', users: 300, doctors: 139 },
            { name: 'Mar', users: 200, doctors: 980 },
            { name: 'Apr', users: 278, doctors: 390 },
            { name: 'May', users: 189, doctors: 480 },
            { name: 'Jun', users: 239, doctors: 380 },
          ]}
          bars={[
            { dataKey: 'users', name: 'Users', color: '#3b82f6' },
            { dataKey: 'doctors', name: 'Doctors', color: '#10b981' }
          ]}
        />
      </div>
    </CardContent>
  </Card>
</motion.div>
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {recentActivities.slice(0, 3).map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <FileText className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{activity.user}</h4>
                        <p className="text-sm text-slate-500">{activity.action}</p>
                        <p className="text-xs text-slate-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full text-teal-600"
                  onClick={() => navigate("/admin/activity")}
                >
                  View All Activity
                </Button>
              </CardContent>
            </Card>

            {/* Alerts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <Card className="border-rose-100 bg-rose-50">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="flex items-center gap-2 text-rose-800">
                    <AlertCircle className="w-5 h-5" />
                    Security Alerts
                  </CardTitle>
                  <Badge variant="destructive">2 New</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg border border-rose-200">
                      <h4 className="font-medium text-rose-800">Unusual Login Attempt</h4>
                      <p className="text-sm text-rose-600">From new device in Berlin</p>
                      <Button 
                        variant="link" 
                        className="text-rose-600 p-0 h-auto mt-2 text-xs"
                        onClick={() => navigate("/admin/security")}
                      >
                        Review Now
                      </Button>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-rose-300 text-rose-600 hover:bg-rose-100"
                      onClick={() => navigate("/admin/alerts")}
                    >
                      View All Alerts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Admin Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button 
                  variant="outline" 
                  className="h-24 flex-col gap-2"
                  onClick={() => navigate("/admin/users")}
                >
                  <Users className="w-6 h-6" />
                  User Management
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col gap-2"
                  onClick={() => navigate("/admin/doctors")}
                >
                  <Stethoscope className="w-6 h-6" />
                  Doctor Verification
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col gap-2"
                  onClick={() => navigate("/admin/compliance")}
                >
                  <Shield className="w-6 h-6" />
                  Compliance
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex-col gap-2"
                  onClick={() => navigate("/admin/reports")}
                >
                  <FileText className="w-6 h-6" />
                  Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}