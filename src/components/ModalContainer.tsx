import { usePledgeData } from "../contexts/PledgeDataContext";
import PledgeModal from "./PledgeModal";
import ThanksModal from "./ThanksModal";

function ModalContainer() {
  const { modalState } = usePledgeData();

  return (
    <div>
      {modalState === "open" && <PledgeModal />}
      {modalState === "thnaks" && <ThanksModal />}
    </div>
  );
}

export default ModalContainer;
