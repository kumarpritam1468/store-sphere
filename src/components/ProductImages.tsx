"use client"

import Image from "next/image"
import { useState } from "react"

const ProductImages = ({ images }: { images: any }) => {
    const [currentImg, setCurrentImg] = useState(0);

    return (
        <div className="">
            <div className=" relative h-[500px]">
                <Image
                    src={images[currentImg]?.image?.url}
                    fill
                    alt="Product Image"
                    sizes="50vw"
                    className=" object-cover rounded-lg"
                />
            </div>
            <div className=" flex justify-between gap-4">
                {images?.map((img: any, index: number) => (
                    <div className="w-1/4 relative h-32 gap-4 mt-8 cursor-pointer" key={img._id} onClick={() => setCurrentImg(index)}>
                        <Image
                            src={img?.image?.url}
                            fill
                            alt="Product Image"
                            sizes="30vw"
                            className=" object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductImages