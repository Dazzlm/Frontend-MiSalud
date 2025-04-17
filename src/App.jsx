
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./views/menu/MainLayout";
import CardGroupButton from "./components/cards/card-group-button/CardGroupButton";
import CreatePatient from "./components/Patiente";
import RecheduleAppointment from './views/reschedule/Rechedule';
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CardGroupButton />} />
          <Route path="/CreateNotification" element={<p>Test New Notification</p>} />
          <Route path="/ManageAgenda" element={<p>Test manage agenda</p>} />
          <Route path="/RecheduleAppointment" element={<RecheduleAppointment/>} />
          <Route path="/CreatePatient" element={<CreatePatient/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App
