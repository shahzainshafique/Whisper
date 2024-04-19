import People from "../components/people";
import SearchBar from "../components/searchbar";
import SideBar from "../components/sidebar";

const Chat = () => {
  return (
    <>
      <div className="flex gap-4 bg-[#eeeeee]">
        <SideBar />
        <div className="flex flex-col flex-grow max-w-[25%] space-y-5 mt-3">
          <SearchBar />
          <People />
        </div>
      </div>
    </>
  );
};

export default Chat;
