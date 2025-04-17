import { useEffect } from "react";
import { useMiSaludStore } from "../../zustand/miSaludStore.js";
import scheduleIcon from "../../assets/images/scheduleicon.png"

export default function RecheduleAppointment() {
    const setCardTitle = useMiSaludStore((state) => state.setCardTitle);

    useEffect(() => {
        setCardTitle({
            infoCard: {
                title: "Reprogramar",
                subtitle: "",
                icon : scheduleIcon,
                bgColor: "white",
            },
        });
    }, [setCardTitle]);

    return <p>
        
    </p>

}