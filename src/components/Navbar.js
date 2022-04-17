import "remixicon/fonts/remixicon.css";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <nav className="bg-white dark:bg-[#2B3945] dark:text-white flex items-center justify-between p-6 h-20 drop-shadow-md">
      <h1 className="font-bold text-lg">Where in the world?</h1>

      <button
        className="flex gap-3 items-center"
        onClick={() => setToggle(!toggle)}
      >
        <i
          className={toggle ? "ri-sun-line text-lg" : "ri-moon-line text-lg"}
        ></i>
        <h3>{toggle ? "Light Mode" : "Dark Mode"}</h3>
      </button>
    </nav>
  );
};

export default Navbar;
