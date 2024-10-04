import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
// import { myWixClientServer } from "@/lib/wixClientServer"s
import { Suspense } from "react"
import Loading from "./loading"

const HomePage = async () => {
  // const myWixClient = await myWixClientServer();
  // const res = await myWixClient.products.queryProducts().find();

  return (
    <div className=''>
      <Slider />
      <div className=" mt-24 px-4 md:px-8 lg:px-16 xl:px-12 2xl:px-32">
        <h1 className=" text-3xl">Featured Products</h1>
        <Suspense fallback={<Loading />} >
          <ProductList categoryId={process.env.NEXT_PUBLIC_FEATURED_CATEGORY_ID!} limit={5} />
        </Suspense>
      </div>
      <div className=" mt-24">
        <h1 className=" text-3xl px-4 md:px-8 lg:px-16 xl:px-12 2xl:px-32">Categories</h1>
        <Suspense fallback={<Loading />} >
          <CategoryList />
        </Suspense>
      </div>
      <div className=" mt-24 px-4 md:px-8 lg:px-16 xl:px-12 2xl:px-32">
        <h1 className=" text-3xl">New Products</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  )
}

export default HomePage