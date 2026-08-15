import QuraanMessageProvider from "../../contexts/QuraanMessageProvider";
import QuraanMessageContent from "./components/QuraanMessageContent";

export default function QuraanMessage() {
  return (
    <QuraanMessageProvider>
      <QuraanMessageContent />
    </QuraanMessageProvider>
  );
}
