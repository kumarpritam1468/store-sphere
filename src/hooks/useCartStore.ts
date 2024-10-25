// import { currentCart } from '@wix/ecom';
import { create } from 'zustand'
import { WixClient } from '../context/WixContext';

type cartState = {
    cart: any;
    isLoading: boolean;
    counter: number;
    getCart: (wixClient: WixClient) => void;
    addItem: (wixClient: WixClient, productId: string, variantId: string, quantity: number) => void;
    removeItem: (wixClient: WixClient, itemId: string) => void;
}

const useCartStore = create<cartState>((set) => ({
    cart: [],
    isLoading: true,
    counter: 0,
    getCart: async (wixClient) => {
        try {
            const cart = await wixClient.currentCart.getCurrentCart();
            set({
                cart: cart || [],
                isLoading: false,
                counter: cart?.lineItems.length || 0,
            });
        } catch (err) {
            set((prev) => ({ ...prev, isLoading: false }));
        }
    },
    addItem: async (wixClient, variantId, productId, quantity) => {
        set((prev) => ({ ...prev, isLoading: true }));
        const response = await wixClient.currentCart.addToCurrentCart({
            lineItems: [
                {
                    catalogReference: {
                        appId: process.env.NEXT_PUBLIC_WIX_CART_APP_ID!,
                        catalogItemId: productId,
                        ...(variantId && { options: { variantId } })
                    },
                    quantity: quantity
                }
            ]
        });

        set({
            cart: response.cart,
            isLoading: false,
            counter: response.cart?.lineItems.length
        });
    },
    removeItem: async (wixClient, itemId) => {
        set((prev) => ({ ...prev, isLoading: true }));
        const response = await wixClient.currentCart.removeLineItemsFromCurrentCart([itemId]);

        set({
            cart: response.cart,
            isLoading: false,
            counter: response.cart?.lineItems.length
        });
    },
}));

export default useCartStore;