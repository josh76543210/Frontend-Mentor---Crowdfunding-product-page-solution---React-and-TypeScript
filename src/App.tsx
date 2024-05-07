import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./layouts/Main";
import Page from "./layouts/Page";
import IntroSection from "./components/IntroSection";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import PledgeModal from "./components/PledgeModal";
import ThanksModal from "./components/ThanksModal";

function App() {
  return (
    <Page>
      <Header />
      <Main>
        <IntroSection />
        <StatsSection />
        <AboutSection />
      </Main>
      <Footer />
      {/* <PledgeModal /> */}
      <ThanksModal />
    </Page>
  );
}

export default App;
