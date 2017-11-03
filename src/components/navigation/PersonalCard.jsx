import { Card, Tag, Button } from 'antd';
import React from 'react';
import { SignOut } from '../../actions/Login';

const RandomColor = () => {
    let color = '';
    while(color.length < 6){
        color +=  '0123456789abcdef'[Math.floor(Math.random()*16)];
    }
    return  '#' + color;
}
class PersonalCard extends React.Component{
    render(){
        const { loginOut, username } = this.props;
        return (
            <Card title={ username}
                extra={<Button style = {{backgroundColor:'#00FF99', color: '#990033'}} onClick = { () => loginOut(SignOut, {username}) } >Sign-Out</Button>} 
                style={{ width: 240 }}
            >
                {
                    this.props.tags.map((value, key) => {
                        let color = RandomColor();
                        return <Tag key = {color}  color = {color}>{ value }</Tag>
                    })
                }
            </Card>
        );
    }
}

export default PersonalCard;
