import { BiSmile } from "react-icons/bi";
import { GrAttachment } from "react-icons/gr";

const WriteMessage = () => {
  return (
    <div className="hidden lg:flex p-4 w-full justify-center items-center bg-white rounded-xl">
      <GrAttachment
        size={23}
        className="hover:bg-slate-200 hover:rounded-full cursor-pointer"
      />
      <input
        className="ml-4 border-none w-full outline-none"
        type="text"
        placeholder="Write a message..."
      />
      <BiSmile
        size={23}
        className="hover:bg-slate-200 hover:rounded-full cursor-pointer"
      />
    </div>
  );
};

export default WriteMessage;
