/* jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import './OAuthBar.css';


class OAuthBar extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div id="OAuthBar">
                <img src="../../../../../../../images/soundCloudLogo.png" className="logo" alt="SoundCloud"/>
                <img src="../../../../../../../images/spotifyLogo.png" className="logo" alt="Spotify"/>
            </div>
        );
    }
}

export default OAuthBar;