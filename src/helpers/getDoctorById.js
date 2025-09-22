export default async function getDoctorById(id) {
    
    try {
        const response = await fetch("https://misalud.runasp.net/api/Doctor/GetDoctorsById/" + id);
        const result = await response.json();

        if (!response.ok) {
            return null;
        }

        return result.data;
    }catch (errors) {
        console.error("Error fetching data:", errors.message);
    }
}