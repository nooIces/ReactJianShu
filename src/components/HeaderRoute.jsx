import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import '../style/HeaderRoute.less';
import Button from 'antd/lib/button';


const HeaderRoute = ({status, label, nowStatus, change}) => {
	return(
	<Button className = { status===nowStatus?'test actives':'test'} onClick = { () => change(status)}>
		{label}
	</Button>
)}


export default HeaderRoute;
