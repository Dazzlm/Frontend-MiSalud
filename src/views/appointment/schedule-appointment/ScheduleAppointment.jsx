import styles from "./ScheduleAppointment.module.css";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import iconSchedule from "../../../assets/images/scheduleicon.png";
import { useMiSaludStore } from "../../../zustand/miSaludStore.js"
import getAppointmentByPatientCC from "../../../helpers/getAppointmentByPatientCC.js";
import CircularProgress from '@mui/material/CircularProgress';
import ScheduleEmpty from "../../../components/schedule-empty/ScheduleEmpty.jsx";

export default function ScheduleAppointment() { 
    const {cc} = useParams();
    const setCardTitle = useMiSaludStore((state) => state.setCardTitle);
    const [appointment, setAppointment] = useState(undefined);
    const [selectedAppointment, setSelectedAppointment] = useState(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAppointmentByPatientCC(cc);
            
            if (data === null) {
                setAppointment(null);
                return;
            }
            setAppointment(data);

        };

        fetchData();

        setCardTitle({
            infoCard: {
            title: "Agenda",
            subtitle: "",
            icon: iconSchedule,
            bgColor: "#EDECF4",
            },
        });
    }, []);

    useEffect(() => {
        
    }, [selectedAppointment]);

    if (appointment === undefined ) {
        return <CircularProgress/>;
    }

    if (appointment === null ) {
        return <ScheduleEmpty/>;
    }

    return <div className={styles["schedule__appointment--container"]}>

    </div>;
}