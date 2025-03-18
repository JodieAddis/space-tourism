import { useState } from "react";
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

  return (
    <>
      {selectedTab === selectedTech?.name && (
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:pl-32">
          {/* ONGLETS – gauche sur PC / dessous sur mobile */}
          <div className="flex justify-center lg:justify-around lg:flex-col lg:mr-12 order-2 lg:order-1 my-8 lg:my-0">
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

          {/* TEXTE – centre sur PC / après onglets sur mobile */}
          <div className="flex flex-col lg:flex-row lg:h-[300px] order-3 lg:order-2 mb-8">
            <div className="text-center lg:text-left">
              <h2 className="uppercase text-sm lg:text-base font-Barlow">
                the technology..
              </h2>
              <h3 className="uppercase font-Bellefair text-2xl lg:text-[56px] font-normal mt-5">
                {selectedTech.name}
              </h3>
              <p className="lg:w-[444px] text-base lg:text-lg font-Barlow mt-5 mx-6 lg:mx-0">
                {selectedTech.description}
              </p>
            </div>
          </div>

          {/* IMAGE – droite sur PC / en premier sur mobile */}
          <div className="order-1 lg:order-3">
            <img
              src={selectedTech.images}
              alt={`Image of ${selectedTech.name} technology`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TechnologyContainer;
