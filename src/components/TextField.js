import { useState } from "react";
import FlagsGrid from "./sections/FlagsGrid";
// import MenuButton from "./MenuButton";

const TextField = () => {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <div className="flex md:px-8 flex-col md:flex-row md:justify-between md:items-center">
        <div className="bg-white dark:bg-[#2B3945] m-4 drop-shadow-md flex items-center gap-6 max-w-[450px] w-full pl-6 rounded-lg">
          <i className="ri-search-line text-xl text-gray-500 "></i>
          <input
            type="search"
            value={inputText}
            onChange={inputHandler}
            placeholder="Search for a country..."
            className="w-full p-4 focus:outline-none focus:text-gray-700 dark:focus:text-white rounded-lg dark:bg-[#2B3945]"
          />
        </div>

        {/* <MenuButton /> */}
      </div>
      <FlagsGrid input={inputText} />
    </>
  );
};

export default TextField;
