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
        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-32 gap-8 mt-8 lg:mt-6">
          <div className={`order-2 lg:order-1`}>
            <div className="">
              <h2 className="text-base lg:text-3xl uppercase font-Bellefair opacity-50 mt-44 lg:mt-0">
                {selectedPeople.role}
              </h2>
              <h3 className="text-2xl lg:text-5xl uppercase font-Bellefair mt-3 lg:mt-8">
                {selectedPeople.name}
              </h3>
              <p className="text-base lg:text-lg font-Barlow mt-6 lg:mt-12 mx-3 lg:mx-0 lg:w-[444px]">
                {selectedPeople.bio}
              </p>
              <div className="flex flex-row mt-24">
                <button
                  data-crew="Douglas Hurley"
                  className={`crew-tab ${selectedTab === "Douglas Hurley" ? "active" : ""}
`}
                  onClick={handleClick}
                ></button>
                <button
                  data-crew="Mark Shuttleworth"
                  className={`crew-tab ${selectedTab === "Mark Shuttleworth" ? "active" : ""}
                  `}
                  onClick={handleClick}
                ></button>
                <button
                  data-crew="Victor Glover"
                  className={`crew-tab ${selectedTab === "Victor Glover" ? "active" : ""}
                  `}
                  onClick={handleClick}
                ></button>
                <button
                  data-crew="Anousheh Ansari"
                  className={`crew-tab ${selectedTab === "Anousheh Ansari" ? "active" : ""}
                  `}
                  onClick={handleClick}
                ></button>
              </div>
            </div>
          </div>
          <div
            id="image-container"
            className="flex flex-col items-center order-1 lg:order-2"
          >
            <img
              src={selectedPeople.images}
              alt={`Picture of ${selectedPeople.name}`}
              className="h-[650px]"
            />
            <hr className="bg-white h-[1px] w-5/6 opacity-50 lg:hidden" />
          </div>
        </div>
      )}
    </>
  );
};

export default CrewContainer;
