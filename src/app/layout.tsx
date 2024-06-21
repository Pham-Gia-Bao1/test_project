"use client";
import React from "react";
import { Layout, Menu, theme } from "antd";
import Sidebar from "@/component/layout/sider/page";
import HeaderLayout from "@/component/layout/header/page";
const { Header, Content, Footer, Sider } = Layout;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout hasSider>
          <Sidebar />
          <Layout style={{ marginLeft: 200, marginTop: 50 }}>
            <HeaderLayout />
            <Content style={{ overflow: "initial" }}>
              <div
                style={{
                  padding: 24,
                  textAlign: "center",
                  overflow : "scroll",
                }}
              >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}
