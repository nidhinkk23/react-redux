import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import submitDisplay from "./submitDisplay";
import onClickButton from "./onClickReducer";

const allReducers = combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer,
    submitDisplay:submitDisplay,
    onClickButton:onClickButton
})

export default allReducers