import React from 'react';
import { Form, Modal, Select, Input, Button, Avatar, Icon, Checkbox } from 'antd';
import { SignIn } from '../../actions/Login';
import '../../style/login.less';

const FormItem = Form.Item;
const Option = Select.Option;

class Login extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const { visible, onCancel, onCreate } = this.props;
		const { getFieldDecorator } = this.props.form;
		return (
			<Modal
		        visible={visible}
		        title='Login'
		        okText="Login"
		        cancelText="Cancel"
		        onCancel={onCancel}
				wrapClassName="vertical-center-modal"
				width='300px'
				bodyStyle={{ width:'300px', height: '250px'}}
				footer={null}
		    >
				<LoginForm logIn = { onCreate } getFieldDecorator = { getFieldDecorator } change = { this.changeForm }/>:
		    </Modal>
		)
	}
}

const WrappedLogin = Form.create()(Login);

class Logins extends React.Component {
	state = {
	    visible: false,
	};
	showModal = () => {
	    this.setState({ visible: true });
	}
	handleCancel = () => {
	    this.setState({ visible: false });
	}
	handleCreate = () => {
	    const form = this.form;
	    form.validateFields((err, values) => {
	        if (err) {
	            return;
	        }
	        console.log('Received values of form: ', values);
	        form.resetFields();
	        this.setState({ visible: false });
		    this.props.login(SignIn, values);
	   });
	}
	saveFormRef = (form) => {
	    this.form = form;
	}
	render() {
	    return (
		    <div>
		        <div className = "logo">
		            {
					    this.props.username === null?
		  				    <Button className = "loginButton" onClick={this.showModal} >{this.props.collapsed == false?'Login':'L'}</Button>:
						    <Avatar shape="square" style={{ backgroundColor: '#00a2ae' }} className = "loginButton">
							    { this.props.collapsed == false?this.props.username:this.props.username.charAt(0).toUpperCase() }
						    </Avatar>
				    }
		            <WrappedLogin
			            ref={this.saveFormRef}
			            visible={this.state.visible}
			            onCancel={this.handleCancel}
			            onCreate={this.handleCreate}
		            />
		        </div>
			</div>
	 	);
	 }
}

class LoginForm extends React.Component {
	render() {
		const { getFieldDecorator } = this.props;
        return (
			<div>
			<Form onSubmit={this.props.logIn} className="login-form" target = "rfFrame">
				<FormItem>
					{getFieldDecorator('username', {
						rules: [{ required: true, message: 'Please input your username!' }],
					})(
						<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" autoComplete="off"/>
					)}
				</FormItem>
				<FormItem>
				   {getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
					})(
						<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" autoComplete="off"/>
				  )}
				</FormItem>
				<FormItem>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(
						<Checkbox>Remember me</Checkbox>
					)}
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
					</Button>
				</FormItem>
			</Form>
			<iframe id="rfFrame" name="rfFrame" src="about:blank" style={{ display:'none' }}></iframe>
		</div>
        );
    }
}


export default Logins;
