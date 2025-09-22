
export default async function getPatientByCC(cc) {
    
    try {
        const response = await fetch("https://misalud.runasp.net/api/Patient/GetPatientByCedula/" + cc);
        const result = await response.json();

        if (!response.ok) {
            return null;
        }

        return result.data;
    }catch (errors) {
        console.error("Error fetching data:", errors.message);
    }
}