import { products, collections } from "@wix/stores";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { cookies } from "next/headers";


export const myWixClientServer = async () => {
    let refreshToken;
    try {
        const cookieStore = cookies();
        refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
    } catch (e) {};

    const myWixClient = createClient({
        modules: {
            products,
            collections
            // currentCart,
        },
        auth: OAuthStrategy({
            clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID || "",
            tokens: {
                refreshToken,
                accessToken: {
                    value: "",
                    expiresAt: 0
                }
            },
        }),
    });

    return myWixClient;
}