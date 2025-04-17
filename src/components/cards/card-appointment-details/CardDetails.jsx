import styles from "./CardDetails.module.css";

export default function CardDetails({patientInfo, appointmentInfo}) {
    return(
    <div className={styles["card__cita"]}>
          <h2 className={styles["card__appointment--title"]}>Control</h2>
      <div className={styles["card__appointment--info"]}>
        <p><strong>Nombre:</strong> {patientInfo.firstName}</p>
        <p><strong>Apellido:</strong> {patientInfo.lastName}</p>
        <p><strong>Edad:</strong> {patientInfo.age}</p>
        <p><strong>Cedula:</strong> {patientInfo.id}</p>
        <p><strong>Telefono:</strong> {patientInfo.phone}</p>

        <br />
        <p><strong>Informacion de la cita:</strong></p>
        <p><strong>Descripcion</strong> {appointmentInfo.description}</p>
        <p><strong>Fecha cita:</strong> {appointmentInfo.date}</p>
        <p><strong>Hora</strong> {appointmentInfo.time}</p>
        <p><strong>Medico:</strong> {appointmentInfo.doctor}</p>
        <p> {appointmentInfo.location}</p>
      </div>
    </div>
    );
}