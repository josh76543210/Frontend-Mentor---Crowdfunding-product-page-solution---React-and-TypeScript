import Paragraph from "../layouts/Paragraph";
import Button from "./Button";

function RewardCard() {
  return (
    <div className="border rounded-lg p-5 sm:p-8">
      <div className="mb-8 sm:flex justify-between">
        <h3 className="font-bold mb-1 sm:mb-0">Bamboo Stand</h3>
        <h4 className="font-semibold text-moderate-cyan">Pledge $25 or more</h4>
      </div>
      <Paragraph>
        You get an ergonomic stand made of natural bamboo. You've helped us
        launch our promotional campaign, and you'll be added to a special Backer
        member list.
      </Paragraph>
      <div className="sm:flex justify-between items-center">
        <p className="text-dark-gray flex items-center gap-2 mb-8 sm:mb-0">
          <span className="font-bold text-4xl text-black">101</span>
          left
        </p>
        <Button>Select Reward</Button>
      </div>
    </div>
  );
}

export default RewardCard;
