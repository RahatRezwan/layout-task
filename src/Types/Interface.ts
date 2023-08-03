export interface ICategory {
   name: string;
   image: string;
}

export interface IReactNode {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
}

//products
export interface IVariant {
   name: string;
   price: number;
   image: string;
}

export interface IProduct {
   name: string;
   description: string;
   variants: IVariant[];
}
