/* jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import './Landing.css';
import LaunchButton from "./components/LaunchButton/LaunchButton";

class Landing extends React.Component {
    constructor(props){
        super(props);
    }

    renderButton(){
        return (
            <LaunchButton
                onClick ={() => this.props.onClick()}
            />
        );
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
                    {this.renderButton()}
                </div>
            </div>            
        );
    }
}

export default Landing;