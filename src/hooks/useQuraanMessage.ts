import { useContext } from "react";
import { QuraanMessageContext } from "../contexts/QuraanMessageContext";

const useQuraanMessage = () => {
  const context = useContext(QuraanMessageContext);
  if (!context) {
    throw new Error("Quraan MEssage Problems");
  }

  return context;
};

export default useQuraanMessage;
