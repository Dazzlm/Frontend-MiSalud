export default async function getAppointmentByPatientCC(cc) {
    try {
        const response = await fetch("http://localhost:5256/api/MedicalAppointment/GetMedicalAppointmentsByCedula/" + cc);
        const result = await response.json();

        if (!response.ok) {
            return null;
        }

        return result.data;
    }catch (errors) {
        console.error("Error fetching data:", errors.message);
    }
}