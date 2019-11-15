import { SetSelectedFamily } from "./data";

export interface NullAction {
  type: TypeKeys.NULL;
}

// Keep this type updated with each known action
export type ActionTypes = NullAction | SetSelectedFamily;

export enum TypeKeys {
  // Won't match anything
  NULL = "NULL",
  ERROR = "ERROR",
  SET_SELECTED_FAMILY = "SET_SELECTED_FAMILY"
}