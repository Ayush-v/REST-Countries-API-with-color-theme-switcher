import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const FlagsDetail = () => {
  const navigate = useNavigate();
  const [flagDetail, setFlagDetail] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2].toLowerCase();

  const fetchDetails = async () => {
    await fetch("https://restcountries.com/v2/name/" + path)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFlagDetail(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="m-8 drop-shadow-lg bg-white dark:bg-[#2B3945] max-w-fit px-6 py-2 flex gap-2 hover:scale-105 transition-transform"
      >
        <i className="ri-arrow-left-line"></i>
        Back
      </button>

      {flagDetail &&
        flagDetail.map((index, id) => (
          <div
            key={id}
            className="grid grid-cols-1 p-8 justify-items-center md:grid-cols-2"
          >
            <img
              src={index.flags.svg}
              alt="flag"
              className="sm:max-w-[450px] h-auto bg-cover mb-12 drop-shadow-lg justify-self-start"
            />

            <div className="flex flex-col gap-14 lg:flex-row lg:justify-center lg:mt-10 justify-self-center">
              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-bold mb-4">{index.name}</h1>
                <div className="flex gap-1">
                  <h1 className="font-semibold">Native Name:</h1>
                  <p className="text-zinc-700 dark:text-[#fafafa]">
                    {index.nativeName}
                  </p>
                </div>
                <div className="flex gap-1">
                  <h1 className="font-semibold">Population:</h1>
                  <p className="text-zinc-700 dark:text-[#fafafa]">
                    {index.population.toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-1">
                  <h1 className="font-semibold">Region:</h1>
                  <p className="text-zinc-700 dark:text-[#fafafa]">
                    {index.region}
                  </p>
                </div>
                <div className="flex gap-1">
                  <h1 className="font-semibold">Sub Region:</h1>
                  <p className="text-zinc-700 dark:text-[#fafafa]">
                    {index.subregion}
                  </p>
                </div>
                <div className="flex gap-1">
                  <h1 className="font-semibold">Capital:</h1>
                  <p className="text-zinc-700 dark:text-[#fafafa]">
                    {index.capital}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-1">
                  <h1 className="font-semibold">Top Level Domain:</h1>
                  <p className="text-zinc-700 dark:text-[#fafafa]">
                    {index.topLevelDomain}
                  </p>
                </div>
                <div className="flex gap-1">
                  <h1 className="font-semibold">Currencies:</h1>
                  {index.currencies &&
                    index.currencies.map((i) => (
                      <p key={i} className="text-zinc-700 dark:text-[#fafafa]">
                        {i.name}
                      </p>
                    ))}
                </div>
                <div className="flex gap-1">
                  <h1 className="font-semibold">Languages:</h1>

                  {index.languages &&
                    index.languages.map((item, i) => (
                      <p key={i} className="text-zinc-700 dark:text-[#fafafa]">
                        {(i ? ", " : "") + item.name}
                      </p>
                    ))}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <h1 className="text-xl font-semibold">Border Countries:</h1>
                <div className="flex gap-2 flex-wrap">
                  {index.borders &&
                    index.borders.map((item, index) => (
                      <p
                        key={index}
                        className="bg-white drop-shadow-md py-1.5 px-8"
                      >
                        {item}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default FlagsDetail;
