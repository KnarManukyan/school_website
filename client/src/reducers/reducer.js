
const initialState = {
  email: null,
  password: null
};

export default function(state = initialState, action){
    switch (action.type) {
    case "SET_EMAIL":{
      return {
        ...state,
        email: action.email
      };
    }
    case "SET_PASSWORD":{
      return {
        ...state,
        password: action.password
      };
    }
    default:
      return state;
  }
}
