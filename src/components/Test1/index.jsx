import { NavLink, useRoutes } from 'react-router-dom'
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import routes from '../../routes'
import 'antd/dist/antd.min.css'
import "./index.css";

const { Header, Content, Footer,Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem('工作区', '1', <PieChartOutlined />),

//   getItem('仪表盘', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('可视化分析', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('流程发现', 'sub3', <TeamOutlined />, [getItem('Team 1', '7'), getItem('Team 2', '9')]),
// ];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const element = useRoutes(routes)
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
        <Menu theme="dark" mode="inline">
          <Menu.Item key='1'><NavLink to='./workstation'>工作区</NavLink></Menu.Item>
          <Menu.SubMenu title="仪表盘" key='2'>
            <Menu.Item key='3'><NavLink to='./logsummary'>日志分析</NavLink></Menu.Item>
            <Menu.Item key='4'><NavLink to='./home'>子菜单项</NavLink></Menu.Item>
          </Menu.SubMenu >
          <Menu.SubMenu title="可视化分析" key='5'>
            <Menu.Item key='6'><NavLink to='./dottedchart'>散点图</NavLink></Menu.Item>
          </Menu.SubMenu >
          <Menu.SubMenu title="流程发现" key='7'>
            <Menu.Item key='8'><NavLink to='./dottedchart'>流程图</NavLink></Menu.Item>
          </Menu.SubMenu>
        </Menu>;

      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 760,
            }}
          >
            {element}
            {/* Bill is a cat. */}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Process Mining ©2022 Created by Dhu Iim
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;