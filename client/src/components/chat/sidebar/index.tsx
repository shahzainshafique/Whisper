import { Link } from "react-router-dom";
import { FaRegBell, FaRegEnvelope, FaRegTrashAlt } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import { SignedIn, UserButton } from "@clerk/clerk-react";

const SideBar = () => {
  return (
    <>
      <section className="hidden lg:flex justify-between flex-col gap-3 h-screen w-[6%] bg-[#010019] rounded-r-2xl py-10">
        <img src="/phoenix.png" alt="logo" className="self-center h-8 " />
        <div className="flex flex-col gap-[5rem] self-center">
          <Link to="/">
            <FaRegEnvelope color="white" size={20} />
          </Link>
          <Link to="/">
            <IoMdChatbubbles color="white" size={20} />
          </Link>
          <Link to="/">
            <FaRegBell color="white" size={20} />
          </Link>
          <Link to="/">
            <FaRegTrashAlt color="white" size={20} />
          </Link>
        </div>
        <div className="self-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </section>
      <section className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#010019] p-5 flex justify-around items-center border-t border-gray-300">
        <Link to="/">
          <FaRegEnvelope color="white" size={20} />
        </Link>
        <Link to="/">
          <IoMdChatbubbles color="white" size={20} />
        </Link>
        <Link to="/">
          <FaRegBell color="white" size={20} />
        </Link>
        <Link to="/">
          <FaRegTrashAlt color="white" size={20} />
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </section>
    </>
  );
};

export default SideBar;
