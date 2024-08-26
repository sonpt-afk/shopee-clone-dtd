import React from 'react'
import { Link } from 'react-router-dom'
import { Product as ProductType } from 'src/types/product.type'
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
            src='https://down-vn.img.susercontent.com/file/vn-11134211-7r98o-lut2h5bbvkth93_tn'
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
            alt=''
          />
        </div>
        <div className='p-2 overflow-hidden'>
          <div className='min-h-[1.75rem] line-clamp-2 text-sm'>
            Áo sơ mi cộc tay Press Odin Club, Áo sơmi nam ngắn tay form rộng, Local Brand ODIN CLUB
          </div>
          <div className='flex items-center mt-3'>
            <div className='line-through max-w-[50%] text-gray-500 truncate'>
              <span className='text-xs'>đ</span>
              <span>200,000</span>
            </div>

            <div className='text-orange truncate ml-2'>
              <span className='text-xs'>đ</span>
              <span>50,000</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            <div className='flex items-center'>
              <div className='relative'>
                <div className='absolute top-0 left-0 h-full overflow-hidden' style={{ width: '50%' }}>
                  <svg
                    enable-background='new 0 0 15 15'
                    viewBox='0 0 15 15'
                    x={0}
                    y={0}
                    className='w-3 h-3 fill-yellow-300 text-yellow-300'
                  >
                    <polygon
                      points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-miterlimit={10}
                    ></polygon>
                  </svg>
                </div>
                <svg
                  enable-background='new 0 0 15 15'
                  viewBox='0 0 15 15'
                  x='0'
                  y='0'
                  className='w-3 h-3 fill-current text-gray-300'
                >
                  <polygon
                    points='7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-miterlimit='10'
                  ></polygon>
                </svg>
              </div>
            </div>
            <div className='ml-2 text-s'>
              <span>10.3k</span>
              <span className='ml-1'>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
