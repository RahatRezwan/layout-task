import { useState, useEffect } from 'react';
import { IProduct } from '../../../Types/Interface';
import ProductCard from './ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Products = () => {
   const [products, setProducts] = useState<IProduct[]>([]);

   useEffect(() => {
      fetch('products.json')
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);

   return (
      <div>
         <Swiper
            effect={'coverflow'}
            navigation={{
               nextEl: '.button-next',
               prevEl: '.button-prev',
            }}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            grabCursor={true}
            centeredSlides={false}
            breakpoints={{
               300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
               },
               1120: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
            }}
            className='h-[600px] px-1'
         >
            {products.map((product: IProduct) => (
               <SwiperSlide>
                  <ProductCard key={product.name} product={product} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Products;
