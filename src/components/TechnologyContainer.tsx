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
        <>
          <div className="flex flex-row lg:items-center lg:justify-between lg:pl-32">
            <div className="flex lg:flex-row lg:h-[300px]">
              <div className="flex flex-col justify-around mr-12">
                <button
                  className="tab-tech"
                  data-tech="launch vehicle"
                  onClick={handleClick}
                >
                  1
                </button>
                <button
                  className="tab-tech"
                  data-tech="space capsule"
                  onClick={handleClick}
                >
                  2
                </button>
                <button
                  className="tab-tech"
                  data-tech="spaceport"
                  onClick={handleClick}
                >
                  3
                </button>
              </div>
              <div>
                <h2 className="uppercase text-base font-Barlow">
                  the technology..
                </h2>
                <h3 className="uppercase font-Bellefair text-[56px] font-normal mt-2">
                  {selectedTech.name}
                </h3>
                <p className="w-[444px] text-lg font-Barlow mt-5">
                  {selectedTech.description}
                </p>
              </div>
            </div>
            <div>
              <img
                src={selectedTech.images}
                alt={`Image of ${selectedTech.name} technology`}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TechnologyContainer;
