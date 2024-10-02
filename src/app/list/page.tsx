import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import Image from 'next/image';
import React from 'react'

const ListPage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-12 2xl:px-32' >
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
            <span className="px-3.5 py-3 text-white bg-main-red group-hover:bg-[#e04564] flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </span>
            <span className="pl-4 pr-5 py-2.5">Shop Now</span>
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>

      <Filter/>
      
      <h1 className=' font-semibold text-2xl mt-12'>Products for you</h1>

      <ProductList />
    </div>
  )
}

export default ListPage;