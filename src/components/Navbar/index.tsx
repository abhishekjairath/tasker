import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

export const NavBar = React.memo(() => {
    const { Header } = Layout;

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to="/tasks">Tasks</Link></Menu.Item>
            </Menu>
        </Header>
    );
});
