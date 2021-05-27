import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};
	onDishSelect() {
		var but=document.getElementById("click");
		var para = document.createElement("P");   
		para.setAttribute("id","para");              
var t = document.createTextNode("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");     
para.appendChild(t);           
but.appendChild(para)   ;                            


        
    }

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<button  id="click" onClick={() => this.onDishSelect()}></button>
    		</div>
    	);
    }
}


export default App;

