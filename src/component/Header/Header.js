import "./Header.css";
const Header = () => {
  return (
    <span className="header" onClick={(e) => window.scroll(0, 0)}>
      {" "}
      🎬 Baba CineTV 🎥
    </span>
  );
};

export default Header;
