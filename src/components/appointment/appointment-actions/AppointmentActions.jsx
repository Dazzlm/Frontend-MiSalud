import styles from './AppointmentActions.module.css';

export default function AppointmentActions({ idAppointment }) {

    return (
        <div className={styles["appointment__actions"]}>
            <button className={styles["appointment__actions-btndelete"]}>Eliminar</button>
            <button className={styles["appointment__actions-btnedit"]}> Reprogramar</button>
        </div>
    );
} 