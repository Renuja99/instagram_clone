import { call, put, takeLatest } from "redux-saga/effects";


const fetchData = async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        return data

    }catch(e){
        console.log(e)
    }
    
    
}  
//Worker Saga: will be fired on USER_FETCH_REQUESTED actions
export function* listUsersSaga(action){
    
    try{
        const data = yield call(fetchData)
        console.log(data)
        

        yield put({type: 'GET_USERS_REQUEST', payload:data})

    }catch(e){
        console.log(e)
    }
  
}   
    


export function* watchListUsersSaga(){
    console.log("watcher saga")
    yield takeLatest('GET_USERS_SAGA', listUsersSaga)
}







