import { BiMicrophone } from "react-icons/bi";

const Mic = () => {
  return (
    <div className="flex items-center p-4 bg-white rounded-xl">
      <BiMicrophone
        size={23}
        className="hover:bg-slate-200 hover:rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Mic;
