import ChatBox from "../components/chat/chatbox";
import MessageBar from "../components/chat/messagebar";
import People from "../components/chat/people";
import ProfileBar from "../components/chat/profilebar";
import SearchBar from "../components/chat/searchbar";
import SideBar from "../components/chat/sidebar";

const Chat = () => {
  return (
    <>
      <div className="flex h-screen gap-4 bg-[#eeeeee]">
        <SideBar />
        <div className="flex flex-col  flex-grow max-w-[25%] space-y-5 mt-3 relative">
          <SearchBar />
          <People />
          <div className="absolute inset-x-0 bottom-0 h-[15rem] bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="flex flex-col flex-grow max-w-full space-y-5 mt-3 mr-4">
          <ProfileBar name={"Jane Smith"} status={"Online"} />
          <ChatBox />
          <MessageBar />
        </div>
      </div>
    </>
  );
};

export default Chat;
