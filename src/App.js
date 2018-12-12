import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import {createStore} from 'redux';
import reducer from "./reducers";

const initialState = { tech: "React " };
const store = createStore(reducer, initialState);


class App extends Component {
    state = store.getState;
    render() {
        return <HelloWorld tech={this.state.tech} />;
    }
}

export default App;
