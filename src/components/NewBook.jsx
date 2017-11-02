import React from 'react';
import { Form, Modal, Select, Input, Button } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;

class NewBook extends React.Component{
	render(){
		const { visible, onCancel, onCreate } = this.props;
		const { getFieldDecorator } = this.props.form;
		return (
			<Modal
		        visible={visible}
		        title="Add New Book "
		        okText="Add"
		        cancelText="Back"
		        onCancel={onCancel}
		        onOk={onCreate}
		    >
				<Form>
			        <FormItem
			          label="BookName"
			          labelCol={{ span: 6, offset: 2 }}
			          wrapperCol={{ span: 8 }}
			        >
			          {getFieldDecorator('booklist', {
			            rules: [{ required: true, message: 'Please input your book\'s name!' }],
			          })(
			            <Input />
			          )}
			        </FormItem>
			        <FormItem
			          label="Got"
			          labelCol={{ span: 6, offset: 2 }}
			          wrapperCol={{ span: 8 }}
			        >
			          {getFieldDecorator('own', {
			            rules: [{ required: true, message: 'Please select one option!' }],
			          })(
			            <Select
			              placeholder="是否拥有..."
			            >
			              <Option value="Yes">Yes</Option>
			              <Option value="No">No</Option>
			            </Select>
			          )}
			        </FormItem>
			    </Form>
		    </Modal>
		)
	}
}

const WrappedNewBook = Form.create()(NewBook);

class CollectionsPage extends React.Component {
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
      this.props.add(values);
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
        <Button icon = "plus" shape = "circle" className = "plus" onClick={this.showModal}/>
        <WrappedNewBook
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}


export default CollectionsPage;