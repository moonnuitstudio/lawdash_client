import { 
    SHOW_LOAD_SCREEN,
    HIDE_LOAD_SCREEN
} from "../types/LoadScreenTypes";

const initialState = {
    displayloadscreen: true,
}

export default function(state = initialState, action) {
    const { type } = action

    switch (type) {
        case SHOW_LOAD_SCREEN:
            return {
                ...state,
                displayloadscreen: true,
            }
    
        case HIDE_LOAD_SCREEN:
            return {
                ...state,
                displayloadscreen: false,
            }

        default:
            return state
    }
}