import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./layouts/Main";
import Page from "./layouts/Page";
import IntroSection from "./components/IntroSection";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";

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
    </Page>
  );
}

export default App;
