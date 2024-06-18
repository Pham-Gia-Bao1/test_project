import { Metadata } from "next";
type Props = {
  params: {
    productId: string;
  };
};


export default function ProductDetail({ params }: Props) {
    return <h1>Deatail of product {params.productId}</h1>;
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params?.productId}`
  };
};
