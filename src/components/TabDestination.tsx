export interface ViewProps {
  css: string;
  onViewSelect: (tab: string) => void;
}

const Component = ({ css, onViewSelect }: ViewProps) => {
  const tabs = ["moon", "mars", "europa", "titan"];

  return (
    <>
      {tabs.map((tab, index) => (
        <div key={index} className="tab">
          <button
            className={css}
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
