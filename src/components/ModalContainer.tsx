import { usePledgeData } from "../contexts/PledgeDataContext";
import PledgeModal from "./PledgeModal";
import ThanksModal from "./ThanksModal";

function ModalContainer() {
  const { openPledgeModal, openThanksModal } = usePledgeData();

  return (
    <div>
      {openPledgeModal && <PledgeModal />}
      {openThanksModal && <ThanksModal />}
    </div>
  );
}

export default ModalContainer;
