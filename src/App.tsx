import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./layouts/Main";
import Page from "./layouts/Page";
import IntroSection from "./components/IntroSection";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import ModalContainer from "./components/ModalContainer";

import { PledgeDataProvider } from "./contexts/PledgeDataContext";

function App() {
  return (
    <PledgeDataProvider>
      <Page>
        <Header />
        <Main>
          <IntroSection />
          <StatsSection />
          <AboutSection />
        </Main>
        <Footer />
        <ModalContainer />
      </Page>
    </PledgeDataProvider>
  );
}

export default App;
