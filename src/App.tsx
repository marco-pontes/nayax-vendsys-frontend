import "./App.css";
import { Footer } from "@/components/Footer.tsx";
import { MarketContent } from "@/features/market/MarketContent.tsx";
import { AppNavigationMenu } from "@/components/AppNavigationMenu.tsx";
import { PageHeader } from "@/features/market/PageHeader.tsx";

function App() {
  return (
    <>
      <header>
        <AppNavigationMenu />
        <PageHeader />
      </header>
      <MarketContent />
      <Footer />
    </>
  );
}

export default App;
