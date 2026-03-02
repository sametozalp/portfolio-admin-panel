import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../layouts/AdminDashboard";
import LoginPage from "../pages/LoginPage";

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />  
        <Route path="/login" element={<LoginPage />} />  
        <Route path="/admin/*" element={<AdminDashboard />} />
    </Routes>
  )
}
