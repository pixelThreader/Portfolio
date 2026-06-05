"use client";

import { useEffect } from "react";
import { toast } from "sonner";

interface ToastErrorProps {
    message: string;
}

export function ToastError({ message }: ToastErrorProps) {
    useEffect(() => {
        toast.error(message);
    }, [message]);

    return null;
}

export default ToastError;
