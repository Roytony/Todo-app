import {
  SearchIcon,
  DotsVerticalIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="h-16 flex items-center border-b border-gray-600 justify-between shadow-md px-28">
      <h2 className="text-gray-400 text-2xl font-semibold">#work</h2>
      <div className="text-gray-400 flex items-center space-x-4">
        <SearchIcon className="h-6 cursor-pointer" />
        <DotsVerticalIcon className="h-6 cursor-pointer" />
        <div className="bg-white px-4 py-2 cursor-pointer hover:shadow-xl rounded-lg">
          <PencilAltIcon className="h-6 text-black" />
        </div>
      </div>
    </header>
  );
};

export default Header;
