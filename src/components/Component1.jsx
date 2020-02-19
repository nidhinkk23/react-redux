import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { submitAction, onClickAction, deleteAction, editAction, updateAction } from '../actions';

export default function Component1() {
    const submitDisplay = useSelector(state => state.submitDisplay)
    const clickData = useSelector(state => state.onClickButton)
    const dispatch = useDispatch();
    const updateRef = useRef()
    let submit = (event) => {
        console.log("event");

        dispatch(submitAction(event.target.value))
        
    }
    console.log("submitDisplay", submitDisplay);
    let arr = []
    let buttonSubmit = () => {

        
        dispatch(onClickAction(submitDisplay))

    }
    console.log("clickData", clickData)

    for (const key in clickData) {
        arr.push(clickData[key].data)
    }


    let deleteFn = (value) => {
        dispatch(deleteAction(value))
    }

    let editFn = (value)=>{
        dispatch(editAction(value))
    }
let updateFn = (id)=>{
    console.log("updateRef.current.value",updateRef.current.value);
    dispatch(updateAction(id,updateRef.current.value))
    
}

    return (
        <div>
            <input onChange={submit}  type="text" name="" id="" />
            <button onClick={buttonSubmit}>Add</button>
            {/* <h6>{submitDisplay}</h6> */
                console.log(arr, "arr")

            }

          
            {clickData.map((value, key) => {
                console.log(value.data);
                
                return <div>{!value.edit? <h6>{value.data}<button onClick={() => {
                    deleteFn(value.id)
                }}>delete</button><button onClick={() => {
                    editFn(value.id)
                }}>Edit</button></h6>:<>
                <input type="text" ref={updateRef} defaultValue={value.data} name="" id=""  ></input>
                <button onClick={() => {
                    updateFn(value.id)
                }}>Update</button>
                </>
                }
                  
                </div>
            })}



        </div>
    )
}
