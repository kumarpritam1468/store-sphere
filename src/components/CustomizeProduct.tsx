"use client"

import { products } from "@wix/stores";
import AddProduct from "./AddProduct";
import { useState } from "react";

const CustomizeProduct = ({ productId, variants, options }: { productId: string, variants: products.Variant[], options: products.ProductOption[] }) => {
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});

    const handleOptionSelection = (option: string, choice: string) => {
        setSelectedOptions((prev) => ({ ...prev, [option]: choice }));
    }

    const isVariantInStock = (choices: { [key: string]: string }) => {
        return variants.some((variant) => {
            const variantChoices = variant.choices;
            if (!variantChoices) return false;

            return (
                Object.entries(choices).every(
                    ([key, value]) => variantChoices[key] === value
                ) &&
                variant.stock?.inStock &&
                variant.stock?.quantity &&
                variant.stock?.quantity > 0
            );
        });
    };

    return (
        <div className=" flex flex-col gap-6">

            {options.map((option, idx) => (
                <div className=" flex flex-col gap-4" key={idx}>
                    <h4 className="font-medium">Choose {option.name}</h4>
                    <div className=" flex items-center gap-3">
                        {option.choices?.map((choice, idx) => {
                            const disabled = !isVariantInStock({
                                ...selectedOptions,
                                [option.name!]: choice.description!,
                            });

                            const selected =
                                selectedOptions[option.name!] === choice.description;

                            const clickHandler = disabled
                                ? undefined
                                : () => handleOptionSelection(option.name!, choice.description!);
                            return option.name === "Color" ? (
                                <div
                                    className={`w-8 h-8 rounded-full ring-1 ring-gray-300 relative `}
                                    style={{
                                        backgroundColor: choice.description,
                                        cursor: disabled ? 'not-allowed' : 'pointer'
                                    }}
                                    onClick={clickHandler}
                                    key={idx}
                                >
                                    {selected && <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                                    {disabled && <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
                                </div>
                            ) : (
                                <div
                                    className="ring-1 ring-lama text-lama rounded-md py-1 px-4 text-sm"
                                    style={{
                                        cursor: disabled ? "not-allowed" : "pointer",
                                        backgroundColor: selected
                                            ? "#f35c7a"
                                            : disabled
                                                ? "#FBCFE8"
                                                : "white",
                                        color: selected || disabled ? "white" : "#f35c7a",
                                        boxShadow: disabled ? "none" : "",

                                    }}
                                    key={choice.description}
                                    onClick={clickHandler}
                                >
                                    {choice.description}
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}
            {/* <ul className="flex items-center gap-3">
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
                <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500">
                    <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </li>
            </ul> */}
            {/* <h4 className="font-medium">Choose a size</h4>
            <ul className="flex items-center gap-3">
                <li className="ring-1 ring-main-red text-main-red rounded-md py-1 px-4 text-sm cursor-pointer">
                    Small
                </li>
                <li className="ring-1 ring-main-red text-white bg-main-red rounded-md py-1 px-4 text-sm cursor-pointer">
                    Medium
                </li>
                <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
                    Large
                </li>
            </ul> */}

            <AddProduct />
        </div>
    )
}

export default CustomizeProduct;