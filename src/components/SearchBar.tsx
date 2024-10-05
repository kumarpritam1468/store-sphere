"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const SearchBar = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("searchItem");

        name && router.push(`list?product=${name}`);
    }

    return (
        <form className=" flex-1 p-2 px-4 flex justify-between items-center rounded-lg bg-gray-200" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search..." name="searchItem" className=" flex-1 bg-transparent outline-none placeholder:text-black" />
            <button className=" cursor-pointer">
                <Image src="/search.png" width={16} height={16} alt="Search" />
            </button>
        </form>
    )
}

export default SearchBar