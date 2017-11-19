/* jshint esversion: 6 */
import React from "react";
import ReactDOM from "react-dom";
import './App.css';

class App extends React.Component {
    render() {
        const name = "Marek";
        return (
            <div id="App">
                <h1>It's {name}!</h1>
                <p id="timer">this is a timer</p>
            </div>
        );
    }
}

export default App;
