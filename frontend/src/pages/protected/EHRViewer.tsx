'use client'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  FileText,
  HeartPulse, 
  Pill,
  AlertTriangle,
  ClipboardList,
  FileSearch
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const conditions = [
  { id: 1, name: "Hypertension", diagnosed: "15/03/2022", status: "Active" },
  { id: 2, name: "Type 2 Diabetes", diagnosed: "22/07/2020", status: "Managed" },
  { id: 3, name: "Hyperlipidemia", diagnosed: "05/11/2021", status: "Controlled" }
]

const medications = [
  { id: 1, name: "Lisinopril", dosage: "10mg", frequency: "Once daily", prescribed: "Dr. Johnson" },
  { id: 2, name: "Metformin", dosage: "500mg", frequency: "Twice daily", prescribed: "Dr. Chen" },
  { id: 3, name: "Atorvastatin", dosage: "20mg", frequency: "At bedtime", prescribed: "Dr. Johnson" }
]

const allergies = [
  { id: 1, name: "Penicillin", reaction: "Rash", severity: "Moderate" },
  { id: 2, name: "Sulfa drugs", reaction: "Difficulty breathing", severity: "Severe" }
]

export default function EHRViewer() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-2xl font-bold text-slate-800"
          >
            Electronic Health Records
          </motion.h1>
          <Button variant="outline" className="gap-2">
            <FileSearch className="w-4 h-4" />
            Download Full Record
          </Button>
        </div>

        <Tabs defaultValue="conditions" className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <TabsList className="grid w-full grid-cols-4 bg-slate-100">
              <TabsTrigger value="conditions" className="gap-2">
                <HeartPulse className="w-4 h-4" />
                Conditions
              </TabsTrigger>
              <TabsTrigger value="medications" className="gap-2">
                <Pill className="w-4 h-4" />
                Medications
              </TabsTrigger>
              <TabsTrigger value="allergies" className="gap-2">
                <AlertTriangle className="w-4 h-4" />
                Allergies
              </TabsTrigger>
              <TabsTrigger value="reports" className="gap-2">
                <ClipboardList className="w-4 h-4" />
                Reports
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <TabsContent value="conditions">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HeartPulse className="w-5 h-5 text-rose-500" />
                    Medical Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Condition</TableHead>
                        <TableHead>Diagnosed</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {conditions.map((condition) => (
                        <TableRow key={condition.id}>
                          <TableCell className="font-medium">{condition.name}</TableCell>
                          <TableCell>{condition.diagnosed}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              condition.status === 'Active' 
                                ? 'bg-rose-100 text-rose-800' 
                                : condition.status === 'Managed' 
                                  ? 'bg-amber-100 text-amber-800' 
                                  : 'bg-teal-100 text-teal-800'
                            }`}>
                              {condition.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="text-teal-600">
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="medications">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-blue-500" />
                    Current Medications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Medication</TableHead>
                        <TableHead>Dosage</TableHead>
                        <TableHead>Frequency</TableHead>
                        <TableHead>Prescribed By</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {medications.map((med) => (
                        <TableRow key={med.id}>
                          <TableCell className="font-medium">{med.name}</TableCell>
                          <TableCell>{med.dosage}</TableCell>
                          <TableCell>{med.frequency}</TableCell>
                          <TableCell>{med.prescribed}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="allergies">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Allergies & Reactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Allergen</TableHead>
                        <TableHead>Reaction</TableHead>
                        <TableHead>Severity</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {allergies.map((allergy) => (
                        <TableRow key={allergy.id} className={allergy.severity === 'Severe' ? 'bg-rose-50' : ''}>
                          <TableCell className="font-medium">{allergy.name}</TableCell>
                          <TableCell>{allergy.reaction}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              allergy.severity === 'Severe' 
                                ? 'bg-rose-100 text-rose-800' 
                                : 'bg-amber-100 text-amber-800'
                            }`}>
                              {allergy.severity}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-indigo-500" />
                    Lab Reports & Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ y: -5 }}
                        className="border rounded-lg p-4 bg-white hover:shadow-md transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-indigo-100 rounded-lg">
                            <FileText className="w-5 h-5 text-indigo-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">Blood Test Report {item}</h4>
                            <p className="text-sm text-slate-500">15/0{3+item}/2023</p>
                            <div className="flex gap-2 mt-3">
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                              <Button variant="ghost" size="sm" className="text-indigo-600">
                                Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>
      </motion.div>
    </div>
  )
}