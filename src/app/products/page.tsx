"use client";
import { fetchFoodsData } from "@/api";
import BoxCard from "@/component/box-card/page";
import { API_URL } from "@/utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";

const ListProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
      try {
        const foods = await fetchFoodsData();
        setProducts(foods); // Update products state with fetched data
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
  return (
    <div>
      <h1>Foodsy Products List</h1>
      <BoxCard cards={products} />
    </div>
  );
};

export default ListProducts;
