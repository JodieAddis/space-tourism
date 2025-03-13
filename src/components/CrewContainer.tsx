import { crewData } from "../data/crew";
import { useState } from "react";

const CrewContainer = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Douglas Hurley");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const people = e.currentTarget.dataset.crew as string;
    console.log("personne sélectionnée:", people);
    // les attributs data-* sont en fait récupérés en tant que string | undefined (pas un string strict), donc on doit vérifier le type d'abord
    if (typeof people === "string") {
      setSelectedTab(people);
      console.log("Personne sélectionnée:", people);
    } else {
      console.log("Aucune personne sélectionnée ou data-crew non défini");
    }
  };

  const selectedPeople = crewData.find((people) => people.name === selectedTab);
  if (!selectedPeople) {
    return <p>Error: data not found</p>;
  }
  return (
    <>
      {selectedTab === selectedPeople.name && (
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
                {selectedPeople.role}
              </h2>
              <h3 className="text-2xl lg:text-5xl uppercase font-Bellefair mt-3 lg:mt-8">
                {selectedPeople.name}
              </h3>
              <p className="text-base lg:text-lg font-Barlow mt-6 lg:mt-12 mx-3 lg:mx-0 lg:w-[444px]">
                {selectedPeople.bio}
              </p>
            </div>
            <div
              id="info-container-tab"
              className={` w-full flex justify-center lg:justify-start mt-8 lg:mt-36`}
            >
              <button
                data-crew="Douglas Hurley"
                className="crew-tab"
                onClick={handleClick}
              ></button>
              <button
                data-crew="Mark Shuttleworth"
                className="crew-tab"
                onClick={handleClick}
              ></button>
              <button
                data-crew="Victor Glover"
                className="crew-tab"
                onClick={handleClick}
              ></button>
              <button
                data-crew="Anousheh Ansari"
                className="crew-tab"
                onClick={handleClick}
              ></button>
            </div>
          </div>
          <div
            id="image-container"
            className="flex flex-col items-center order-1 lg:order-2"
          >
            <img
              src={selectedPeople.images}
              alt={`Picture of ${selectedPeople.name}`}
              className="w-1/2 lg:w-full lg:max-w-md lg:h-auto"
            />
            <hr className="bg-white h-[1px] w-5/6 opacity-50 lg:hidden" />
          </div>
        </div>
      )}
    </>
  );
};

export default CrewContainer;
