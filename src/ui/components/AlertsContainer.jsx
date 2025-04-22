import { useState, useEffect, useContext } from "react";

import { AlertsContext } from "../../context";

import { Alert } from "./Alert";

export const AlertsContainer = () => {

    const { alertsArr } = useContext(AlertsContext)

    return (
        <div className="absolute right-0 pr-2 pt-2 min-w-1/4 max-h-2/3 flex flex-col gap-3 overflow-hidden">
            {alertsArr?.map((alert, index) => (
                <Alert key={index} {...alert} />
            ))}
        </div>
    )
}