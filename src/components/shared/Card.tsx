import { IReactNode } from '../../Types/Interface';

const Card = ({ children, className, style }: IReactNode) => {
   return (
      <div className={`card ${className && className}`} style={style}>
         {children}
      </div>
   );
};

export default Card;
