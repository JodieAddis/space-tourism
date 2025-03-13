import { crewData } from "../data/crew";
import { useState } from "react";

const CrewContainer = () => {
  const [selectedPeople, setSelectedPeople] =
    useState<string>("Douglas Hurley");

  const handleViewSelect = (tab: string) => {
    setSelectedPeople(tab);
  };
  return (
    <>
      {crewData.map((data) => (
        <div
          id="container"
          className="flex flex-col lg:flex-row gap-8 lg:w-full lg:h-full mt-8 lg:mt-0"
        >
          <div
            id="info-container"
            className={`order-2 lg:order-1 flex items-center lg:items-start lg:justify-center`}
          >
            <div
              id="info-container-text"
              className={`text-center lg:text-left`}
            >
              <h2 className="text-base lg:text-3xl uppercase font-Bellefair opacity-50 mt-8 lg:mt-0">
                {data.role}
              </h2>
              <h3 className="text-2xl lg:text-5xl uppercase font-Bellefair mt-3 lg:mt-8">
                {data.name}
              </h3>
              <p className="text-base lg:text-lg font-Barlow mt-6 lg:mt-12 mx-3 lg:mx-0 lg:w-[444px]">
                {data.bio}
              </p>
            </div>
            <div
              id="info-container-tab"
              className={` w-full flex justify-center lg:justify-start mt-8 lg:mt-36`}
            >
              <slot name="tab"></slot>
              {/*slot pour intégrer les différents onglets */}
              <span slot="tab" className="crew-tab"></span>
              <span slot="tab" className="crew-tab"></span>
              <span slot="tab" className="crew-tab"></span>
              <span slot="tab" className="crew-tab"></span>
            </div>
          </div>
          <div
            id="image-container"
            className="flex flex-col items-center order-1 lg:order-2"
          >
            <img
              src={data.images}
              alt={`Picture of ${data.name}`}
              className="w-1/2 lg:w-full lg:max-w-md lg:h-auto"
            />
            <hr className="bg-white h-[1px] w-5/6 opacity-50 lg:hidden" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CrewContainer;
