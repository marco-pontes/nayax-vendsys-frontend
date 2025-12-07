import "./App.css";
import { Footer } from "@/components/layout/Footer.tsx";
import { NayaxNavigationMenu } from "@/components/layout/NayaxNavigationMenu.tsx";
import { MarketPage } from "@/pages/MarketPage.tsx";

function App() {
  return (
    <>
      <header>
        <NayaxNavigationMenu />
      </header>
      <main>
        <MarketPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
