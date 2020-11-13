import {createStore} from 'redux';
import {reducer} from './reducer';
import {emps} from './states'

export let store = createStore(reducer,emps);
