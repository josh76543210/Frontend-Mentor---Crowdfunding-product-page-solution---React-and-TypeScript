import Section from "../layouts/Section";

import logoMastercraft from "../assets/images/logo-mastercraft.svg";

function IntroSection() {
  return (
    <Section>
      <img
        src={logoMastercraft}
        alt="Mastercraft logo"
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <h1>Intro Section</h1>
    </Section>
  );
}

export default IntroSection;
