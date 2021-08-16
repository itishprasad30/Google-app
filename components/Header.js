import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

function Header() {
  function gmailOnClick() {
    window.open("https://www.gmail.com", "_blank").focus();
  }

  function imageOnClick() {
    window.open("https://photos.google.com/", "_blank").focus();
  }
  return (
    <header className="flex p-5 w-full justify-between text-sm text-gray-700">
      {/* left */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      {/* Right */}
      <div className="flex space-x-4 items-center">
        <p className="link" onClick={gmailOnClick}>
          Gmail
        </p>
        <p className="link" onClick={imageOnClick}>
          Images
        </p>
        {/* Icon */}
        <ViewGridIcon className="h-10 w-10 p-1 rounded-full hover:bg-gray-200  cursor-pointer " />
        {/* Avatar */}
        <Avatar url="https://avatars.githubusercontent.com/u/60768713?s=400&u=8526447ad3c09917f2a2736a5f50b07680691ebe&v=4" />
      </div>
    </header>
  );
}

export default Header;
