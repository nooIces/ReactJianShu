import React from 'react';
import { Form, Modal, Select, Input, Button, Tooltip } from 'antd';
import { BOOKCATEGORY } from '../../actions/Book';

const FormItem = Form.Item;
const Option = Select.Option;

class NewBook extends React.Component{
	render(){
		const { visible, onCancel, onCreate } = this.props;
		const { getFieldDecorator } = this.props.form;
		return (
			<Modal
		        visible={visible}
		        title="Add New Book"
		        okText="Add"
		        cancelText="Back"
		        onCancel={onCancel}
		        onOk={onCreate}
		    >
				<Form>
			        <FormItem
			          label="书名"
			          labelCol={{ span: 6, offset: 2 }}
			          wrapperCol={{ span: 8 }}
			        >
			          {getFieldDecorator('bookName', {
			            rules: [{ required: true, message: 'Please input your book\'s name!' }],
			          })(
			            <Input />
			          )}
			        </FormItem>
			        <FormItem
			          label="分类"
			          labelCol={{ span: 6, offset: 2 }}
			          wrapperCol={{ span: 8 }}
			        >
			          {getFieldDecorator('category', {
			            rules: [{ required: true, message: 'Please select one option!' }],
			          })(
			            <Select
			              placeholder="选择分类..."
			            >
			              <Option value={BOOKCATEGORY.TECHNIQUE}>技术</Option>
			              <Option value={BOOKCATEGORY.NOVEL}>小说</Option>
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
			console.log('Received values of form: ', values);
			this.props.add(values, this.props.userName);
			form.resetFields();
			this.setState({ visible: false });
		});
	}
	saveFormRef = (form) => {
		this.form = form;
	}
	render() {
		return (
			<div style = {{ width: '28px', display: 'inline', float: 'right'}}>
				<Tooltip placement="left" title="添加书籍" >
				<Button icon = "plus" shape = "circle" className = "plus" onClick={this.showModal}/>
				</Tooltip>
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
