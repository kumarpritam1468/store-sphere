import { myWixClientServer } from "@/lib/wixClientServer"
import Image from "next/image"
import Link from "next/link"

const CategoryList = async () => {
  const wixClient = await myWixClientServer();

  const data = await wixClient.collections.queryCollections().find();

  return (
    <div className=" mt-8 px-4 overflow-x-scroll scrollbar-hide">
      <div className=" flex gap-4 md:gap-8">
        {data.items.map((category, idx) => (
          <Link href={`/list?cat=${category.slug}`} className=" flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" key={idx} >
            <div className=" relative h-80 w-full overflow-hidden bg-slate-100">
              <Image src={category.media?.mainMedia?.image?.url || 'demo.jpg'} alt={`Category ${idx + 1}`} fill sizes="20vw" className=" object-cover hover:scale-110 transition-all duration-300 ease-in-out" />
            </div>
            <h1 className=" mt-4 font-normal text-clip tracking-wide" >{category.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList