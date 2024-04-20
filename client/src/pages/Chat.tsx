import People from "../components/people";
import ProfileBar from "../components/profilebar";
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
        <div className="flex flex-col flex-grow max-w-full space-y-5 mt-3 mr-4">
          <ProfileBar name={"Jane Smith"} status={"Online"} />
        </div>
      </div>
    </>
  );
};

export default Chat;
