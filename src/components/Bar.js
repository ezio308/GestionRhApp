import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Bar.css';
import {  MenuOutlined,HomeOutlined,UsergroupDeleteOutlined,CalendarOutlined,SearchOutlined,} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Hidden } from '@material-ui/core';
import pic from "../assets/pic.jpg"
import logo from '../assets/LOGO_inspire.png'
import TestPage from './TestPage'


const { Header, Sider, Content, Footer } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    
    function change (x) {
       
        let title = ""
        if (!x ){
           title = "MAIN MENU";
          
         } 
         
        return title;
    }
    
   
    
    
    return (
        <Layout style={{ height: "100vh" }}>
            <Sider style={{ backgroundColor: "white" }} className='sidebar' trigger={null} collapsible collapsed={collapsed}>
                <div className='logo' >
                    {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <img src={logo} className="logo-img" />
                </div>
                <p className='title' collapsed  >{change(collapsed)}</p>
                <Menu
                    style={{ padding: 10 }}
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Dashboard ',
                        },
                        {
                            key: '2',
                            icon: <UsergroupDeleteOutlined />,
                            label: 'Gestion des utilisateurs',
                        },
                        {
                            key: '3',
                            icon: <CalendarOutlined />,
                            label: 'Gestion des congéset d’autorisations',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    <button className="profile"><img src={pic} className="profile-pic"></img></button>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '2px 6px',
                        padding: 18,
                        minHeight: 280,
                        backgroundColor: "#F4F5F7"
                    }}
                >
                    <TestPage />
                </Content>
                <Footer className="site-layout-background">2022 © INSPIRE</Footer>
            </Layout>
        </Layout>
    );
};

export default App;