import { createContext, useContext, useReducer } from "react";
import { IPledgeData, IPledgeDataProvider } from "../types/pledgeData";

// initial state of the application
const initialState = {
  items: [
    {
      id: "bamboo",
      title: "Bamboo Stand",
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
      minPledge: 25,
      numLeft: 101,
    },
    {
      id: "black-edition",
      title: "Black Edition Stand",
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
      minPledge: 75,
      numLeft: 64,
    },
    {
      id: "mahogany-edition",
      title: "Mahogany Special Edition",
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
      minPledge: 200,
      numLeft: 0,
    },
  ],
  modalState: "closed", // "open" [all item ids], "thanks"
  bookMarked: false,
};

// reducer function that contains the logic for updating the state
function reducer(
  state: IPledgeData,
  action: { type: string; payload: number }
) {
  switch (action.type) {
    case "openPledgeModal":
      return { ...state, modalState: "open" };
    case "closeModal":
      return { ...state, modalState: "close" };
    case "toggleBookmark":
      return { ...state, bookMarked: !state.bookMarked };
    case "setModal":
      return { ...state, modalState: action.payload };
    default:
      throw new Error("Action unknown");
  }
}

const PledgeDataContext = createContext<IPledgeData>({
  items: [],
  modalState: "closed",
  bookMarked: false,
});

function PledgeDataProvider({ children }: { children: React.ReactNode }) {
  const [{ items, modalState, bookMarked }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <PledgeDataContext.Provider
      value={
        {
          items,
          modalState,
          bookMarked,
          dispatch,
        } as IPledgeDataProvider
      }
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
  return context as IPledgeDataProvider;
}

// eslint-disable-next-line react-refresh/only-export-components
export { PledgeDataProvider, usePledgeData };
