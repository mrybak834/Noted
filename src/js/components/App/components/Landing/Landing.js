/* jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import './Landing.css';

class Layout extends React.Component {
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
                    <div id="beginButton">Press me</div>
                </div>
            </div>
        );
    }
}

export default Layout;