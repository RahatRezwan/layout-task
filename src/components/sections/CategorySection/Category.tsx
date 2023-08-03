import Frame from '../../../assets/images/Frame.png';
import essential_oil from '../../../assets/Images/essential_oil.png';
import naturalCosmetics from '../../../assets/Images/naturalCosmetics.png';
import diffusers from '../../../assets/Images/diffusers.png';
import aromaTherapy from '../../../assets/Images/aromaTherapy.png';
import { ICategory } from '../../../Types/Interface';
import CardTitle from '../../shared/CardTitle';
import Card from '../../shared/Card';

const Category = () => {
   const categories: ICategory[] = [
      { name: 'Essential Oils', image: essential_oil },
      { name: 'Natural Cosmetics', image: naturalCosmetics },
      { name: 'Diffusers', image: diffusers },
      { name: 'Aroma Therapy', image: aromaTherapy },
   ];
   return (
      <section style={{ backgroundImage: `url('${Frame}')` }}>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center items-center py-[3rem] md:py-[4rem] lg:py-[5rem] w-[97%] max-w-[1200px] mx-auto px-1'>
            {categories.map((category: ICategory, index: number) => (
               <Card key={index} className='group'>
                  <div className='flex flex-col gap-2 items-center justify-center transition-all duration-200 p-5 py-7'>
                     <img src={category.image} alt={category.name} className='w-[6rem] h-[6rem]' />
                     <CardTitle className='group-hover:text-white'>{category.name}</CardTitle>
                  </div>
               </Card>
            ))}
         </div>
      </section>
   );
};

export default Category;
