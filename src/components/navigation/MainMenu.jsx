import { Menu, Icon, Button, Modal, message } from 'antd';
import {
  withRouter
} from 'react-router-dom';
import React from 'react';
import LoginForm from './LoginForm.jsx';
import { SignOut } from '../../actions/Login';
import '../../style/navigation.less';
const SubMenu = Menu.SubMenu;
const confirm = Modal.confirm;
const Confirm = (fn, SignOut, username) => {
  confirm({
      title: '是否退出登录?',
      content: '',
      onOk() {
          fn(SignOut, { username });
      },
      width: '300px',
  });
}
const warning = () => {
  message.warning('请先登录!');
};

class MainMenu extends React.Component {
    constructor(props){
        super(props);
        this.onOpenChange = this.onOpenChange.bind(this);
    }
    rootSubmenuKeys = ['book', 'test'];
    state = {
        openKeys: []
    }
    onOpenChange(openKeys){
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    enterComponent(item){
        if(this.props.information.username === null){
            warning();
        }else{
            this.props.history.push("/" + item.key);
        }
    }
    render() {
        const { information, signInOrOut,collapsed } = this.props;
        const wid = {
            width: this.props.collapsed?'32px':'168px'
        }
        return (
            <div>
                <LoginForm login = { signInOrOut } collapsed = { collapsed } username = { information.username }/>
                <Menu
                    defaultSelectedKeys={[]}
                    openKeys={this.state.openKeys}
                    mode='inline'
                    theme='dark'
                    onClick = { (item) => this.enterComponent(item) }
                    onOpenChange = { (arr) => this.onOpenChange(arr) }
                >
                    <SubMenu key="show" title={<span><Icon type="book" /><span>show</span></span>}>
                        <Menu.Item key="book" >book</Menu.Item>
                    </SubMenu>
                    <SubMenu key="test" title={<span><Icon type="code" /><span>Test</span></span>}>
                        <Menu.Item key="code" >code</Menu.Item>
                    </SubMenu>
                </Menu>
                {
          		  (() => {
                      const username = information.username;
          			  if(username !== null){
          				  return (
          					  <div className = "logo signoutButton" style={ wid }>
          					  	  <Button className = "loginButton" style={{ backgroundColor: 'red' }}  onClick = { () => Confirm(signInOrOut, SignOut, username) } ><Icon type="poweroff" style={{ fontSize: 13 }} /></Button>
          					  </div>
          				  )
          			  }
          		  })()
          	  	}
            </div>
        );
    }
}

export default withRouter(MainMenu);
