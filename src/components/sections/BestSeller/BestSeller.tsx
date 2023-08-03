import Flower from '../../../assets/images/flower.png';
import SectionHeader from '../../shared/SectionHeader';
import Products from './Products';

const BestSeller = () => {
   return (
      <section className='relative py-12 lg:py-24 h-auto w-full flex flex-col items-center gap-3'>
         <div className='absolute left-0 lg:pt-24 xl:pt-7'>
            <img src={Flower} alt='' className='hidden md:block w-full' />
         </div>
         <SectionHeader className='block md:hidden text-center'>Bestsellers</SectionHeader>
         <div className='grid grid-cols-12 items-center w-[95%] max-w-[1400px] mx-auto h-full'>
            <div className='hidden md:flex md:col-span-6 lg:col-span-5 xl:col-span-4 z-10 flex-col gap-4 lg:gap-8 pl-16'>
               <SectionHeader>Bestsellers</SectionHeader>
               <button className='button button-variant-2'>Shop All</button>
            </div>
            <div className='col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8 text-center md:text-start xl:text-justify'>
               <Products />
            </div>
         </div>
         <button className='button button-variant-2 block md:hidden'>Shop All</button>
      </section>
   );
};

export default BestSeller;
