//Cosntantes
const init = {
    bgClass : 'bg__nav__home'
}

//types
const CAMBIAR_NAV_CLASS = 'CAMBIAR_NAV_CLASS'

//Reducers

export default function colorReducer(state = init, action)  {
    switch (action.type) {
        case CAMBIAR_NAV_CLASS:
            return {state, bgClass: action.payload}
    
        default:
            return state;
    }
}


//Acciones

export const changeClass = (section) => (dispatch, getState) => {
       
        dispatch({
            type: CAMBIAR_NAV_CLASS,
            payload: section || 'bg__nav__home'
        })
        
}
