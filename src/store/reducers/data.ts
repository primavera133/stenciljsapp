import { ActionTypes, TypeKeys } from "./../actions/index";

const getInitialState = (): DataState => {
    return {
        selectedFamily: null
    };
};

const data = (
    state = getInitialState(),
    action: ActionTypes
): DataState => {
    switch (action.type) {
        case TypeKeys.SET_SELECTED_FAMILY: {
            return { ...state, selectedFamily: action.selectedFamily };
        }
    }
    return state;
};

export default data;