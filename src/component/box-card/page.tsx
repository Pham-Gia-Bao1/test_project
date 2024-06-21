"use client"

import React, { useState } from "react";
import { Button, Modal } from "antd";
import FormComponent from "../form/page";
import CardItem from "../card/page";
import "./page.css";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  type: string;
  picture: string;
}


const BoxCard: React.FC<BoxCardProps> = ({ cards } ) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="box-card">
      <h2 className="box-card-title">Try something else</h2>
      <Button
        onClick={openModal}
        style={{ margin: "50px", zIndex: 0 }}
        type="primary"
      >
        Create
      </Button>
      <Modal
        title="Add a new food"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <FormComponent />
      </Modal>

      <div className="cards-container">
        {cards.map((card) => (
          <CardItem
            key={card.id}
            id={card.id}
            name={card.name}
            price={card.price}
            description={card.description}
            type={card.type}
            picture={card.picture}
          />
        ))}
      </div>
      <div className="show-all">Create</div>
    </div>
  );
};

export default BoxCard;
