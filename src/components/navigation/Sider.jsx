import { Menu, Icon, Switch } from 'antd';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
const { SubMenu } = Menu;


class Sider extends React.Component {
    constructor(props){
        super(props);
        this.onOpenChange = this.onOpenChange.bind(this);
    }
    rootSubmenuKeys = ['book', 'books'];
    state = {
        mode: 'inline',
        theme: 'light',
        openKeys: ['book']
    }
    onOpenChange(openKeys){
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.props.history.push("/" + latestOpenKey);
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    render() {
        return (
            <div>
                <Menu
                  style={{ width: 240 }}
                  defaultSelectedKeys={['1']}
                  openKeys={this.state.openKeys}
                  mode={this.state.mode}
                  theme={this.state.theme}
                  onClick = { (item) => this.props.change(item.key) }
                  onOpenChange = { (arr) => this.onOpenChange(arr) }
                >
                    <SubMenu key="book" title={<span><Icon type="book" /><span>Books</span></span>}>
                        <Menu.Item key="All" ><Link to="/Book">All Book</Link></Menu.Item>
                        <Menu.Item key="Yes">Have</Menu.Item>
                        <Menu.Item key="No">Have-Not</Menu.Item>
                    </SubMenu>
                    <SubMenu key="books" title={<span><Icon type="books" /><span>Books</span></span>}>
                        <Menu.Item key="Alls" >All Book</Menu.Item>
                        <Menu.Item key="Yess">Have</Menu.Item>
                        <Menu.Item key="Nos">Have-Not</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default withRouter(Sider);
