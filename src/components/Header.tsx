import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header className="flex justify-between p-8">
      <img src={logo} alt="Crowdfund logo" />
      <p className="text-white">Navigation</p>
    </header>
  );
}

export default Header;
