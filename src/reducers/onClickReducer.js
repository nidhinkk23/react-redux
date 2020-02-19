const onClickButton = (state = [], action) => {
    // debugger

    switch (action.type) {

        case 'ONCLICK':
            return [...state,
            {
                data: action.data,
                id:action.id,
                edit:false
            }]
        case 'DELETE':
                const filteredData = state.filter((item) => item.id !== action.data);
            return  filteredData
        case 'EDIT':
                    let editConData = state.map((value)=>{
                        return value.id===action.data?{...value,edit:true}:value
                    })


                return  editConData
        case 'UPDATE':
                let updateData = state.map((value)=>{
                    return value.id===action.id?{...value,data:action.data,edit:false}:value
                })
                return  updateData


        default:
            return state;
    }
}

export default onClickButton;