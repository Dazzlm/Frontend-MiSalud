import { useEffect } from "react";
import { useMiSaludStore } from "../zustand/miSaludStore.js";
import iconPaciente from "../assets/images/patienticon.png";

export default function CreatePatient() {
  const setCardTitle = useMiSaludStore((state) => state.setCardTitle);

  useEffect(() => {
    setCardTitle({
      infoCard: {
        title: "Paciente",
        subtitle: "Crear paciente",
        icon: iconPaciente,
        bgColor: "white",
      },
    });
  }, []);
  
  return <p>Componente de crear paciente</p>;
}