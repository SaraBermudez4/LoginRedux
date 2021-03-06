import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { authReducer } from '../components/reducers/authReducer'
import thunk from 'redux-thunk';
import { registro } from '../components/reducers/uiReducer'
import { notesReducer } from '../components/reducers/notesReducer'
const reducers = combineReducers({
    auth: authReducer,
    ui: registro,
    notes: notesReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)