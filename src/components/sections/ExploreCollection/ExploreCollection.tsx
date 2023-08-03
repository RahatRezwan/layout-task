import collectionImage from '../../../assets/Images/collectionImage.png';
import Description from '../../shared/Description';
import SectionHeader from '../../shared/SectionHeader';

const ExploreCollection = () => {
   return (
      <section className='bg-white flex justify-end items-center relative h-[450px] lg:h-[700px]'>
         <div className='absolute left-0 lg:pt-24 xl:pt-7'>
            <img
               src={collectionImage}
               alt=''
               className='hidden md:block w-[50%] lg:w-[80%] xl:w-full'
            />
         </div>
         <div className='grid grid-cols-12 items-center w-[95%] max-w-[1200px] mx-auto h-full'>
            <div className='hidden md:block md:col-span-5 lg:col-span-6' />
            <div className='flex flex-col gap-[1.25rem] col-span-12 md:col-span-7 lg:col-span-6 items-center md:items-start z-10 w-full text-center md:text-start xl:text-justify'>
               <SectionHeader>Improve your well-being with Aromatherapy</SectionHeader>

               <Description>
                  Diffusing can be exactly what you need to add purpose and focus to your daily
                  tasks. We've got tons of fun diffuser blends, with scents to suit every mood, day
                  and situation.
               </Description>

               <button className='button button-variant-1'>Explore The Collection</button>
            </div>
         </div>
      </section>
   );
};

export default ExploreCollection;
