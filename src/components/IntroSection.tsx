import Section from "../layouts/Section";

import logoMastercraft from "../assets/images/logo-mastercraft.svg";
import Button from "./Button";
import BookmarkButton from "./BookmarkButton";

function IntroSection() {
  return (
    <Section>
      <img
        src={logoMastercraft}
        alt="Mastercraft logo"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h1 className="text-center m-4 font-bold text-3xl">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-center text-dark-gray mb-8">
        A beautiful &amp; handcrafted monitor stand to reduce neck and eye
        strain.
      </p>
      <div className="flex items-center justify-between">
        <Button>Back this project</Button>
        <BookmarkButton bookmarked={true} />
      </div>
    </Section>
  );
}

export default IntroSection;
