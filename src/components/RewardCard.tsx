import { usePledgeData } from "../contexts/PledgeDataContext";
import Paragraph from "../layouts/Paragraph";
import Button from "./Button";

function RewardCard({
  id,
  title,
  description,
  minPledge,
  numLeft,
}: {
  id: string;
  title: string;
  description: string;
  minPledge: number;
  numLeft: number;
}) {
  const outOfStock = numLeft === 0;

  const { dispatch } = usePledgeData();

  return (
    <div
      className={`border rounded-lg p-5 sm:p-8 ${
        outOfStock ? "opacity-35" : ""
      }`}
    >
      <div className="mb-8 sm:flex justify-between">
        <h3 className="font-bold mb-1 sm:mb-0">{title}</h3>
        <h4 className="font-semibold text-moderate-cyan">
          Pledge ${minPledge} or more
        </h4>
      </div>
      <Paragraph className="mb-6">{description}</Paragraph>
      <div className="sm:flex justify-between items-center">
        <p className="text-dark-gray flex items-center gap-2 mb-8 sm:mb-0">
          <span className="font-bold text-4xl text-black">{numLeft}</span>
          left
        </p>
        <Button
          disable={outOfStock}
          onClick={() => dispatch({ type: `setModal`, payload: id })}
        >
          {outOfStock ? "Out of Stock" : "Select Reward"}
        </Button>
      </div>
    </div>
  );
}

export default RewardCard;
