import { initialNotifyLoadingProps } from "../../types/notifyTypes";
import { actionTypes } from "../actions/notify.action";

const initialState: initialNotifyLoadingProps = {
  open: false,
  msg: "Notificação ...",
  horizontoal: "center",
  vertical: "top",
  class: 'success',
  time: 3000
}

export default (state = initialState, { type, payload }: any): initialNotifyLoadingProps => {
  switch (type) {
    case actionTypes.change:
      // Certifique-se de que o payload é booleano para open
      return { ...state, open: !!payload };
    default:
      return state;
  }
};