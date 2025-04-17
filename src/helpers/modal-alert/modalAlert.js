
import Swal from 'sweetalert2';
import styles from "../modal-alert/modalAlert.module.css";

export function modalMessage(titulo ="", mensaje ="", tipo = '') {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: tipo,
    confirmButtonText: '✔',
    confirmButtonColor: '#28BBC9',
    customClass: {
        popup: styles["swal__style"],
        confirmButton: styles['button__confirmar'],
    }
  });
}