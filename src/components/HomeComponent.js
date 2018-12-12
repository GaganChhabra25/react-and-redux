import React, {Component} from 'react';
import {Api} from '../config/ApplicationContext';
import LoadingIndicator from "./LoadingIndicator";

class HomeComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            content: null
        }
    }

    componentDidMount() {
        Api.get('/configuration').then((response) => {
            console.log(response);
            this.setState({
                content: response
            });
        });
    }

    render() {
        let Content = () => <LoadingIndicator/>;
        if (this.state.content) {
            Content = () => (
                <div>
                    <h1>Welcoem To HomePage</h1>
                </div>
            )
        }
        return (
            <Content/>
        )
    }
}
export default HomeComponent;
