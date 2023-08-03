import { IReactNode } from '../../Types/Interface';

const Description = ({ children, className }: IReactNode) => {
   return <p className={`description ${className && className}`}>{children}</p>;
};

export default Description;
