import './App.css'
import Navbar from './components/layouts/Navbar.tsx'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/public/Home.tsx'
import About from './pages/public/About.tsx'
import Contact from './pages/public/Contact.tsx'
import { ThemeProvider } from "./components/layouts/theme-provider.tsx"
import Footer from './components/layouts/Footer.tsx'
import VideoConference from './pages/protected/VideoConsultation.tsx'
import Services from './pages/protected/Services.tsx'
// import { AnimatedRoute } from '@/components/animated/animated-route.tsx'

import Stripe from './pages/protected/Stripe.tsx'
import AdminDashboard from './pages/protected/AdminDashboard.tsx'
import PatientDashboard from './pages/protected/PatientDashboard.tsx'
import DoctorDashboard from './pages/protected/DoctorDashboard.tsx'
import AIAssistant from './pages/protected/AIAssistant.tsx'
import EHRViewer from './pages/protected/EHRViewer.tsx'
import Login from './pages/public/auth/Login.tsx'
import Signup from './pages/public/auth/Signup.tsx'
import ResetPasswordPage from './pages/public/auth/reset-password.tsx'
import VerifyEmailPage from './pages/public/auth/verify-email.tsx'
import ForgotPasswordPage from './pages/public/auth/forgot-password.tsx'
import AlertsManagementPage from './pages/public/auth/admin-alerts.tsx'
import AddPatientsPage from './pages/public/auth/addPatient.tsx'
import AddDoctorsPage from './pages/public/auth/addDoctor.tsx'
import SettingsPage from './pages/protected/settings.tsx'




function App() {

  return (
    <>
     
      <Navbar></Navbar>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <main>
    <Routes>   
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/appointment" element={<VideoConference></VideoConference>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/pay" element={<Stripe></Stripe>}></Route>
        <Route path="/admin" element={<AdminDashboard></AdminDashboard>}></Route>
        <Route path="/patient" element={<PatientDashboard></PatientDashboard>}></Route>
        <Route path="/doctor" element={<DoctorDashboard></DoctorDashboard>}></Route>
        <Route path="/ehr" element={<EHRViewer></EHRViewer>}></Route>
        <Route path="/ai" element={<AIAssistant></AIAssistant>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Signup></Signup>}></Route>
        <Route path="/verify-email" element={<VerifyEmailPage></VerifyEmailPage>}></Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage></ForgotPasswordPage>}></Route>
        <Route path="/reset-password" element={<ResetPasswordPage></ResetPasswordPage>}></Route>
        <Route path="/admin/alerts" element={<AlertsManagementPage></AlertsManagementPage>}></Route>
        <Route path="admin/doctors" element={<AddDoctorsPage></AddDoctorsPage>}></Route>
        <Route path="/admin/patients" element={<AddPatientsPage></AddPatientsPage>}></Route>
        <Route path="/settings" element={<SettingsPage></SettingsPage>}></Route>

      
     </Routes>
   
     
    </main>

   
      </ThemeProvider>
        <Footer></Footer>
    {/* <Footer></Footer> */}

    </>
  )
}

export default App
