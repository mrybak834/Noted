/* jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import './Layout.css';
import NavBar from './components/NavBar/NavBar';
import ControlBar from './components/ControlBar/ControlBar';
import OAuthBar from './components/OAuthBar/OAuthBar';

class Layout extends React.Component {
    constructor(props){
        super(props);
        this.name = "Marek";
    }

    getTime() {
        return 12;
    }

    render() {
        return (
            <div id="Layout">
                <p id="timer">{this.name}'s time is : {this.getTime()}</p>
                <NavBar />
                <div id="nestedGrid">
                    <ControlBar />
                    <OAuthBar />
                </div>
            </div>
        );
    }
}

export default Layout;