import { currentCart } from '@wix/ecom';
import { create } from 'zustand'
import { WixClient } from '../context/WixContext';

type cartState = {
    cart: currentCart.Cart;
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
    addItem: async (wixClient) => { },
    removeItem: async (wixClient) => { },
}));

export default useCartStore;