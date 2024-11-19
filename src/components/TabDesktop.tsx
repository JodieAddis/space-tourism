// import { useState } from "react";
// // import { ViewProps } from "../types/interface";
// export interface ViewProps {
//   onViewSelect: (view: string) => void;
//   css: string;
// }

// const Component = ({ onViewSelect, css }: ViewProps) => {
//   const tabs = ["moon", "mars", "europa", "titan"];
//   const [selected, setSelectedTab] = useState(0);

//   const handleClick = (image: string) => {
//     let planetName = "";
//     switch (image) {
//       case "moon":
//         planetName = "moon";
//         break;
//       case "mars":
//         planetName = "mars";
//         break;
//       case "europa":
//         planetName = "europa";
//         break;
//       case "titan":
//         planetName = "titan";
//         break;
//     }
//     onViewSelect(planetName);
//     return planetName;
//   };

//   return (
//     <>
//       {tabs.map((tab, index) => (
//         <div key={index}>
//           <button
//             className={css}
//             onClick={() => {
//               handleClick(tab);
//               setSelectedTab(index);
//             }}
//           >
//             {tab}
//           </button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Component;

import { useState } from "react";

export interface ViewProps {
  onViewSelect: (view: string) => void;
  css: string;
}

const Component = ({ onViewSelect, css }: ViewProps) => {
  const tabs = ["moon", "mars", "europa", "titan"];
  const [selected, setSelectedTab] = useState(0);

  const handleClick = (tab: string, index: number) => {
    setSelectedTab(index); // Mettre à jour l’onglet actif
    onViewSelect(tab); // Notifier le parent du nouvel onglet sélectionné
  };

  return (
    <>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${css} ${index === selected ? "active-tab" : ""}`}
          onClick={() => handleClick(tab, index)}
        >
          {tab}
        </button>
      ))}
    </>
  );
};

export default Component;
