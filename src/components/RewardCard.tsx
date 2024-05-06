import Paragraph from "../layouts/Paragraph";
import Button from "./Button";

function RewardCard({
  title,
  description,
  minPledge,
  numLeft,
}: {
  title: string;
  description: string;
  minPledge: number;
  numLeft: number;
}) {
  const outOfStock = numLeft === 0;

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
      <Paragraph>{description}</Paragraph>
      <div className="sm:flex justify-between items-center">
        <p className="text-dark-gray flex items-center gap-2 mb-8 sm:mb-0">
          <span className="font-bold text-4xl text-black">{numLeft}</span>
          left
        </p>
        <Button disable={outOfStock}>
          {outOfStock ? "Out of Stock" : "Select Reward"}
        </Button>
      </div>
    </div>
  );
}

export default RewardCard;
