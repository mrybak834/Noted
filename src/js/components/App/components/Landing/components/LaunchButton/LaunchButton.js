/* jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import './LaunchButton.css';

class LaunchButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            // Obtains the onClick method passed through Landing.js, which is passed from App.js
            <button id="LaunchButton" class="raise" onClick={this.props.onClick}>Launch</button>
        );
    }
}

export default LaunchButton;