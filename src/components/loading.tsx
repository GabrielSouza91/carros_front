import { CircularProgress, Modal, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { initialStateLoadingProps } from "../types/loadingTypes";
import { changeLoading } from "../store/actions/loading.action";

export function Loading() {
  const dispatch = useDispatch();
  const loading: initialStateLoadingProps = useSelector(
    (state: any) => state.loadingReducer
  );

  return (
    <Modal
      open={loading.open}
      onClose={() => dispatch(changeLoading({ open: false }))}
      className="flex items-center justify-center align-middle h-full border-none"
    >
      <div className="bg-white flex items-center align-middle rounded-md p-3 outline-none justify-center">
        <CircularProgress size={20}  className="mr-2"/>
        <Typography variant="subtitle1">{loading.msg}</Typography>
      </div>
    </Modal>
  );
}
