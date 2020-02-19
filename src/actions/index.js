let idD = 0;
export const increment = ()=>{
    
    return {
        type : 'INCREMENT'
    }
}
export const decrement = ()=>{
    
    return {
        type : 'DECREMENT'
    }
}

export const logged = ()=>{
    
    return {
        type : 'SIGN_IN'
    }
}

export const submitAction = (value)=>{
    // debugger
    return {
        data:value,
        type : 'SUBMIT'
    }
}
export const onClickAction = (value)=>{
    // debugger
    return {
        data:value,
        id:idD++,
        type : 'ONCLICK'
    }
}


export const deleteAction = (value)=>{
    // debugger
    return {
        data:value,
        type : 'DELETE'
    }
}

export const editAction = (value)=>{
    // debugger
    return {
        data:value,
        type : 'EDIT'
    }
}


export const updateAction = (id,value)=>{
    // debugger
    return {
        data:value,
        id:id,
        type : 'UPDATE'
    }
}