
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./views/menu/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/notification" element={<p>Test notification</p>} />
          <Route path="/patient" element={<p>Test patient</p>} />
          <Route path="/administracion" element={<p>Test administracion</p>} />
          <Route path="/agenda" element={<p>Test agenda</p>} />
          <Route path="/crearcita" element={<p>Test crearcita</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App
