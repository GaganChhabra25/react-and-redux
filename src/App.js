import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
/*
import {store} from './store';
import { setTechnology } from './actions';
*/

class App extends Component {
    render() {
 /*       const state = store.get('appState');
        function submitAction(e) {
            const tech = e.target.dataset.tech;
            store.dispatch(setTechnology(tech));
            console.log(setTechnology);
        }*/
        return (
            <div>
              <HelloWorld />
              {/* <button
                   data-tech={state.tech}
                   className="hello-btn" onClick={submitAction}>{state.tech}</button>*/}
            </div>
        )
    }
}
export default App;
