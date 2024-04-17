import People from "../components/people";
import SearchBar from "../components/searchbar";
import SideBar from "../components/sidebar";

const Chat = () => {
  return (
    <>
      <div className="flex gap-4 bg-[#eeeeee]">
        <SideBar />
        <div className="flex flex-col flex-1 max-w-[25%] mt-3">
          <SearchBar />
          <People />
        </div>
      </div>
    </>
  );
};

export default Chat;
