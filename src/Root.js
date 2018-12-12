import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import HomeComponent from "./components/HomeComponent";
import ErrorComponent from "./components/ErrorComponent";
class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={App} exact/>
                    <Route path="/home" component={HomeComponent}  />
                    <Route component={ErrorComponent}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Root;
