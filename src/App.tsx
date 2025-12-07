import "./App.css";
import { Footer } from "@/components/layout/Footer.tsx";
import { AppNavigationMenu } from "@/components/layout/AppNavigationMenu.tsx";
import { MarketPage } from "@/pages/MarketPage.tsx";

function App() {
  return (
    <>
      <header>
        <AppNavigationMenu />
      </header>
      <main>
        <MarketPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
