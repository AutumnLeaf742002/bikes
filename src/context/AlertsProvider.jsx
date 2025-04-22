import { useState, useRef, useEffect } from "react";
import { AlertsContext } from "./alertsContext";

export const AlertsProvider = ({ children }) => {
    const [alertsArr, setAlertsArr] = useState([]);
    const alertsRef = useRef(alertsArr);

    useEffect(() => {
        alertsRef.current = alertsArr;
    }, [alertsArr]);

    const newAlert = (type, text) => {
        const id = Date.now() + Math.random();
        const newAlert = { id, type, text};

        setAlertsArr((prev) => [...prev, newAlert]);

        setTimeout(() => {

            setAlertsArr(prev => prev.filter(alert => alert.id !== id))
        }, 5000)
    }

    const removeAlert = (id) => {

        setAlertsArr(prev => prev.filter(alert => alert.id !== id))
    }

    return (
        <AlertsContext.Provider value={{ alertsArr, newAlert, removeAlert }}>
            {children}
        </AlertsContext.Provider>
    );
};
