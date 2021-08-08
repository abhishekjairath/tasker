import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Layout } from 'antd';

import './App.css';

import { NavBar } from "./components/Navbar";
import { Tasks } from "./pages/tasks";
import { Home } from "./pages/home";

const { Content, Footer } = Layout;

export default function BasicExample() {
  return (
    <>
      <Router>
        <Layout className="layout">
          <NavBar />
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: '60px' }}>
            <div className="site-layout-background" style={{ margin: '16px 0' }}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/tasks">
                  <Tasks />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Tasked ©2021 Created by AJ</Footer>
        </Layout>
      </Router>
    </>
  );
}
