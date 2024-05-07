import { createContext, useState, useContext } from "react";

const PledgeDataContext = createContext();

function PledgeDataProvider({ children }: { children: React.ReactNode }) {
  const [activeReward, setActiveReward] = useState("");
  const [openPledgeModal, setOpenPledgeModal] = useState(false);
  const [openThanksModal, setOpenThanksModal] = useState(false);

  return (
    <PledgeDataContext.Provider
      value={{
        activeReward,
        setActiveReward,
        openPledgeModal,
        setOpenPledgeModal,
        openThanksModal,
        setOpenThanksModal,
      }}
    >
      {children}
    </PledgeDataContext.Provider>
  );
}

function usePledgeData() {
  const context = useContext(PledgeDataContext);
  // console.log(context);
  if (context === undefined)
    throw new Error(
      "PledgeDataContext was used outside of the PledgeDataProvider"
    );
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { PledgeDataProvider, usePledgeData };
