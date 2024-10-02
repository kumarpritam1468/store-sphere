import ProductImages from '@/components/ProductImages'
import CustomizeProduct from '@/components/CustomizeProduct'

const SinglePage = () => {

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-12 2xl:px-32 flex flex-col lg:flex-row gap-16' >
      <div className=" w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>

      <div className="w-full lg:w-1/2 mt-6 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product name</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam eius harum animi consequuntur quas id nisi fugit, laboriosam nulla beatae error ea sed repudiandae.</p>
        <div className="h-[2px] bg-gray-100" />
        {/* <h2 className="font-medium text-2xl">₹{product.price?.price}</h2> */}
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">
            ₹150
          </h3>
          <h2 className="font-medium text-2xl">
            ₹120
          </h2>
        </div>
        <div className="h-[2px] bg-gray-100" />

        <CustomizeProduct />

        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Sec Title</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum expedita id tempora hic consectetur! Error recusandae totam architecto doloremque aliquid.</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Sec Title</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum expedita id tempora hic consectetur! Error recusandae totam architecto doloremque aliquid.</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Sec Title</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum expedita id tempora hic consectetur! Error recusandae totam architecto doloremque aliquid.</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Sec Title</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum expedita id tempora hic consectetur! Error recusandae totam architecto doloremque aliquid.</p>
        </div>
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">User Reviews</h1>
      </div>
    </div>
  )
}

export default SinglePage