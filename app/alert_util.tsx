'use client';
// AlertBox.tsx
import { motion } from "framer-motion";


type ShowAlertFn = (msg: string, type: "success" | "error") => void;

// Store a reference to your showAlert function (set this from your app root!)
let showAlertRef: ShowAlertFn | null = null;
export function setAlertHandler(fn: ShowAlertFn) {
    showAlertRef = fn;
}

export function onLocalStorageChange(
    key: string,
    message?: string,
    type: "success" | "error" = "success",
    customHandler?: (event: StorageEvent) => void
): () => void {
    const handler = (event: StorageEvent) => {
        if (event.key === key) {
            if (customHandler) {
                customHandler(event);
            } else if (showAlertRef) {
                showAlertRef(message ?? `${key} changed in localStorage!`, type);
            } else {
                alert(message ?? `${key} changed in localStorage!`);
            }
        }
    };

    window.addEventListener("storage", handler);

    // For same-tab changes
    const origSetItem = localStorage.setItem;
    localStorage.setItem = function (...args) {
        origSetItem.apply(this, args);
        if (args[0] === key) {
            handler(new StorageEvent("storage", { key, oldValue: null, newValue: args[1] }));
        }
    };

    // Return unsubscribe
    return () => {
        window.removeEventListener("storage", handler);
        localStorage.setItem = origSetItem;
    };
}

export type AlertType = "success" | "error";

interface AlertBoxProps {
    message: string;
    type?: AlertType; // "success" (green) or "error" (red)
    onClose?: () => void;
}

export function AlertBox({ message, type = "success", onClose }: AlertBoxProps) {
    return (
        <motion.div
            initial={{ x: 64, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 64, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            className={`
        fixed right-6 bottom-6 z-[99] min-w-[260px] max-w-sm px-6 py-4 rounded-xl shadow-xl
        flex items-center gap-3
        ${type === "success"
                    ? "bg-green-50 border-l-8 border-green-400 text-green-900"
                    : "bg-red-50 border-l-8 border-red-400 text-red-900"}
        font-semibold text-base
    `}
        >
            <span className="mr-2 text-2xl">
                {type === "success" ? "✅" : "⛔"}
            </span>
            <span className="flex-1">{message}</span>
            {onClose && (
                <button onClick={onClose} className="ml-3 text-xl text-gray-400 hover:text-gray-600 transition">
                    ×
                </button>
            )}
        </motion.div>
    );
}


// AlertProvider.tsx
import { useState, useCallback } from "react";

export function AlertProvider({ children }: { children: React.ReactNode }) {
    const [alert, setAlert] = useState<{ msg: string; type: AlertType } | null>(null);

    const showAlert = useCallback((msg: string, type: AlertType) => {
        setAlert({ msg, type });
        setTimeout(() => setAlert(null), 3000); // auto-hide after 3s
    }, []);

    // Expose showAlert globally
    setAlertHandler(showAlert);

    return (
        <>
            {children}
            {alert && (
                <AlertBox
                    message={alert.msg}
                    type={alert.type}
                    onClose={() => setAlert(null)}
                />
            )}
        </>
    );
}
