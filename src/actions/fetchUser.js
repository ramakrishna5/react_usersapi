const fetchUsers =  () => async dispatch => {
    dispatch(fetchUsersStarted())
    try{
        const userResponse = await fetch("https://jsonplaceholder.typicode.com/users",{})
        
        const user = await userResponse.json()
       
        dispatch(fetchUsersSuccess(user))
    }catch(exc){
        dispatch(fetchUsersError())
    }
}

const fetchUsersError = () =>{
    return {type: "FETCH_USERS_ERROR"}
}

const fetchUsersStarted = () =>{
    return {type: "FETCH_USERS_START"}
}

const fetchUsersSuccess = (users) => {
    return {type: "FETCH_USERS_SUCCESS", payload: users}
}

export default fetchUsers