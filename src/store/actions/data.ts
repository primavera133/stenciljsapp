import { TypeKeys } from "./index";

export interface SetSelectedFamily {
  type: TypeKeys.SET_SELECTED_FAMILY;
  selectedFamily: string;
}

export const setSelectedFamily = (selectedFamily: string) => (dispatch, _getState) => {
  const action: SetSelectedFamily = {
    type: TypeKeys.SET_SELECTED_FAMILY,
    selectedFamily
  };
  dispatch(action);
};