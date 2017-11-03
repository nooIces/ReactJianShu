import React from 'react';
import { Form, Modal, Select, Input, Button } from 'antd';
import { SignIn } from '../../actions/Login';
import '../../style/navigation.less';

const FormItem = Form.Item;
const Option = Select.Option;

class Login extends React.Component{
	render(){
		const { visible, onCancel, onCreate } = this.props;
		const { getFieldDecorator } = this.props.form;
		return (
			<Modal
		        visible={visible}
		        title="Welcome to Login"
		        okText="Login"
		        cancelText="Cancel"
		        onCancel={onCancel}
		        onOk={onCreate}
		    >
				<Form>
			        <FormItem
			          label="username"
			          labelCol={{ span: 6, offset: 2 }}
			          wrapperCol={{ span: 8 }}
			        >
			          {getFieldDecorator('username', {
			            rules: [{ required: true, message: 'Please input your username!' }],
			          })(
			            <Input />
			          )}
			        </FormItem>
			    </Form>
		    </Modal>
		)
	}
}

const WrappedLogin = Form.create()(Login);

class LoginForm extends React.Component {
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
      console.log(this.props);
      console.log('Received values of form: ', values);
      this.props.login(SignIn, values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  saveFormRef = (form) => {
    this.form = form;
  }
  render() {
    return (
      <div className = "main">
        <Button shape = "circle" className = "loginButton" onClick={this.showModal} >Login</Button>
        <WrappedLogin
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}


export default LoginForm;
