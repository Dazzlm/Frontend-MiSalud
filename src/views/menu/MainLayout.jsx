import { Outlet, useLocation } from "react-router-dom";
import CurrentUser from "../../components/current-user/CurrentUser";
import CardMenuBase from "../../components/cards/card-menu-base/CardMenuBase";
import CardTitle from "../../components/cards/card-title/CardTitle";
import CardSecondary from "../../components/cards/card-secondary/CardSecondary";
import Sidebar from "../../components/sidebar/Sidebar";

import iconAdministracion from "../../assets/images/administracion.png";
import iconPaciente from "../../assets/images/patienticon.png";
import iconAgenda from "../../assets/images/scheduleicon.png";
import style from "./MainLayout.module.css";
export default function MainLayout() {
    const location = useLocation();
    const path = location.pathname.toLowerCase(); // Ej: /admin/pacientes/detalle
  
    let title = "Administración";
    let icon = iconAdministracion;
    let bgColor = "transparent"; // Color de fondo por defecto
    let subtitle = "";
  
    if (path.includes("patient")) {
      title = "Pacientes";
      subtitle = "";
      icon = iconPaciente;
      bgColor = "white";
    } else if (path.includes("notification")) {
      title = "Notificaciones";
      subtitle = "Crear Notificacion";
      icon = iconAdministracion;
      bgColor = "white";
    }else if (path.includes("administracion")) {
        title = "Administración";
        icon = iconAdministracion;
        bgColor = "transparent"; 
    }else if (path.includes("agenda")) {
      title = "Agenda";
      icon = iconAgenda;
      bgColor = "#EDECF4";
    }else if (path.includes("crearcita")|| path.includes("editarcita")) {
        title = "Agenda";
        icon = iconAgenda;
        bgColor = "white";
    }

  return (
    <>
      <CurrentUser />
      <CardMenuBase>
          <CardTitle title={title} subtitle={subtitle} icon={icon} />
          <div className={style["card__menubase--content"]}>
            <Sidebar />
            <CardSecondary bgColor={bgColor}>
              <Outlet />
            </CardSecondary>
          </div>
      </CardMenuBase>
    </>
  );
}
