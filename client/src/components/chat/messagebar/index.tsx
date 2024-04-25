import Mic from "./Mic";
import Send from "./Send";
import WriteMessage from "./WriteMessage";

const MessageBar = () => {
  return (
    <section className="flex flex-row space-x-2 w-full">
      <WriteMessage />
      <Mic />
      <Send />
    </section>
  );
};

export default MessageBar;
