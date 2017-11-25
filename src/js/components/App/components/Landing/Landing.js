/* jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import './Landing.css';
import LaunchButton from "./components/LaunchButton/LaunchButton";

class Landing extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="Landing">
                <div id="border">
                    <div id="title">
                        Noted
                        <div id="subtitle">
                            Music Pitch Detector
                        </div>
                    </div>
                </div>
                <div id="buttonArea">
                    <LaunchButton id="LaunchButton" />
                </div>
            </div>
        );
    }
}

export default Landing;