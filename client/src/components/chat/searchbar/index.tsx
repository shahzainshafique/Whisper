import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <section className="hidden lg:flex justify-evenly items-center max-h-[5rem] content-center bg-white p-5 rounded-xl ">
      <h2 className="text-3xl font-bold text-gray-800">Chat</h2>
      <div className=" relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-3xl text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <FaMagnifyingGlass />
        </button>
      </div>
      <button className="w-10 h-10 bg-orange-500 rounded-full text-white flex justify-center shadow-md cursor-pointer">
        <span className="relative w-full h-full flex items-center justify-center">
          <span className="text-xl font-bold">+</span>
        </span>
      </button>
    </section>
  );
};

export default SearchBar;
