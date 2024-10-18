import { initialAlertLoadingProps } from "../../types/alertTypes";
import { actionTypes } from "../actions/alert.action";

const initialState: initialAlertLoadingProps = {
  open: false,
  msg: "Dados atualizados com successo",
  class: 'success',
  time: 3000
}

export default (state = initialState, { type, payload }: any): initialAlertLoadingProps => {
  switch (type) {
    case actionTypes.change:
      // Certifique-se de que o payload é booleano para open
      return { ...state, open: !!payload };
    default:
      return state;
  }
};