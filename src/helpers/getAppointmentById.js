export default async function getAppointmentById(id) {
    try {
        const response = await fetch("https://misalud.runasp.net/api/MedicalAppointment/GetMedicalAppointmentById/" + id);
        const result = await response.json();

        if (!response.ok) {
            return null;
        }

        return result.data;
    }catch (errors) {
        console.error("Error fetching data:", errors.message);
    }
}