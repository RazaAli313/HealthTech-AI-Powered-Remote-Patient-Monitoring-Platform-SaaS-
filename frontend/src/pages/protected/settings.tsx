'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { User, Lock, Bell, Shield } from 'lucide-react'
import  {useState} from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 mb-6">Account Settings</h1>
        
        <Tabs defaultValue="profile">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Privacy
            </TabsTrigger>
          </TabsList>
          
          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex items-center gap-2">
                    <Input id="email" type="email" defaultValue="john@example.com" />
                    <Button variant="outline">Verify</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" defaultValue="1985-06-15" />
                </div>
                <div className="pt-4">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Security Tab */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Password</Label>
                  <div className="flex items-center gap-2">
                    <Input type="password" value="••••••••" disabled />
                    <Button variant="outline">Change</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Label>Two-Factor Authentication</Label>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">SMS Authentication</h4>
                      <p className="text-sm text-slate-500">Verified (+1 ••• ••• 4567)</p>
                    </div>
                    <Switch checked={true} />
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Authenticator App</h4>
                      <p className="text-sm text-slate-500">Not set up</p>
                    </div>
                    <Switch checked={false} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Recent Devices</Label>
                  <div className="space-y-2">
                    {[
                      { device: 'iPhone 13', location: 'Boston, MA', lastUsed: '2 hours ago', current: true },
                      { device: 'MacBook Pro', location: 'Boston, MA', lastUsed: '1 day ago', current: false },
                      { device: 'iPad Pro', location: 'New York, NY', lastUsed: '1 week ago', current: false }
                    ].map((item) => (
                      <div key={item.device} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{item.device}</h4>
                          <p className="text-sm text-slate-500">
                            {item.location} • {item.lastUsed}
                            {item.current && <span className="text-teal-600 ml-2">(Current)</span>}
                          </p>
                        </div>
                        <Button variant="ghost" className="text-rose-600">Sign out</Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-4">
                  <div>
                    <Label htmlFor="notifications">Enable Notifications</Label>
                    <p className="text-sm text-slate-500">
                      Receive alerts about appointments and health updates
                    </p>
                  </div>
                  <Switch 
                    id="notifications" 
                    checked={notificationsEnabled} 
                    onCheckedChange={setNotificationsEnabled}
                  />
                </div>
                
                {notificationsEnabled && (
                  <>
                    <div className="space-y-4">
                      <Label>Notification Methods</Label>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-slate-500">
                            Send notifications to john@example.com
                          </p>
                        </div>
                        <Switch 
                          checked={emailNotifications} 
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">SMS Notifications</h4>
                          <p className="text-sm text-slate-500">
                            Send notifications to +1 (555) 123-4567
                          </p>
                        </div>
                        <Switch 
                          checked={smsNotifications} 
                          onCheckedChange={setSmsNotifications}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Label>Notification Types</Label>
                      <div className="space-y-2">
                        {[
                          { name: 'Appointment Reminders', enabled: true },
                          { name: 'Prescription Refills', enabled: true },
                          { name: 'Test Results', enabled: false },
                          { name: 'Health Tips', enabled: true }
                        ].map((item) => (
                          <div key={item.name} className="flex items-center justify-between p-3 border rounded-lg">
                            <span>{item.name}</span>
                            <Switch checked={item.enabled} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                
                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Privacy Tab */}
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Data Sharing</Label>
                  <div className="space-y-2">
                    {[
                      { 
                        name: 'Share data with healthcare providers', 
                        description: 'Allow your doctors to access your medical records',
                        enabled: true
                      },
                      { 
                        name: 'Share data for research', 
                        description: 'Contribute anonymized data to medical research',
                        enabled: false
                      },
                      { 
                        name: 'Show profile in doctor search', 
                        description: 'Allow doctors to find you for consultations',
                        enabled: true
                      }
                    ].map((item) => (
                      <div key={item.name} className="flex items-start justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-slate-500">{item.description}</p>
                        </div>
                        <Switch 
                          checked={item.enabled} 
                          className="mt-1"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Download Your Data</Label>
                  <p className="text-sm text-slate-500">
                    Request a copy of all your personal data stored in our systems
                  </p>
                  <Button variant="outline">Request Data Export</Button>
                </div>
                
                <div className="space-y-2">
                  <Label>Delete Account</Label>
                  <p className="text-sm text-slate-500">
                    Permanently delete your account and all associated data
                  </p>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}