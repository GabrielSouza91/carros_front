import { initialStateLoadingProps } from "../../types/loadingTypes";
import { actionTypes } from "../actions/loading.action";


const initialState: initialStateLoadingProps = {
  open: false,
  msg: "Carregando...",
};

export default (state = initialState, { type, payload }: any): initialStateLoadingProps => {
  switch (type) {
    case actionTypes.change:
      // Certifique-se de que o payload é booleano para open
      return { ...state, open: !!payload };
    default:
      return state;
  }
};
