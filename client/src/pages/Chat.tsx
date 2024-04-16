import People from "../components/people";
import SideBar from "../components/sidebar";

const Chat = () => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <People />
      </div>
    </>
  );
};

export default Chat;
