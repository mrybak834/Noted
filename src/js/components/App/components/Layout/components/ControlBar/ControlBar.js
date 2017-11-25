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
            <div id="ControlBar">
            <i class="fa fa-step-backward fa-2x iconStyle" aria-hidden="true"></i>
            <i className="fa fa-circle-o fa-2x faa-pulse animated faa-slow iconStyle" aria-hidden="false"></i>
            <i class="fa fa-step-forward fa-2x iconStyle" aria-hidden="true"></i>
            </div>
        );
    }
}

export default ControlBar;