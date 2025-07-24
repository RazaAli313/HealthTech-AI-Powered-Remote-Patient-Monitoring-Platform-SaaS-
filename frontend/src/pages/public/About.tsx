import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Link} from 'react-router-dom'
import Team from '../../components/Team.tsx'

export default function About() {
  return (
      <>
    
    <Card>

  <CardHeader>
    <CardTitle>Health AI</CardTitle>
    <CardDescription>Health Tech is an AI powered SAAS based platform which is used for remote patient management...</CardDescription>
    <CardAction>
      
       
    </CardAction>
  </CardHeader>
  <CardContent>
    <div className="flex ">
      <p>This is a SaaS-based HealthTech platform that leverages AI (LLMs + RAG) to monitor patient health remotely,<br></br> provide intelligent recommendations, manage electronic health records (EHR), and enable doctor-patient interactions through chat and video consultations.<br></br>
       It includes an admin panel, doctor/patient roles, wearable integration,<br></br> health alerts, personalized insights using AI, <br></br>and modern cloud deployment (AWS S3 + EC2 + GitHub Actions).</p>
     <Link to="https://healthai.agency/" >
    
       <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&auto=format&fit=crop&q=60&
       ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3BpdGFsfGVufDB8fDB8fHww" className="photos"></img>
       </Link>
    </div>
  </CardContent>
  <CardFooter>
    <p>Founded in 2025 (Lahore, Pakistan)</p>
  </CardFooter>
</Card>
<div className="text-center">

<h1 className="text-3xl">Our Team</h1>
<Team></Team>
</div>
    </>
  )
}
