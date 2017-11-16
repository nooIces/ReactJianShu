import React from 'react';
import { Row, Col, Icon, Rate, Tooltip } from 'antd';
import { Yes } from '../../actions/index';

class BookRow extends React.Component {
    render(){
        const {bookname, own, score} = this.props;
        return (
            <Row align = "middle" type = "flex" className = "row">
                <Col span={8} style = {{ flexGrow: 2 }} className = "cols" >
                    <p className = "text" >{bookname}</p>
                    <Tooltip placement="right" title={ own === Yes?'已拥有':'未拥有'}>
                        <Icon className = "button" type = { own === Yes?'check-circle':'question-circle'}
                            style = {{ fontSize: '20px', color: own === Yes?'#66FF33':'#FFFF33' }}/>
                    </Tooltip>
                </Col>
                <Col style = {{ flexGrow: 1 }} ></Col>
                <Col span={8} className = "cols" >
                    <span style = {{ width: '100%', height: '100%', display: 'block', textAlign: 'center'}}>
                        <Rate allowHalf value={score} disabled style = {{ fontSize: '10px',textAlign: 'center'}}/>
                        {score && <span className="ant-rate-text">{score} stars</span>}
                    </span>
                </Col>
                <Col span={8} className = "cols" style = {{ width: '40px' }}>
                    <Icon className = "button" type = "right-square" style = {{ fontSize: '20px', color: '#FFCCFF', cursor: 'pointer'}}/>
                </Col>
            </Row>
        )
    }
}

export default BookRow;
