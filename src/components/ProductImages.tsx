"use client"

import Image from "next/image"
import { useState } from "react"

const ProductImages = () => {
    const [currentImg, setCurrentImg] = useState(0);

    const images = [
        {
            id: 1,
            url: "https://images.pexels.com/photos/27969812/pexels-photo-27969812/free-photo-of-croissant-with-salmon-on-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id: 2,
            url: "https://images.pexels.com/photos/28571321/pexels-photo-28571321/free-photo-of-autumn-church-facade-in-jonkoping-sweden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id: 3,
            url: "https://images.pexels.com/photos/27680936/pexels-photo-27680936/free-photo-of-a-bicycle-parked-in-front-of-a-yellow-building-with-pink-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
        {
            id: 4,
            url: "https://images.pexels.com/photos/26793646/pexels-photo-26793646/free-photo-of-a-corgi-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        },
    ]

    return (
        <div className="">
            <div className=" relative h-[500px]">
                <Image
                    src={images[currentImg].url}
                    fill
                    alt="Product Image"
                    sizes="50vw"
                    className=" object-cover rounded-lg"
                />
            </div>
            <div className=" flex justify-between gap-4">
                {images.map((img, index) => (
                    <div className="w-1/4 relative h-32 gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setCurrentImg(index)}>
                        <Image
                            src={img.url}
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