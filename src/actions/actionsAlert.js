import { DISPLAY_ALERT, HIDE_ALERT } from "../types";

// muestra una alerta
export function displayAlertAction(alert) {
  return (dispatch) => {
    dispatch(createAlert(alert));
  };
}

const createAlert = (alert) => ({
  type: DISPLAY_ALERT,
  payload: alert,
});

export function hideAlertAction(alert) {
  return (dispatch) => {
    dispatch(hideAlert(alert));
  };
}

const hideAlert = () => ({
  type: HIDE_ALERT,
});
