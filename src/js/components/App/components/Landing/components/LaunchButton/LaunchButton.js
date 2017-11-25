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
                Launch
            </div>
        );
    }
}

export default LaunchButton;