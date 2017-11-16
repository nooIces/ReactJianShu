import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { WrapBookTable, MainMenus } from '../containers/index';
import LoginForm from './navigation/LoginForm.jsx';
import Breadnavigation from './navigation/Breadnavigation.jsx';
import PersonalCard from './navigation/PersonalCard.jsx';
import '../style/main.less';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class MainLayout extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        collapsed: false
    }
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh', minWidth: '600px' }}>
                <Sider
                  collapsible
                  collapsed={this.state.collapsed}
                  onCollapse={this.onCollapse}
                >
                <MainMenus collapsed = {this.state.collapsed}/>
                </Sider>
                <Layout style = {{ backgroundColor: '#FFF'}}>
                    <Header style={{ background: '#ececec', padding: '0 0 0 10px', height: '50px',lineHeight: '50px' }}>
                        <Breadnavigation />
                    </Header>
                    <Content>
                        <Route exact path="\/" component={PersonalCard}/>
                        <Route path="\/test" component={PersonalCard}/>
                        <Route path="\/book" component={WrapBookTable}/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2017 override by wwy
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;
