import "./App.css";
import { Footer } from "@/components/layout/Footer.tsx";
import { AppNavigationMenu } from "@/components/layout/AppNavigationMenu.tsx";
import { MarketContent } from "@/features/market/components/MarketContent.tsx";

function App() {
  return (
    <>
      <header>
        <AppNavigationMenu />
      </header>
      <MarketContent />
      <Footer />
    </>
  );
}

export default App;
