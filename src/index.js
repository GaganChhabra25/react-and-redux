import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from "./Root";

const render = (Component) => {
    ReactDOM.render(
        <Component />,
        document.getElementById('root')
    );
};
render(Root);
registerServiceWorker();
