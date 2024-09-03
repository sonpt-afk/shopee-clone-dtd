import React from 'react'
import { Link } from 'react-router-dom'
import ProductRating from 'src/components/ProductRating'
import { Product as ProductType } from 'src/types/product.type'
import { formatNumberToSocialStyle, formatCurrency } from 'src/utils/utils'
interface Props {
  product: ProductType
}

const Product = ({ product }: Props) => {
  return (
    <Link to='/'>
      <div
        className='bg-white shadow rounded-sm
    hover:translate-y-[-0.0625rem] hover:shadow-md duration-100
    transition-transform
    '
      >
        <div className='w-full pt-[100%] relative'>
          <img
            src={product.image}
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
            alt={product.name}
          />
        </div>
        <div className='p-2 overflow-hidden'>
          <div className='min-h-[1.75rem] line-clamp-2 text-sm'>{product.name} </div>
          <div className='flex items-center mt-3'>
            <div className='line-through max-w-[50%] text-gray-500 truncate'>
              <span className='text-xs'>đ</span>
              <span>{formatCurrency(product.price_before_discount)}</span>
            </div>

            <div className='text-orange truncate ml-2'>
              <span className='text-xs'>đ</span>
              <span>{formatCurrency(product.price)}</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            <ProductRating rating={product.rating} />
            <div className='ml-2 text-s'>
              <span>{formatNumberToSocialStyle(product.sold)}</span>
              <span className='ml-1'>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
