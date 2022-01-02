import { createStore , applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {userListReducer} from './reducers/userReducers'
import rootSaga from './sagas/index'

const ourStore = combineReducers({
    users: userListReducer
})


// create the saga middleware 
const sagaMiddleware = createSagaMiddleware()


//mount it on the store
const store = createStore(
    ourStore,
    applyMiddleware(sagaMiddleware)
)

//then run the saga
sagaMiddleware.run(rootSaga)


console.log(store.getState())


export default store
