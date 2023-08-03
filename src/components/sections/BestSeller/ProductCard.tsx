import { IProduct, IVariant } from '../../../Types/Interface';
import Card from '../../shared/Card';
import { useState } from 'react';
import CardTitle from '../../shared/CardTitle';
import Description from '../../shared/Description';

const ProductCard = ({ product }: { product: IProduct }) => {
   const [currentVariant, setCurrentVariant] = useState<IVariant>(product.variants[0]);

   return (
      <div className='flex flex-col gap-3 group cursor-pointer'>
         <Card className='overflow-hidden relative mb-2 h-[386px]'>
            <img
               src={currentVariant.image}
               alt=''
               className='object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out'
            />
            <div className='absolute bottom-[1.56rem] w-full flex justify-center items-center'>
               <button className='button button-variant-3'>Add to Cart</button>
            </div>
         </Card>
         <CardTitle className='text-start'>{product.name}</CardTitle>
         <Description className='text-start'>{product.description}</Description>
         <div className='flex justify-between items-center'>
            <div className='flex gap-1'>
               {product.variants.map((variant: IVariant) => (
                  <button
                     onClick={() => setCurrentVariant(variant)}
                     className={`w-[2rem] h-[2rem] rounded-full overflow-hidden ${
                        currentVariant === variant && 'ring-2 ring-olive-green'
                     }`}
                  >
                     <img src={variant.image} alt='' className='object-cover' />
                  </button>
               ))}
            </div>
            <CardTitle>${currentVariant.price}</CardTitle>
         </div>
      </div>
   );
};

export default ProductCard;
