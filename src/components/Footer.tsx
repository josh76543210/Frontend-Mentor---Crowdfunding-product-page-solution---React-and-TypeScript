function Footer() {
  return (
    <footer className="flex flex-col gap-4 items-center justify-center mt-auto p-8 sm:flex-row sm:gap-2">
      <span>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/?ref=challenge"
          target="_blank"
          className="text-moderate-cyan hover:text-dark-cyan"
        >
          Frontend Mentor
        </a>
      </span>
      <span className="hidden sm:inline">│</span>
      <span>
        Coded by{" "}
        <a
          href="https://www.frontendmentor.io/profile/josh76543210"
          target="_blank"
          className="text-moderate-cyan hover:text-dark-cyan"
        >
          josh76543210
        </a>
      </span>
    </footer>
  );
}

export default Footer;
