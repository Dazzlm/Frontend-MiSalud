import styles from "./InfoPatient.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect,useState  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailsPatient from "./details-patient/DetailsPatient";
import ButtonGroup from "./button-group/ButtonGroup";
import iconAdministracion from "../../assets/images/administracion.png";
import { useMiSaludStore } from "../../zustand/miSaludStore";
import Swal from "sweetalert2";

async function getPatientByCC(cc) {
    
    try {
        const response = await fetch("http://localhost:5256/api/Patient/GetPatientByCedula/" + cc);
        const result = await response.json();

        if (!response.ok) {
            return null;
        }

        return result.data;
    }catch (errors) {
        console.error("Error fetching data:", errors.message);
    }
}

export default function InfoPatient() {
    const [patient, setPatient] = useState(undefined);
    const setCardTitle = useMiSaludStore((state) => state.setCardTitle);
    const navigate = useNavigate();
    const { cc } = useParams();
  
    useEffect(() => {
      async function fetchData() {
        const data = await getPatientByCC(cc);
        
        if (data) {
          setPatient(data);
        }

        if (data === null) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Paciente no encontrado!',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#28BBC9',
            });
            setPatient(undefined);
            navigate("/ManageAgenda");
        }

      }
      setCardTitle({
        infoCard: {
          title: "Administración",
          subtitle: "Gestionar Agenda",
          icon: iconAdministracion,
          bgColor: "transparent",
        },
      });
      fetchData();
    }, [cc]);
  
    if (patient === undefined || patient === null) {
        
        return <CircularProgress/>;
    }

    return (
      <div className={styles["info__patient"]}>
        <DetailsPatient patient={patient} />
        <ButtonGroup idPatient={patient.idPaciente} />
      </div>
    );
  }