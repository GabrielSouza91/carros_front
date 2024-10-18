import { useDispatch, useSelector } from "react-redux";
import { changeAlert } from "../../store/actions/alert.action";
import { initialAlertLoadingProps } from "../../types/alertTypes";
import { Modal, Typography } from "@mui/material";
import { AlertIcons } from "./Icons";

export function Alert() {
  const dispatch = useDispatch();
  const alert: initialAlertLoadingProps = useSelector(
    (state: any) => state.alertReducer
  );

  if(alert.open) {
    
    setTimeout(() => dispatch(changeAlert({open: false})), alert.time)
  }

  return (
    <Modal
      open={alert.open}
      onClose={() => dispatch(changeAlert({ open: false }))}
      className="flex items-center flex-col align-middle justify-center h-full"
    >
      <div className="bg-white items-center rounded-lg flex align-middle outline-none p-4 justify-center ">
        {AlertIcons[alert.class]}
        <Typography className="font-bold" variant="subtitle1">
          {alert.msg}
        </Typography>
      </div>
    </Modal>
  );
}
