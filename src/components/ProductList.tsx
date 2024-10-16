import { myWixClientServer } from "@/lib/wixClientServer"
// import { products } from "@wix/stores";
import Image from "next/image"
import Link from "next/link"
import Pagination from "./Pagination";

const ProductList = async ({ categoryId, limit, searchParams }: { categoryId: string, limit?: number, searchParams?: any }) => {
    const wixClient = await myWixClientServer();

    let res;

    const filterQueries = wixClient.products
        .queryProducts()
        .startsWith("name", searchParams?.name || "")
        .hasSome("productType", searchParams?.type ? [searchParams.type] : ["physical", "digital"])
        .gt("priceData.price", searchParams?.min || 0)
        .lt("priceData.price", searchParams?.max || 20000)
        .eq("collectionIds", categoryId)
        .limit(limit || 4)
        .skip(searchParams?.page ? searchParams.page * (limit || 4) : 0);

    if (searchParams?.sort) {
        const [sortType, sortBy] = searchParams.sort.split(" ");

        if (sortType === "asc") {
            res = await filterQueries.ascending(sortBy).find();
        }
        if (sortType === "desc") {
            res = await filterQueries.descending(sortBy).find();
        }
    } else {
        res = await filterQueries.find();
    }

    return (
        <div className=" mt-12 flex gap-y-16 gap-x-8 flex-wrap justify-center">
            {res?.items.map((product) => (

                <Link href={`/${product.slug}`} className=" w-full sm:w-[45%] lg:w-[22%] flex flex-col gap-4" key={product._id} >
                    <div className=" relative w-full h-80">
                        <Image
                            src={product.media?.mainMedia?.image?.url || "/demo.jpg"}
                            alt="Product X"
                            fill
                            sizes="25vw"
                            className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-all duration-500 ease-in-out"
                        />
                        {product.media?.items && <Image
                            src={product.media?.items[1]?.image?.url || "/demo.jpg"} alt="Product X"
                            fill
                            sizes="25vw"
                            className=" absolute object-cover rounded-md"
                        />}
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">{product.name}</span>
                        <span className="font-semibold">₹{product.priceData?.price}</span>
                    </div>
                    <div className=" text-sm text-gray-600" >{product.description}</div>
                    <button className="CartBtn">
                        <span className="IconContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(255, 255, 255)" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                        </span>
                        <p className="text">Add to Cart</p>
                    </button>
                </Link>
            ))}
            <Pagination currPage={res?.currentPage || 0} hasPrev={res?.hasPrev()!} hasNext={res?.hasNext()!} />
        </div>
    )
}

export default ProductList