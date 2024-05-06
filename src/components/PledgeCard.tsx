import Paragraph from "../layouts/Paragraph";
import Button from "./Button";

function PledgeCard({
  title,
  description,
  minPledge = 1,
  numLeft = 1,
  active = false,
  noReward = false,
}: {
  title: string;
  description: string;
  minPledge?: number;
  numLeft?: number;
  active?: boolean;
  noReward?: boolean;
}) {
  const outOfStock = numLeft === 0;

  return (
    <div
      className={`border-2 group ${
        active ? "border-moderate-cyan" : "cursor-pointer"
      } rounded-lg sm:p-8 ${
        outOfStock ? "opacity-35 pointer-events-none" : ""
      }`}
    >
      <div className="p-5 grid grid-cols-pledgeCard gap-y-5 gap-x-2">
        <div
          className={`self-center h-6 w-6 flex items-center justify-center rounded-full border before:content-[''] before:block before:w-3/5 before:h-3/5 ${
            active ? "before:bg-moderate-cyan" : ""
          } before:rounded-full`}
        ></div>
        <div className="flex flex-col">
          <h3
            className={`font-bold mb-1 sm:mb-0 ${
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
          <p className="text-dark-gray flex items-center gap-2">
            <span className="font-bold text-xl text-black">{numLeft}</span>
            left
          </p>
        )}
      </div>
      {active && (
        <div className="p-5 border-t-2">
          <Paragraph className="text-center mb-6">Enter your pledge</Paragraph>
          <div className="flex justify-between gap-4">
            <div className="relative before:content-['$'] before:absolute before:top-1/2 before:left-5 before:block before:text-gray-300 before:z-10 before:-translate-y-1/2 before:font-bold">
              <input
                type="text"
                defaultValue={minPledge}
                className="border-2 rounded-full w-full shrink-1 focus:outline-none relative focus:border-2 focus:border-moderate-cyan h-full pl-9 font-bold"
              />
            </div>
            <Button>Continue</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PledgeCard;
