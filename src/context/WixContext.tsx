"use client"

import { createClient, OAuthStrategy } from "@wix/sdk";
// import { availabilityCalendar, services } from "@wix/bookings";
import { products, collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import Cookies from "js-cookie";
import { createContext, ReactNode } from "react";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const myWixClient = createClient({
    modules: {
        products,
        collections,
        currentCart
    },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "",
        tokens: {
            refreshToken,
            accessToken:{
                value:"",
                expiresAt:0
            }
        },
    }),
});

export type WixClient = typeof myWixClient;

export const WixContext = createContext<WixClient>(myWixClient);

export const WixContextProvider = ({children}:{children:ReactNode}) => {
    return (
        <WixContext.Provider value={myWixClient} >
            {children}
        </WixContext.Provider>
    )
}