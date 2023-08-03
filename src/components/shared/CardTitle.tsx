import { IReactNode } from '../../Types/Interface';

const CardTitle = ({ children, className }: IReactNode) => {
   return <h2 className={`card-title ${className && className}`}>{children}</h2>;
};

export default CardTitle;
