import Modal from "../layouts/Modal";

import checkIcon from "../assets/images/icon-check.svg";
import Button from "./Button";
import Paragraph from "../layouts/Paragraph";
import { usePledgeData } from "../contexts/PledgeDataContext";

function ThanksModal() {
  const { dispatch } = usePledgeData();
  return (
    <Modal
      className="py-10 max-w-lg"
      classNameOverlay="py-6 lg:py-6"
      noCloseIcon
    >
      <div className="text-center flex flex-col items-center gap-8">
        <img src={checkIcon} alt="" />
        <h2 className="text-lg font-bold">Thanks for your support!</h2>
        <Paragraph>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </Paragraph>
        <Button
          ariaLabel="close"
          onClick={() => dispatch({ type: "closeModal" })}
        >
          Got it!
        </Button>
      </div>
    </Modal>
  );
}

export default ThanksModal;
