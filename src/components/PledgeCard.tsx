import { useState } from "react";
import { usePledgeData } from "../contexts/PledgeDataContext";
import Paragraph from "../layouts/Paragraph";
import Button from "./Button";

function PledgeCard({
  id,
  title,
  description,
  minPledge = 1,
  numLeft = 1,
  noReward = false,
}: {
  id: string;
  title: string;
  description: string;
  minPledge?: number;
  numLeft?: number;
  noReward?: boolean;
}) {
  const outOfStock = numLeft === 0;

  const { modalState, dispatch } = usePledgeData();

  const active = id === modalState;

  const [pledgeAmount, setPledgeAmount] = useState(minPledge);

  return (
    <div
      onClick={() => dispatch({ type: "setModal", payload: { id } })}
      className={`border-2 group ${
        active ? "border-moderate-cyan" : "cursor-pointer"
      } rounded-lg ${outOfStock ? "opacity-35 pointer-events-none" : ""}`}
    >
      <div className="p-5 sm:p-8 grid grid-cols-pledgeCard-2 gap-y-5 gap-x-2 md:grid-cols-pledgeCard-3">
        <div
          className={`self-center h-6 w-6 flex items-center justify-center rounded-full border before:content-[''] before:block before:w-3/5 before:h-3/5 ${
            active
              ? "before:bg-moderate-cyan"
              : "group-hover:border-moderate-cyan"
          } before:rounded-full`}
        ></div>
        <div className="flex flex-col md:flex-row md:gap-6">
          <h3
            className={`font-bold mb-1 md:mb-0 ${
              !active ? "group-hover:text-moderate-cyan" : ""
            }`}
          >
            {title}
          </h3>
          {!noReward && (
            <h4 className="font-semibold text-moderate-cyan">
              Pledge ${minPledge} or more
            </h4>
          )}
        </div>
        <Paragraph className="col-span-full">{description}</Paragraph>
        {!noReward && (
          <p className="text-dark-gray flex items-center gap-2 md:row-start-1 md:col-start-3">
            <span className="font-bold text-xl text-black">{numLeft}</span>
            left
          </p>
        )}
      </div>
      {active && (
        <div className="p-5 sm:p8 border-t-2 sm:flex items-center justify-between gap-16">
          <Paragraph className="text-center mb-6 sm:mb-0 shrink-0">
            Enter your pledge
          </Paragraph>
          <div className="flex flex-col justify-start sm-2:flex-row sm-2:justify-between gap-4">
            <div className="relative before:content-['$'] before:absolute before:top-1/2 before:left-5 before:block before:text-gray-300 before:z-10 before:-translate-y-1/2 before:font-bold">
              <input
                type="text"
                value={pledgeAmount}
                onChange={(e) => setPledgeAmount(Number(e.target.value))}
                className="py-4 border-2 rounded-full w-full shrink-1 focus:outline-none relative focus:border-2 focus:border-moderate-cyan h-full pl-9 font-bold"
              />
            </div>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "makePledge", payload: { id, pledgeAmount } });
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PledgeCard;
