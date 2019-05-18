import {createStore} from 'redux';
import reducer from '../reducers';
import { appState} from "./AppState";

export  const store  = createStore(reducer, appState);

