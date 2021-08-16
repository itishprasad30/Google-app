import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const SearchHandler = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Overpass+Mono:wght@300&display=swap"
          rel="stylesheet"
        ></link>
        <title>Google by Itish Prasad</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
        />
      </Head>

      {/* Header */}
      <Header />
      {/* Body */}
      <form className="flex flex-col flex-grow items-center mt-40 w-4/5">
        <Image
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="google"
          height={100}
          width={300}
        />
        <div className="flex mt-5 w-full hover:shadow-lg focus-within:shadow-lg max-w-md border border-gray-300 px-5 py-2 items-center rounded-full sm:max-w-xl md:max-w-2xl xl:max-w-3xl">
          <SearchIcon className="h-10 mr-3 text-gray-600" />
          <input
            type="text"
            className="focus:outline-none flex-grow"
            onClick={SearchHandler}
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-8" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 mt-8 justify-center sm:space-y-0 sm:flex-row sm:space-x-4 ">
          <button className="btn" onClick={SearchHandler}>
            Google Search
          </button>
          <button className="btn" onClick={SearchHandler}>
            I feel lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
