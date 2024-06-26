import { createContext, useContext, useReducer } from "react";
import {
  IPayload,
  IPledgeData,
  IPledgeDataProvider,
} from "../types/pledgeData";

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
  totalPledged: 89914,
  totalBackers: 5007,
  daysLeft: 56,
  pledgeError: false,
};

// reducer function that contains the logic for updating the state
function reducer(
  state: IPledgeData,
  action: {
    type: string;
    payload: IPayload;
  }
): IPledgeData {
  switch (action.type) {
    case "openPledgeModal":
      return { ...state, modalState: "open", pledgeError: false };
    case "closeModal":
      // if coming from thanks modal
      if (state.modalState === "thanks") {
        document
          .getElementById("stats-section")!
          .scrollIntoView({ behavior: "smooth", block: "center" });
      }

      return { ...state, modalState: "closed", pledgeError: false };
    case "setModal":
      return {
        ...state,
        modalState: String(action.payload.id),
        pledgeError: false,
      };
    case "toggleBookmark":
      return { ...state, bookMarked: !state.bookMarked };
    case "makePledge":
      // if minimum amount of 1 is not met for "pledge with no reward"
      if (
        action.payload.id === "no-reward" &&
        action.payload.pledgeAmount < 1
      ) {
        return { ...state, pledgeError: true };
      }

      // if item has a reward
      if (action.payload.id !== "no-reward") {
        if (
          action.payload.pledgeAmount <
          state.items.filter((item) => item.id === action.payload.id)[0][
            "minPledge"
          ]
        ) {
          // if minimum amount is not met
          return { ...state, pledgeError: true };
        }
      }

      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id)
            return { ...item, numLeft: item.numLeft - 1 };
          else return item;
        }),
        modalState: "thanks",
        totalBackers: state.totalBackers + 1,
        totalPledged: state.totalPledged + action.payload.pledgeAmount,
      };
    default:
      throw new Error("Action unknown");
  }
}

const PledgeDataContext = createContext<IPledgeDataProvider | undefined>(
  undefined
);

function PledgeDataProvider({ children }: { children: React.ReactNode }) {
  const [
    {
      items,
      modalState,
      bookMarked,
      totalPledged,
      totalBackers,
      daysLeft,
      pledgeError,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <PledgeDataContext.Provider
      value={{
        items,
        modalState,
        bookMarked,
        totalPledged,
        totalBackers,
        daysLeft,
        pledgeError,
        dispatch,
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
