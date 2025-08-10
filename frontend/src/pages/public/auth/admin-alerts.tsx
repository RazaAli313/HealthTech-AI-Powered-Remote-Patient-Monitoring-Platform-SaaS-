'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Bell, Check, Filter, Search, Trash2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import {toast} from 'sonner'

const alerts = [
  {
    id: '1',
    type: 'Critical',
    message: 'Patient John Doe has abnormal heart rate (120bpm)',
    patient: 'John Doe',
    date: '2023-11-15 14:30',
    status: 'Unresolved'
  },
  {
    id: '2',
    type: 'Warning',
    message: 'Patient Sarah Smith missed medication dose',
    patient: 'Sarah Smith',
    date: '2023-11-14 09:15',
    status: 'Resolved'
  },
  {
    id: '3',
    type: 'Critical',
    message: 'High blood pressure detected for Michael Chen',
    patient: 'Michael Chen',
    date: '2023-11-13 18:45',
    status: 'Unresolved'
  },
  {
    id: '4',
    type: 'Info',
    message: 'New patient registration: Emily Wilson',
    patient: 'Emily Wilson',
    date: '2023-11-12 10:20',
    status: 'Resolved'
  }
]

export default function AlertsManagementPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'resolved' | 'unresolved'>('all')
  const [typeFilter, setTypeFilter] = useState<'all' | 'critical' | 'warning' | 'info'>('all')

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.message.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         alert.patient.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || 
                         (statusFilter === 'resolved' && alert.status === 'Resolved') || 
                         (statusFilter === 'unresolved' && alert.status === 'Unresolved')
    const matchesType = typeFilter === 'all' || 
                        alert.type.toLowerCase() === typeFilter.toLowerCase()
    
    return matchesSearch && matchesStatus && matchesType
  })

  const resolveAlert = (id: string) => {
    // API call to resolve alert would go here
    toast.success(`Alert ${id} marked as resolved`)
  }

  const deleteAlert = (id: string) => {
    // API call to delete alert would go here
    toast.success(`Alert ${id} deleted`)
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Bell className="w-6 h-6 text-rose-500" />
            Alerts Management
          </h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-4 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search alerts..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={statusFilter} onValueChange={(v: any) => setStatusFilter(v)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="unresolved">Unresolved</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={typeFilter} onValueChange={(v: any) => setTypeFilter(v)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Alert Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="info">Informational</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Alerts Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recent Alerts ({filteredAlerts.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAlerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell>
                      <Badge variant="destructive">Some text</Badge>
<Badge variant="destructive">Some text</Badge>

                    </TableCell>
                    <TableCell className="font-medium">{alert.message}</TableCell>
                    <TableCell>{alert.patient}</TableCell>
                    <TableCell>{alert.date}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={alert.status === 'Resolved' ? 'default' : 'secondary'}
                        className={alert.status === 'Resolved' ? 'bg-green-100 text-green-800' : ''}
                      >
                        {alert.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {alert.status === 'Unresolved' && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="h-8 gap-1 text-green-600"
                            onClick={() => resolveAlert(alert.id)}
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span className="sr-only sm:not-sr-only">Resolve</span>
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="h-8 gap-1 text-rose-600"
                          onClick={() => deleteAlert(alert.id)}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span className="sr-only sm:not-sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}