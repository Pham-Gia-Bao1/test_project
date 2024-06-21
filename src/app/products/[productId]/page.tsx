
"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/utils/utils"; // Adjust the path based on your project structure

type Props = {
  params: {
    productId: string;
  };
};

const ProductDetail: React.FC<Props> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null); // Initialize state with null or initial empty object

  useEffect(() => {
    getData();
  }, [params.productId]); // Trigger getData when params.productId changes

  async function getData(): Promise<void> {
    const apiUrl = `${API_URL}/foods/${params.productId}`;

    try {
      const response = await axios.get<Product>(apiUrl);
      setProduct(response.data); // Update product state with fetched data
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  if (!product) {
    return <div>Loading...</div>; // Display loading state while fetching data
  }

  return (
    <div className="detail">
      <img src={product.picture} alt={product.name} className="detail-image" />
      <div className="detail-content">
        <h3 className="detail-title">{product.name}</h3>
        <p className="detail-description">{product.description}</p>
        <p className="detail-price">Price: ${product.price}</p>
        <p className="detail-type">Type: {product.type}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
