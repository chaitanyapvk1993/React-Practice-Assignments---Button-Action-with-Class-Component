import React, {Component, useState} from "react";
import '../styles/App.css';
class App extends Component {
    constructor(props) {
		super(props);
	   this.state={
	     isClicked:false
	    }
	};
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
		{this.state.isClicked?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:null}
		<button id="click" onClick={()=>{this.setState({isClicked:true})}}>click</button>
    		</div>
    	);
    }
}
export default App;
