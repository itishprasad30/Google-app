import {
  CogIcon,
  MenuIcon,
  MicrophoneIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/solid";
import Image from "next/dist/client/image";
import Avatar from "./Avatar";
import { useRouter } from "next/router";
import { useRef } from "react";
import HeaderOption from "./HeaderOptions";

const HeaderSearch = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const previousTerm = router.query.term;

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6 ">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google image"
          height={40}
          width={120}
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-8 mr-5 cursor-pointer border border-gray-200 rounded-full shadow-lg items-center max-w-2xl ">
          <input
            ref={searchInputRef}
            type="text"
            defaultValue={previousTerm}
            className=" flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-6 sm:mr-3 text-gray-600 cursor-pointer transition duration-500 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className=" h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <CogIcon className="h-6 mr-6 hidden sm:inline-flex ml-auto" />
        <MenuIcon className="h-6 mr-6 hidden sm:inline-flex " />

        <Avatar
          className="ml-auto"
          url="https://avatars.githubusercontent.com/u/60768713?s=400&u=8526447ad3c09917f2a2736a5f50b07680691ebe&v=4"
        />
      </div>
      <HeaderOption />
    </header>
  );
};

export default HeaderSearch;
