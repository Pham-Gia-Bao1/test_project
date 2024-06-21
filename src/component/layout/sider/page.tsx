"use client";
import MainLogo from "../../../assets/images/Logo.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const items = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: <Link href="/">Home</Link>,
  },
  {
    key: "2",
    icon: <AppstoreOutlined />,
    label: <Link href="/products">Products</Link>,
  },
  {
    key: "3",
    icon: <UserOutlined />,
    label: <Link href="/profile">Profile</Link>,
  },
  {
    key: "4",
    icon: <InfoCircleOutlined />,
    label: <Link href="/about">About</Link>,
  },
];

const Sidebar: React.FC = () => {
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#000",
        width: "30%",
      }}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <Image src={MainLogo} alt="Main Logo" />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{ backgroundColor: "#000", color: "#fff" }}
      />
    </Sider>
  );
};

export default Sidebar;
