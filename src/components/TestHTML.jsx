import React,{ Component } from 'react';
import { Button } from 'antd';

var test;
var test2;
var testHtml = { __html:`<article>
				<header>
					<h1>Apple</h1>
					<p>Time: <time pubdate="pubdate">2010/01/01</time></p>
				</header>
				<p><b>苹果</b> and so on...</p>
				<footer>
					<p><small>test</small></p>
				</footer>
			</article>
			<canvas refs="${test}" width = "400" height = "300"/>`};

class TestHTML extends Component {
	constructor(props){
		super(props);
		this.clear = this.clear.bind(this);
		this.collapse = this.collapse.bind(this);
	}
	componentDidMount(){
		var context = test.getContext('2d');
		context.fillStyle = "red";
		context.fillRect(0, 0, 400, 300);
		create();
		function create(){
			context.fillStyle = "yellow";
			context.strokeStyle = "white";
			context.fillRect(50, 50, 100, 100);
			context.strokeRect(50, 50, 100, 100);
		}
		//setInterval(change, 1000);
		function change(){
			context.transform(1, 0, 0, 1, 10, 10);
			//context.clearRect(50, 50, 100, 100);
			create();
		}
		/*var g = context.createLinearGradient(0, 0, 0, 300);
		g.addColorStop(0, 'red');
		g.addColorStop(1, 'blue');
		context.fillStyle = g;
		context.fillRect(0, 0, 400, 300);
		var n = 0;
		var g2 = context.createLinearGradient(0, 0, 300, 0);
		g2.addColorStop(0, 'yellow');
		g2.addColorStop(1, 'black');
		console.log( Math.PI);
		for(var i = 0; i < 10; i++){
			context.beginPath();
			context.fillStyle = g2;
			context.arc(i * 25, i * 25, i * 10, Math.PI * 2, true);
			context.closePath();
			context.fill();
		}*/
	}
	clear(){
		var context = test.getContext('2d');
		console.log(this);
		context.clearRect(50, 50, 100, 100);
	}
	collapse(){
		let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
		numbers.copyWithin(3, 1, 3);
	}
	render(){
		console.log(this.props);
		return (
			<div>
				<article ref = { node => {test2 = node}}>
					<header>
						<h1>Apple</h1>
					</header>
					<p><b>苹果</b> and so on...</p>
					<footer>
						<p><small>test</small></p>
					</footer>
				</article>
				<canvas ref={ node => {test = node}} width = "400" height = "300"/>
				<Button type="primary" style={{marginTop:"100px"}} onClick = {this.clear}>Button</Button>
				<br/>
				<ul>
					<li><a href = '#test1' >test1</a></li>
					<li><a href = '#test2' >test2</a></li>
					<li><a href = '#test3' >test3</a></li>
				</ul>
				<h3>selection对象与range对象的使用实例</h3>
				<input type="button" value="点击我" onClick = {this.collapse}/>
				<div id="showRange"></div>
				<input type = "text" required />
			</div>
		);
	}
}

export default TestHTML;
