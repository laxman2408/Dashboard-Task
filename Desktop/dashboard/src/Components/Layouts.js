import React from 'react'

import Head from './Head';
import Sidebar from './Sidebar'
import Cards from './Card'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function Layouts() {
    return (
        <div>
             <>
  

    <Layout>
    <Header><Head/></Header>
      <Layout>
        <Sider><Sidebar/></Sider>
        <Content><Cards/></Content>
      </Layout>
      
    </Layout>

  </>
        </div>
    )
}

export default Layouts
