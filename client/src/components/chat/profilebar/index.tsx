import { BsThreeDots } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useUser } from '@clerk/clerk-react';


const ProfileBar = ({ name, status }: { name: string; status: string }) => {
  const { user } = useUser();
  console.log('user',user);
  return (
    <section className="hidden lg:flex justify-between items-center max-h-[5rem] content-center bg-white p-5 rounded-xl ">
      <div className="flex flex-row items-center space-x-3">
        <div className="relative inline-block">
          <img
            src="/av.jpg"
            className="h-12 w-12 rounded-full object-cover"
            alt="av"
          />
          {status == "Online" && (
            <span className="absolute bottom-0 right-0 bg-[#31ce6f] h-4 w-4 animate-pulse rounded-full border-2 border-white" />
          )}
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-xl">{name ?? name}</p>
          <p className="text-slate-500 text-md truncate max-w-[14rem]">
            {status ?? status}
          </p>
        </div>
      </div>
{user&& user.id}
      <div className="flex flex-row space-x-4 items-center">
        <button className="py-3 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border bg-white text-black hover:bg-black border-black hover:text-white disabled:opacity-50 disabled:pointer-events-none">
          Profile
        </button>
        <button className="py-3 px-7  inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border bg-black text-white hover:bg-white border-black hover:text-black disabled:opacity-50 disabled:pointer-events-none">
          Call
        </button>
        <div className="h-11 border-l border-gray-300" />
        <FaMagnifyingGlass />
        <BsThreeDots />
      </div>
    </section>
  );
};

export default ProfileBar;
