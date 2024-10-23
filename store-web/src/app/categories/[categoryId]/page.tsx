import { Sortby } from '@/components/Sortby'
import { getProducts } from '@/lib/get-products'
import Link from 'next/link'

export default async function CategoryPage ({ params }: { params: { categoryId: string } }) {

  const { categoryId } = params
  const { products, pagination } = await getProducts({ categoryId })

  return (
    <section className='bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16 min-h-screen'>
      <div className='container mx-auto'>
        <Link href="/">
          {/* Colocar un icono de flecha */}
          -- Return home
        </Link>

        { products.length > 0 && <Sortby /> }

        <div className='grid grid-cols-3 gap-4 mt-6'>
          {
            products.length === 0 && <div className='w-full max-w-sm flex'>
              <div className='px-5 pb-5'>
                <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                  No products found
                </h5>

              </div>
            </div>
          }
          {console.log(products)}
          {products.length > 0 && products.map((product) => {
            <div key={product.slug} className='w-full max-w-sm bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
                <a href="#">
                  <img className='p-8 rounded-t-lg' src={product.images} alt={product.name} />
                </a>
                <div className='px-5 pb-5'>
                  <a href="#">
                    <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                      {product.name}
                    </h5>
                  </a>
                  <div className='flex items-center mt-2.5 mb-5'>
                    <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                      {/* Colocar svg/copiar */}

                    </div>

                  </div>
                </div>
            </div>
          })
          }

        </div>
      </div>

    </section>
  )
}