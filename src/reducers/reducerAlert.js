import { DISPLAY_ALERT, HIDE_ALERT } from "../types";

// cada reducer tiene su state
const initialState = {
  alert: null,
};

export default function reducerAlert(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        alert: action.payload,
      };

    case HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
}
