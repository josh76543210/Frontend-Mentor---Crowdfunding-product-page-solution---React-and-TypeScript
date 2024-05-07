import { usePledgeData } from "../contexts/PledgeDataContext";
import Paragraph from "../layouts/Paragraph";
import Section from "../layouts/Section";
import RewardCard from "./RewardCard";

function AboutSection() {
  const { items } = usePledgeData();

  return (
    <Section>
      <h2 className="font-bold text-xl mb-6">About this project</h2>
      <Paragraph className="mb-6">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </Paragraph>
      <Paragraph className="mb-6">
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </Paragraph>
      <div className="mt-10 sm:mt-12 flex flex-col gap-6 sm:gap-8">
        {items.map((item) => (
          <RewardCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            minPledge={item.minPledge}
            numLeft={item.numLeft}
          />
        ))}
      </div>
    </Section>
  );
}

export default AboutSection;
