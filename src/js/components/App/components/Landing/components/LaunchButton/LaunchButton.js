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
            <div id="LaunchButton">
                <button class="raise">Launch</button>
            </div>
        );
    }
}

export default LaunchButton;