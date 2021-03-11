const initialState = {
    name:''
}

const AdminReducer = (state = initialState, action)=>{
const newState = {...state}

if(action.type === 'DISPLAY_NAME'){
    newState.name = 'chinedu'
}

return newState
}


export default AdminReducer;