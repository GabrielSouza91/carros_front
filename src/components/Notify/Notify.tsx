import { Snackbar, SnackbarContent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { initialNotifyLoadingProps } from "../../types/notifyTypes";
import { changeNotify } from "../../store/actions/notify.action";
import { useStylesNotify } from "./styles";

export function Notify() {
  
  const dispatch = useDispatch();
  const notify: initialNotifyLoadingProps = useSelector(
    (state: any) => state.notifyReducer
  );

  return (
    <Snackbar
      anchorOrigin={{
        horizontal: notify.horizontoal,
        vertical: notify.vertical,
      }}
      open={notify.open}
      autoHideDuration={notify.time}
      onClose={() =>
        dispatch(
          changeNotify({
            open: false,
          })
        )
      }
    >
      <SnackbarContent className={`flex justify-center ${useStylesNotify[notify.class]}`} message={<span>{notify.msg}</span>} />
    </Snackbar>
  );
}
