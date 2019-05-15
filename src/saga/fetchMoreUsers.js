import { takeLatest, put } from "redux-saga/effects";

function* fetchMoreUsersSaga(){
    yield put({type: "FETCH_MORE_USERS_SAGA_START"})

   const usersResponse = yield fetch("https://jsonplaceholder.typicode.com/users",{})

    const users = yield usersResponse.json()

    yield put({type: "FETCH_MORE_USERS_SAGA_SUCCESS", payload: users})
}

export default function* watchFetchMoreUsersSaga(){
    yield takeLatest("FETCH_MORE_USERS", fetchMoreUsersSaga)
}