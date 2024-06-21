import React from "react";
import "./page.css";
import Link from "next/link";
import { Button, Popconfirm, message } from "antd";
import axios from "axios";
import { API_URL } from "@/utils/utils";
import { fetchFoodsData } from "@/api";

const CardItem: React.FC<Product> = ({
  id,
  name,
  price,
  description,
  type,
  picture,
}) => {
  const deleteProduct = async (id: number) => {
    try {
      const isDelete = await axios.delete(`${API_URL}/foods/${id}`);
      if (isDelete) {
        message.success(`Successfully deleted`);
        fetchFoodsData();
      } else {
        message.error(`Failed to delete`);
      }
    } catch (error) {}
  };

  return (
    <div className="card">
      <Link href={`products/${id}`}>
        <img src={picture} alt={name} className="card-image" />
      </Link>
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        {/* <p className="card-description">{price}</p> */}
        <p className="card-description">{description}</p>
        <Button>
          <Link href={`products/${id}/update`}>Update</Link>
        </Button>
        <Popconfirm
          placement="topLeft"
          title="delete"
          description="Do you want to delete this product?"
          onConfirm={() => deleteProduct(id)}
          cancelText="No"
        >
          <Button>Delete</Button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default CardItem;
