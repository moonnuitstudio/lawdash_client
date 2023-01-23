import { useSelector, useDispatch } from "react-redux";

import { actionShowLoadScreen, actionHideLoadScreen } from "../actions/LoadScreenAction";

const useLoadScreen = () => {
    const dispatch = useDispatch()
    const { displayloadscreen } = useSelector(state => state.loadscreen)

    const showLoadscreen = () => dispatch(actionShowLoadScreen())
    const hideLoadscreen = () => dispatch(actionHideLoadScreen())

    return {
        displayloadscreen,
        showLoadscreen,
        hideLoadscreen
    }
}

export default useLoadScreen