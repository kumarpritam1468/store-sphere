"use client"

import { WixContext } from "@/context/WixContext"
import { useContext } from "react"

export const useWixClient = () => {
    return useContext(WixContext);
}