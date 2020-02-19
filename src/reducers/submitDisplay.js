const submitDisplay = (state = "", action)=>{
    // debugger
    
    switch (action.type) {
        case 'SUBMIT':
            return action.data
            
        default:
            return state;
    }
}

export default submitDisplay;