export default async function getAppointmentByPatientCC(cc) {
    try {
        const response = await fetch("https://misalud.runasp.net/api/MedicalAppointment/GetMedicalAppointmentsByCedula/" + cc);
        const result = await response.json();

        if (!response.ok) {
            return null;
        }

        return result.data;
    }catch (errors) {
        console.error("Error fetching data:", errors.message);
    }
}