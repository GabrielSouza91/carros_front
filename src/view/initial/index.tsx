import { Alert } from "../../components/Alert/Alert";
import { Confirm } from "../../components/Confirm/Confirm";
import { Loading } from "../../components/loading";
import { Notify } from "../../components/Notify/Notify";

export function InitialPage() {
  return (
    <>
      <Loading />
      <Notify />
      <Alert />
      <Confirm
        onClose={() => console.log("fe3cho")}
        onConfirm={() => console.log("confirm")}
        open={true}
      />
    </>
  );
}
