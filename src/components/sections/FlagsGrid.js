import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FlagsGrid = ({ input }) => {
  const [flagData, setFlagData] = useState([]);

  useEffect(() => {
    fetchFlagData();
  }, [flagData]);

  const fetchFlagData = async () => {
    try {
      const res = await fetch("https://restcountries.com/v2/all");
      const data = await res.json();
      setFlagData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const filterData = flagData.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(input);
    }
  });

  return (
    <>
      <div className="grid grid-cols-1 gap-10 p-10 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 dark:bg-[#202C37]">
        {flagData &&
          filterData.map((index, id) => (
            <div
              key={id}
              className="bg-white dark:bg-[#2B3945]  drop-shadow-md max-w-[350px] rounded-xl mx-auto hover:scale-[1.050] transition-transform w-full"
            >
              <Link to={"name/" + index.name}>
                <img
                  src={index.flags.svg}
                  alt="flags"
                  className="rounded-t-xl object-cover w-full h-[200px]"
                />

                <div className="p-4 pb-10">
                  <h1 className="text-xl font-bold mb-4">{index.name}</h1>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-1">
                      <h1 className="font-semibold">Population:</h1>
                      <p className="text-[#858585] dark:text-[#fafafa]">
                        {index.population.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <h1 className="font-semibold">Region:</h1>
                      <p className="text-[#858585] dark:text-[#fafafa]">
                        {index.region}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <h1 className="font-semibold">Capital:</h1>
                      <p className="text-[#858585] dark:text-[#fafafa]">
                        {index.capital}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default FlagsGrid;
