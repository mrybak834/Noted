/* jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import Layout from './components/Layout/Layout';
import Landing from './components/Landing/Landing';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            landed: false,
        };
    }

    land(){
        this.setState({
            landed: true
        });
    }

    /**
     * Displays either the landing page, or if the user has already landed, the main layout
     */
    landingStatus() {
        if (this.state.landed){
            return <Layout />
        }
        else {
            return <Landing onClick={() => this.land()}/>
        }
    }

    render() {
        return (
            <div>
                {this.landingStatus()}
            </div>
        );
    }
}

export default App;
