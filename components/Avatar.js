const Avatar = ({ url }) => {
  function imageOnClick() {
    window.open("https://www.github.com/itishprasad30", "_blank").focus();
  }
  return (
    <img
      loading="lazy"
      src={url}
      className="h-10 rounded-full cursor-pointer  transition duration-150 transform hover:scale-110"
      alt="profile pic"
      onClick={imageOnClick}
    />
  );
};

export default Avatar;
