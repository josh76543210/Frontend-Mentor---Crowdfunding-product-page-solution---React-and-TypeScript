import Paragraph from "../layouts/Paragraph";
import Section from "../layouts/Section";
import RewardCard from "./RewardCard";

function AboutSection() {
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
        <RewardCard
          title="Bamboo Stand"
          description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list."
          minPledge={25}
          numLeft={101}
        />
        <RewardCard
          title="Black Edition Stand"
          description="You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included."
          minPledge={75}
          numLeft={64}
        />
        <RewardCard
          title="Mahogany Special Edition"
          description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included."
          minPledge={200}
          numLeft={0}
        />
      </div>
    </Section>
  );
}

export default AboutSection;
