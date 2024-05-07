import { createContext, useState, useContext } from "react";
import { IPledgeData } from "../types/pledgeData";

// const initialState = {
//   items: [
//     {
//       id: "bamboo",
//       title: "Bamboo Stand",
//       description:
//         "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
//       minPledge: 25,
//       numLeft: 101,
//     },
//   ],
//   status: "default", // [all item ids], "thanks"
// };

const PledgeDataContext = createContext<IPledgeData>({
  activeReward: "",
  setActiveReward: () => {},
  openPledgeModal: false,
  setOpenPledgeModal: () => {},
  openThanksModal: false,
  setOpenThanksModal: () => {},
});

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
