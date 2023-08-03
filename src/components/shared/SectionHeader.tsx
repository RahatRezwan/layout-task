import { IReactNode } from '../../Types/Interface';

const SectionHeader = ({ children, className }: IReactNode) => {
   return <h1 className={`section-header ${className && className}`}>{children}</h1>;
};

export default SectionHeader;
