import { useState } from "react";
import TabDestination from "./TabDestination.tsx";
import { planetDestination } from "../data/destination";

const DestinationContainer = () => {
  const [selectedTab, setSelectedTab] = useState("moon");

  const handleViewSelect = (tab: string) => {
    setSelectedTab(tab);
  };

  const selectedPlanet = planetDestination.find(
    (planet) => planet.planet === selectedTab
  );
  if (!selectedPlanet) {
    return <p>Error: data not found</p>;
  }

  return (
    <>
      {selectedTab === selectedPlanet.planet && (
        <div className="w-full flex flex-col lg:flex-row lg:justify-evenly">
          <div className="lg:mt-16 flex justify-center lg:items-center lg:ml-8">
            <img
              src={`/images/destination/image-${selectedPlanet.planet}.webp`}
              alt={`Picture of the planet ${selectedPlanet.planet}`}
              className=" w-[170px] lg:w-[445px] mt-10 lg:mt-0"
            />
          </div>
          <div className="lg:w-[445px] flex flex-col items-center">
            <div className="tab-content flex flex-row justify-center lg:self-start mt-6 lg:mt-0">
              <TabDestination
                onViewSelect={handleViewSelect}
                css="destination-tab"
                selectedTab={selectedTab}
              />
            </div>
            <div className="lg:mt-6">
              <h2 className="font-Bellefair uppercase text-6xl lg:text-[100px] text-center lg:text-left">
                {selectedPlanet.planet}
              </h2>
              <p className="text-Barlow text-lg text-center lg:text-left mt-4 lg:mt-6 mx-10 lg:mx-0">
                {selectedPlanet.description}
              </p>
            </div>
            <hr className="bg-white lg:opacity-50 mt-8 lg:h-[1px] lg:mt-12 lg:mx-0 lg:w-full w-5/6 " />
            <div className="flex flex-col items-center lg:flex-row lg:self-start mt-8 mb-12 lg:mb-0">
              <div className="text-center lg:text-left uppercase lg:mr-10">
                <p className="font-Barlow text-sm">
                  {selectedPlanet.distanceText}
                </p>
                <p className="font-Bellefair text-3xl mt-3 lg:mt-1">
                  {selectedPlanet.distanceNum}
                </p>
              </div>
              <div className="text-center lg:text-left uppercase mt-8 lg:mt-0">
                <p className="font-Barlow text-sm">{selectedPlanet.timeText}</p>
                <p className="font-Bellefair text-3xl mt-3 lg:mt-1">
                  {selectedPlanet.timeNum}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DestinationContainer;
