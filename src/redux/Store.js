//how to create store  

import { createStore } from "redux";
import {rootReducer} from './Rootreducer'
import {composeWithDevTools} from 'redux-devtools-extension'

let store =createStore(rootReducer,composeWithDevTools());
export {store};