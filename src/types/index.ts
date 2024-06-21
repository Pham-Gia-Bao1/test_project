interface Product {
  id: number;
  name: string;
  price: number | string;
  description: string;
  type: string;
  picture: string;
}
type Props = {
  params: {
    productId: string;
  };
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
type DataType = {
  name: string;
  price: number;
  description: string;
  type: string;
  picture: string;
};

interface BoxCardProps {
  cards: Product[];
}
