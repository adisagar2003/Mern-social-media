import {createStore} from 'redux';


function mapStateToProps(){
    
}
function loginCheck(state={isLogged:false},action){
    switch (action.type){
        case 'login_user':
            return {isLogged:state.isLogged=true}

        case 'logout_user':
            return {isLogged:state.isLogged=false}
        default:
            return state
    }
}
let store = createStore(loginCheck);
export default store