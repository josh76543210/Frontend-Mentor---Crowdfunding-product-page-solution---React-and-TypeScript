import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./layouts/Main";
import Page from "./layouts/Page";
import IntroSection from "./components/IntroSection";

function App() {
  return (
    <Page>
      <Header />
      <Main>
        <IntroSection />
        <IntroSection />
      </Main>
      <Footer />
    </Page>
  );
}

export default App;
