import Modal from "../layouts/Modal";
import Paragraph from "../layouts/Paragraph";
import PledgeCard from "./PledgeCard";

function PledgeModal() {
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
          title="Pledge with no reward"
          description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
          noReward
        />
        <PledgeCard
          title="Bamboo Stand"
          description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
          minPledge={25}
          numLeft={101}
        />
        <PledgeCard
          title="Black Edition Stand"
          description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
          minPledge={75}
          numLeft={64}
          active
        />
        <PledgeCard
          title="Mahogany Special Edition"
          description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
          minPledge={200}
          numLeft={0}
        />
      </div>
    </Modal>
  );
}

export default PledgeModal;
