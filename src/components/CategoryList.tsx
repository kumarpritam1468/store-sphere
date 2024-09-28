import Image from "next/image"
import Link from "next/link"

const CategoryList = () => {
  return (
    <div className=" mt-8 px-4 overflow-x-scroll scrollbar-hide">
      <div className=" flex gap-4 md:gap-8">
        <Link href="/" className=" flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" >
          <div className=" relative h-96 w-full bg-slate-100">
            <Image src="/demo.jpg" alt="Product" fill sizes="20vw" className=" object-cover" />
          </div>
          <h1 className=" mt-8 font-light text-clip tracking-wide" >Category Name</h1>
        </Link>
        <Link href="/" className=" flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" >
          <div className=" relative h-96 w-full bg-slate-100">
            <Image src="/demo.jpg" alt="Product" fill sizes="20vw" className=" object-cover" />
          </div>
          <h1 className=" mt-8 font-light text-clip tracking-wide" >Category Name</h1>
        </Link>
        <Link href="/" className=" flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" >
          <div className=" relative h-96 w-full bg-slate-100">
            <Image src="/demo.jpg" alt="Product" fill sizes="20vw" className=" object-cover" />
          </div>
          <h1 className=" mt-8 font-light text-clip tracking-wide" >Category Name</h1>
        </Link>
        <Link href="/" className=" flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" >
          <div className=" relative h-96 w-full bg-slate-100">
            <Image src="/demo.jpg" alt="Product" fill sizes="20vw" className=" object-cover" />
          </div>
          <h1 className=" mt-8 font-light text-clip tracking-wide" >Category Name</h1>
        </Link>
        <Link href="/" className=" flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" >
          <div className=" relative h-96 w-full bg-slate-100">
            <Image src="/demo.jpg" alt="Product" fill sizes="20vw" className=" object-cover" />
          </div>
          <h1 className=" mt-8 font-light text-clip tracking-wide" >Category Name</h1>
        </Link>
        <Link href="/" className=" flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" >
          <div className=" relative h-96 w-full bg-slate-100">
            <Image src="/demo.jpg" alt="Product" fill sizes="20vw" className=" object-cover" />
          </div>
          <h1 className=" mt-8 font-light text-clip tracking-wide" >Category Name</h1>
        </Link>
        <Link href="/" className=" flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" >
          <div className=" relative h-96 w-full bg-slate-100">
            <Image src="/demo.jpg" alt="Product" fill sizes="20vw" className=" object-cover" />
          </div>
          <h1 className=" mt-8 font-light text-clip tracking-wide" >Category Name</h1>
        </Link>
        <Link href="/" className=" flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" >
          <div className=" relative h-96 w-full bg-slate-100">
            <Image src="/demo.jpg" alt="Product" fill sizes="20vw" className=" object-cover" />
          </div>
          <h1 className=" mt-8 font-light text-clip tracking-wide" >Category Name</h1>
        </Link>
        <Link href="/" className=" flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6" >
          <div className=" relative h-96 w-full bg-slate-100">
            <Image src="/demo.jpg" alt="Product" fill sizes="20vw" className=" object-cover" />
          </div>
          <h1 className=" mt-8 font-light text-clip tracking-wide" >Category Name</h1>
        </Link>
      </div>
    </div>
  )
}

export default CategoryList