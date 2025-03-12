import { useState } from "react";
import TabDestination from "./TabDestination.tsx";
import { planetDestination } from "../data/destination";

const DestinationContainer = () => {
  const [selectedTab, setSelectedTab] = useState("moon");

  // Fonction pour gérer le changement d'onglet
  const handleViewSelect = (tab: string) => {
    setSelectedTab(tab);
  };

  // Trouver les données de la planète sélectionnée
  const selectedPlanet = planetDestination.find(
    (planet) => planet.planet === selectedTab
  );
  if (!selectedPlanet) {
    return <p>Error: data not found</p>;
  }

  return (
    <>
      {/* Si l'onglet sélectionné correspond à la planète, on affiche le contenu */}
      {selectedTab === selectedPlanet.planet && (
        <>
          <div className="mt-16">
            <h1 className="uppercase font-Barlow lg:text-[28px] text-center">
              <span className="text-white text-opacity-25 font-bold text-center mr-3">
                01
              </span>
              pick your destination
            </h1>
            <img
              src={`../../public/images/destination/image-${selectedPlanet.planet}.webp`}
              alt={`Picture of the planet ${selectedPlanet.planet}`}
              className="w-[170px] lg:w-5/6 lg:mt-24 mt-10"
            />
          </div>
          <div className="w-[445px] lg:mt-36">
            <div className="tab-content flex flex-row justify-center mt-6 lg:mt-0">
              <TabDestination
                onViewSelect={handleViewSelect}
                css="m-5 font-Barlow uppercase text-base"
              />
            </div>
            <div className="mx-5 lg:mx-0 lg:mt-6">
              <h2 className="font-Bellefair uppercase text-6xl lg:text-[100px] text-center lg:text-left">
                {selectedPlanet.planet}
              </h2>
              <p className="text-Barlow text-lg text-center lg:text-left mt-4 lg:mt-6 mx-10 lg:mx-0">
                {selectedPlanet.description}
              </p>
            </div>
            <hr className="bg-white opacity-50 mt-8 lg:mt-12 mx-14 lg:mx-0" />
            <div className="flex flex-col items-center lg:flex-row mt-8 lg:mt-8">
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
        </>
      )}
    </>
  );
};

export default DestinationContainer;
