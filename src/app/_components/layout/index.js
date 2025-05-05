'use client';
import React, { useState } from 'react';
import { Layout, Button } from 'antd';
const { Header, Sider, Content } = Layout;
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Menu, Tags } from './components/index';

export default function LayoutComponent({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout id="app">
      <Sider width={!collapsed ? '15%' : '80px'} className="p-0 bg-white">
        <Menu collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header className="bg-white h-[90px] p-0 ">
          <div
            className="flex items-center w-full  px-2"
            style={{ boxShadow: '0 0 5px #ccc', height: '50px' }}
          >
            <Button type="primary" onClick={toggleCollapsed}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </div>
          <div className="flex p-sm w-full overflow-x-auto px-2">
            <Tags />
          </div>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
