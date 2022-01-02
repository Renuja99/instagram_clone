export const userListReducer = (state = {}, action) => {
    console.log(action.type)
    switch (action.type) {
      case 'GET_USERS_REQUEST':
        return {...state, list: action.payload}
      
      default:
        return state
    }
  }