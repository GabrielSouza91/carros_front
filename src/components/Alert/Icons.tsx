import { MdCheckCircle, MdError } from "react-icons/md";

export const AlertIcons = {
  error: (
    <MdError className="text-green-500" style={{ fontSize: "2.5rem" }} />
  ),
  success: (
    <MdCheckCircle
      className="text-green-500"
      style={{ fontSize: "2.5rem" }}
    />
  ),
};
