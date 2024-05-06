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
      <h1 className="text-center m-4 font-bold text-xl sm:text-3xl">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <h2 className="text-center text-dark-gray mb-8 text-sm sm:text-md">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </h2>
      <div className="flex flex-col sm-3:flex-row gap-5 items-center justify-between">
        <Button>Back this project</Button>
        <BookmarkButton bookmarked={true} />
      </div>
    </Section>
  );
}

export default IntroSection;
