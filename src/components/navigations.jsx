import Sider from './navigation/Sider.jsx';
import Pinformation from './navigation/pInformation.jsx';
import React from 'react';
import { Button, Icon } from 'antd';
import LoginForm from './navigation/LoginForm.jsx';
import '../style/navigation.less';

class Navigations extends React.Component{
    render(){
        const { information, changeStatus, signInOrOut } = this.props;

        console.log(this.props);
        return (
            <div style = {{backgroundColor:'#100000', height:'inherit'}}>
                {
                    information.username === null?<LoginForm login = { signInOrOut } />:<Pinformation loginOut = { signInOrOut } information = { information } />
                }

                <Sider change = { changeStatus }/>
            </div>

        );
    }
}

export default Navigations;
