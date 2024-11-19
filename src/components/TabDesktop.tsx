import { set } from "astro/zod";
import { useState } from "react";
// import { ViewProps } from "../types/interface";
export interface ViewProps {
  onViewSelect: (view: string) => void;
  css: string;
}

const Component = ({ onViewSelect, css }: ViewProps) => {
  const tabs = ["moon", "mars", "europa", "titan"];
  const [selected, setSelectedTab] = useState(0); //Etat local de l'onglet actif

  const handleClick = (tab: string, index: number) => {
    setSelectedTab(index); //Mise à jour de l'état local
    onViewSelect(tab); // Notifier le parent avec le nom de la planète
  };

  return (
    <>
      {tabs.map((tab, index) => (
        <div key={index}>
          <button
            className={`${css} ${index === selected ? "active-tab" : ""}`}
            onClick={() => handleClick(tab, index)}
          >
            {tab}
          </button>
        </div>
      ))}
    </>
  );
};

export default Component;
