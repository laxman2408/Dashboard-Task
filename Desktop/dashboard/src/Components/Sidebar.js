import React, { useState } from "react";

import './Sidebar.css'
// import Head from './Head';
// import Cards from './Card'
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

function Sidebar() {
  const { Header, Content, Footer, Sider } = Layout;
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      
       {/* <Header className="site-layout-background" style={{ padding: 0 }} >
     
      <Head/> <div className="logo" /></Header> */}
      <Layout className="layout">
    <Sider
     
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
       
      
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}className={darkMode ? "dark-mode" : "light-mode"}> 
        <Menu.Item key="1" icon={<UserOutlined />}>
         Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
         User
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
         Location
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
         Shops
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          Orders
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
         Categories
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
        Templates
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
         General Settings
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
     {/* <Content>
       <Cards/>
     </Content>
      */}
    </Layout>
  </Layout>
    </div>
  )
}

export default Sidebar
