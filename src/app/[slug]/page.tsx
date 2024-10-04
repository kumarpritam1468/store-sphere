import ProductImages from '@/components/ProductImages'
import CustomizeProduct from '@/components/CustomizeProduct'
import { myWixClientServer } from '@/lib/wixClientServer';
import { notFound } from 'next/navigation';

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await myWixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!res.items[0]) {
    return notFound();
  }

  const product = res.items[0];

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-12 2xl:px-32 flex flex-col lg:flex-row gap-16' >
      <div className=" w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages images={product.media?.items} />
      </div>

      <div className="w-full lg:w-1/2 mt-6 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {product.priceData?.price === product.priceData?.discountedPrice ? (
          <h2 className="font-medium text-2xl">₹{product.priceData?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ₹{product.priceData?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              ₹{product.priceData?.discountedPrice}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />

        <CustomizeProduct />

        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section: any, idx: number) => (
          <div className="text-sm">
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">User Reviews</h1>
      </div>
    </div>
  )
}

export default SinglePage