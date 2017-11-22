/* jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import './ControlBar.css';
import '../../../../../../../css/libraries/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../../../../../../css/libraries/font-awesome-4.7.0/font-awesome-animation/font-awesome-animation.min.css';
class ControlBar extends React.Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div id="ControlBar">ControlBar
            <i className="fa fa-circle-o faa-pulse animated colorScheme" aria-hidden="false"></i>
            </div>
        );
    }
}

export default ControlBar;