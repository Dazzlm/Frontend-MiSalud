import { useEffect } from "react";
import styles from './CardSearch.module.css';
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMiSaludStore } from "../../../zustand/miSaludStore.js";
import iconAdministracion from "../../../assets/images/administracion.png";
export default function CardSearch() {
  const setCardTitle = useMiSaludStore((state) => state.setCardTitle);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
  }

  useEffect(() => {
    setCardTitle({
      infoCard: {
        title: "Administración",
        subtitle: "Gestionar Agenda",
        icon: iconAdministracion,
        bgColor: "transparent",
      },
    });
  }, []);

  return (
    <form className={styles["card__search"]} onSubmit={handleSubmit(onSubmit)} >
      <div className={styles["card__search--container"]}>
        <p className={styles["serch__container--title"]}>Digite la Cedula</p>
          <TextField
            sx={{
              width: "90%",
              '& .MuiInputBase-input': {
                color: "#4D7B80", // texto del input
                fontFamily: "Raleway",
              },
              '& .MuiInputLabel-root': {
                color: "#28BBC9", // label normal
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: "#28BBC9", // label cuando está enfocado
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: "#28BBC9", // borde normal
                borderWidth: 2,
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: "#28BBC9", // borde cuando enfocado
              },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: "#4D7B80", // borde cuando pasa el mouse (hover)
              },
            }}
            required
            label="CC"
            {...register("cc",{
              required: "La cedula es obligatoria",
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },})}
            error={errors.cc}
            helperText={errors.cc?.message }
          />
      </div>
          <button  className={styles["card__search--button"]} id="BtnSubmit" type="submit">Buscar Paciente</button>
    </form>
  );
}