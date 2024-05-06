import Modal from "../layouts/Modal";
import Paragraph from "../layouts/Paragraph";
import PledgeCard from "./PledgeCard";

function PledgeModal() {
  return (
    <Modal>
      <h2 id="pledge-modal-title" className="font-bold text-lg mb-6">
        Back this project
      </h2>
      <Paragraph id="pledge-modal-description">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </Paragraph>
      <PledgeCard />
    </Modal>
  );
}

export default PledgeModal;
