'use client'

import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import UploadModal from "@/components/modals/UploadModal";
import { useEffect, useState } from "react";

const ModalsProvider = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <RegisterModal />
            <LoginModal />
            <UploadModal />
        </>
    )
};
export default ModalsProvider;