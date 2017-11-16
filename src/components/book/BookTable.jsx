import { Table, Rate, Input, Icon, Modal } from 'antd';
import CollectionsPage from './AddBook.jsx';
import { BOOKCATEGORY, READSTATUS, BOOKCATEGORY_CN, READSTATUS_CN } from '../../actions/Book';
import React from 'react';
import {
  withRouter
} from 'react-router-dom';
const Search = Input.Search;
const confirm = Modal.confirm;

const Confirm = (fn, index) => {
  confirm({
      title: '是否删除该书籍?',
      content: '',
      onOk() {
          fn(index);
      },
      width: '300px',
  });
}

class BookTable extends React.Component {
    state = {
        searchBook: '',
        pagination: {
            pageSize: 8
        },
        filters: {},
        loading: false,
    };
    getColumns(){
        return [{
                title: <p style = {{ fontSize: '16px', textAlign: 'center'}}>书名</p>,
                dataIndex: 'bookName',
                render: name => <p style = {{ fontSize: '16px', textAlign: 'center'}}>{name}</p>,
                width: '25%'
            }, {
                title: <p style = {{ fontSize: '16px', display: 'inline'}}>类别</p>,
                dataIndex: 'category',
                filters: [
                    { text: "技术", value: BOOKCATEGORY.TECHNIQUE },
                    { text: "小说", value: BOOKCATEGORY.NOVEL },
                ],
                render: category => <p style = {{ fontSize: '16px', textAlign: 'center'}}>{BOOKCATEGORY_CN[category]}</p>,
                width: '4%',
            }, {
                title: <p style = {{ fontSize: '16px', display: 'inline'}}>阅读状态</p>,
                dataIndex: 'readStatus',
                filters: [
                    { text: "未读", value: READSTATUS.UNREAD },
                    { text: "进行中", value: READSTATUS.PROCESSING },
                    { text: "已读", value: READSTATUS.READ }
                ],
                render: readStatus => <p style = {{ fontSize: '16px', textAlign: 'center'}}>{READSTATUS_CN[readStatus]}</p>,
                width: '6%',
            },{
                title: <p style = {{ fontSize: '16px', textAlign: 'center'}}>创建时间</p>,
                dataIndex: 'createTime',
                render: createTime => <p style = {{ fontSize: '16px', textAlign: 'center'}}>{createTime}</p>,
                width: '20%'
            }, {
                title: <p style = {{ fontSize: '16px', textAlign: 'center'}}>评分</p>,
                dataIndex: 'score',
                render: score =>
                    <span>
                        <Rate allowHalf value={score} disabled style = {{ fontSize: '10px',textAlign: 'center'}} />
                            {score && <span className='ant-rate-text' style = {{ fontSize: '16px'}}>{score} stars</span>}
                    </span>,
                width: '10%'
            }, {
                title: <p style = {{ fontSize: '16px', textAlign: 'center'}}>详细</p>,
                dataIndex: 'more',
                width: '5%',
                render: (a, record, index) => <Icon type = 'eye-o' onClick = { () => this.props.history.push("/book/" + index) } style = {{ fontSize: '20px', cursor: 'pointer', textAlign:'center', marginLeft: '40%'}}/>
            }, {
                title: <p style = {{ fontSize: '16px', textAlign: 'center'}}>操作</p>,
                dataIndex: 'action',
                width: '5%',
                render: (a, record, index) => <Icon type = 'close-square-o' onClick = { () => { Confirm(this.props.deleteBook, index) }} style = {{ fontSize: '20px', cursor: 'pointer', textAlign:'center', marginLeft: '40%'}}/>
            }];
    }
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;

        this.setState({
            pagination: pager,
            filters: filters
        });
    }
    onSearchs(bookName){
        const pager = { ...this.state.pagination };
        pager.current = 1;
        this.setState({
            pagination: pager,
            searchBook: bookName
        });
    }
    render() {
        const { booklist, addBook, information } = this.props;
        let book = booklist;
        if(this.state.searchBook){
            book = book.filter((value) => {
                return value.booklist.indexOf(this.state.searchBook) > -1;
            });
        }
        const keyArr = Object.keys(this.state.filters);
        if(keyArr.length > 0){
            book = book.filter( value => {
                for(let i = 0; i < keyArr.length; i++){
                    return this.state.filters[keyArr[i]].find(values => {
                        return values === value[keyArr[i]];
                    }) !== undefined;
                }
            });
        }
        return (
            <Table columns={this.getColumns()}
                rowKey={record => {record.bookName}}
                dataSource={book}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
                bordered
                title={() => <div>
                                <Search placeholder="搜索书籍" style={{ width: 200}}
                                    onSearch={value => this.onSearchs(value)} />
                                <CollectionsPage add = {this.props.addBook} userName = { information.username }/>
                            </div>
                }
            />
        );
    }
}

export default withRouter(BookTable);
