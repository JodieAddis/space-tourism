import { useEffect, useState } from "react";
import { technologyData } from "../data/technology";

const TechnologyContainer = () => {
  const [selectedTab, setSelectedTab] = useState("launch vehicle");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tabTech = e.currentTarget.dataset.tech as string;
    setSelectedTab(tabTech);
    console.log("tab selected is", tabTech);
  };

  const selectedTech = technologyData.find(
    (tabTech) => tabTech.name === selectedTab
  );

  if (!selectedTab) {
    return <p>Error: data not found</p>;
  }

  const [largeScreen, setLargeScreen] = useState<boolean>(false);
  useEffect(() => {
    const widthScreen = () => {
      const width = window.innerWidth;
      setLargeScreen(width < 728);
    };

    widthScreen();
    window.addEventListener("resize", widthScreen);
    // Nettoyage à la sortie du composant
    return () => {
      window.removeEventListener("resize", widthScreen);
    };
  }, []);
  return (
    <>
      {selectedTab === selectedTech?.name && (
        <div className="w-full lg:h-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:pl-32">
          <div className="lg:h-full lg:flex lg:flex-row lg:items-center">
            <div className="flex justify-center lg:flex-col lg:justify-around order-2 lg:order-1 lg:mr-12  my-8 lg:my-0 lg:flex-1 lg:flex-grow lg:h-1/2">
              <button
                className={`tab-tech ${selectedTab === "launch vehicle" ? "active" : ""}`}
                data-tech="launch vehicle"
                onClick={handleClick}
              >
                1
              </button>
              <button
                className={`mx-6 lg:mx-0 tab-tech ${selectedTab === "space capsule" ? "active" : ""}`}
                data-tech="space capsule"
                onClick={handleClick}
              >
                2
              </button>
              <button
                className={`tab-tech ${selectedTab === "spaceport" ? "active" : ""}`}
                data-tech="spaceport"
                onClick={handleClick}
              >
                3
              </button>
            </div>
            <div className="lg:flex-1 lg:flex-grow lg:h-1/2 flex flex-col order-3 lg:order-2 mb-8 lg:mb-0 text-center lg:text-left lg:flex lg:flex-col lg:justify-evenly">
              <h2 className="uppercase text-sm lg:text-base font-Barlow">
                the technology..
              </h2>
              <h3 className="uppercase font-Bellefair text-2xl lg:text-[56px] font-normal mt-5 lg:w-[500px]">
                {selectedTech.name}
              </h3>
              <p className="lg:w-[444px] text-base lg:text-lg font-Barlow mt-5 mx-6 lg:mx-0">
                {selectedTech.description}
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-3 h-[527px]">
            <img
              id="img-tech"
              src={
                largeScreen
                  ? selectedTech.images.landscape
                  : selectedTech.images.portrait
              }
              alt={`Image of ${selectedTech.name} technology`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TechnologyContainer;
