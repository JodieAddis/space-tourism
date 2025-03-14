export interface ViewProps {
  css: string;
  selectedTab: string;
  onViewSelect: (tab: string) => void;
}

const Component = ({ css, selectedTab, onViewSelect }: ViewProps) => {
  const tabs = ["moon", "mars", "europa", "titan"];

  return (
    <>
      {tabs.map((tab, index) => (
        <div key={index} className="tab">
          <button
            className={`${css} ${selectedTab === tab ? "active" : ""}`}
            onClick={() => {
              onViewSelect(tab);
            }}
          >
            {tab}
          </button>
        </div>
      ))}
    </>
  );
};

export default Component;
