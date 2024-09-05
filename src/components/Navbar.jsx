import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white backdrop-blur-sm top-0 z-50">
      <div className="ml-32 max-w-6xl mx-auto flex items-center justify-between py-4">
        <Link to="/hackathon">
          <img className="h-12" src="/image/images.png" alt="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
