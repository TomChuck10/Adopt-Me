import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
    </div>
  );
};

export default Navbar;
