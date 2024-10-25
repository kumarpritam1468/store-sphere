import useCartStore from '@/hooks/useCartStore';
import Image from 'next/image';
import { media as wixMedia } from "@wix/sdk";
import { useWixClient } from '@/hooks/useWixClient';

const CartModal = () => {

    const wixClient = useWixClient();

    const { cart, isLoading, removeItem } = useCartStore();

    return (
        <div className=' absolute top-12 right-0 w-max p-4 flex flex-col bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)] rounded-md z-[1000]'>
            {isLoading ? "Loading..." : cart?.lineItems ? (
                <>
                    <h1 className=' text-3xl mb-8'>Cart</h1>
                    <div className=" flex flex-col gap-8">
                        {cart.lineItems.map((item: any, index: number) => (
                            <div className=" flex gap-4" key={index}>
                                {item.image && <Image src={wixMedia.getScaledToFillImageUrl(item.image, 72, 96, {})}
                                    width={72}
                                    height={96}
                                    alt={item.productName?.original!}
                                    className=' object-cover rounded-md'
                                />}

                                <div className="flex flex-col justify-between w-full">
                                    {/* TOP */}
                                    <div className="">
                                        {/* TITLE */}
                                        <div className="flex items-center justify-between gap-8">
                                            <h3 className="font-semibold">
                                                {item.productName?.original}
                                            </h3>
                                            <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                                                {item.quantity && (
                                                    <div className="text-xs text-green-500">
                                                        {item.quantity} x{" "}
                                                    </div>
                                                )}
                                                ₹{item.price?.amount}
                                            </div>
                                        </div>
                                        {/* DESC */}
                                        <div className="text-sm text-gray-500">
                                            available
                                        </div>
                                    </div>
                                    {/* BOTTOM */}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Qty. {item.quantity}</span>
                                        <span
                                            className="text-blue-500 cursor-pointer"
                                            // style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                                            onClick={() => removeItem(wixClient, item._id!)}
                                        >
                                            Remove
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="">
                            <div className="flex items-center justify-between font-semibold">
                                <span className="">Subtotal</span>
                                <span className="">₹{cart?.subtotal?.amount}</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2 mb-4">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <div className="flex justify-between text-sm">
                                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                                    View Cart
                                </button>
                                <button
                                    className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                                // disabled={isLoading}
                                // onClick={handleCheckout}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div>Empty Cart</div>
            )}
        </div>
    )
}

export default CartModal