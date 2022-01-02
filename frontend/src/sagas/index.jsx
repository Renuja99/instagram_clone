import { watchListUsersSaga } from "./userSagas"
import { all } from "redux-saga/effects"

export default function* rootSaga(){
    yield all([
        watchListUsersSaga()
    ])
}
