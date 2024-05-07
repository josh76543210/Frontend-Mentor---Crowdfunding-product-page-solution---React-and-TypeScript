import { usePledgeData } from "../contexts/PledgeDataContext";
import Modal from "../layouts/Modal";
import Paragraph from "../layouts/Paragraph";
import PledgeCard from "./PledgeCard";

function PledgeModal() {
  const { items, modalState } = usePledgeData();

  return (
    <Modal>
      <h2 id="pledge-modal-title" className="font-bold text-lg mb-6">
        Back this project
      </h2>
      <Paragraph id="pledge-modal-description" className="mb-6">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </Paragraph>
      <div className="flex flex-col gap-6">
        <PledgeCard
          id="no-reward"
          title="Pledge with no reward"
          description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
          noReward
        />
        {items.map((item) => (
          <PledgeCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            minPledge={item.minPledge}
            numLeft={item.numLeft}
          />
        ))}
      </div>
    </Modal>
  );
}

export default PledgeModal;
