
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./views/menu/MainLayout";
import CardGroupButton from "./components/cards/card-group-button/CardGroupButton";
import FormPatient from "./components/create-patient/FormPatient.jsx";
import CardSearch from "./components/cards/card-search/CardSearch";
import InfoPatient from './components/info-patient/InfoPatient';
import ScheduleAppointment from "./views/appointment/schedule-appointment/ScheduleAppointment";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CardGroupButton />} />
          <Route path="/CreateNotification" element={<p>Test New Notification</p>} />
          <Route path="/ManageAgenda" element={<CardSearch/>} />
          <Route path="/CreatePatient" element={<FormPatient/>}/>
          <Route path="/InfoPatient/:cc"  element={<InfoPatient/>}/>
          <Route path="/ScheduleAppointment/:cc" element={<ScheduleAppointment/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App
