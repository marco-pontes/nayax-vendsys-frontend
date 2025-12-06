import { type ReactNode } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import SimpleSyncFusionTable from "@/components/SimpleSyncFusionTable.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Label } from "./components/ui/label";
import { AppForm } from "@/components/AppForm.tsx";

function Navbar({ children }: { children: ReactNode }) {
  return children;
}

function App() {
  return (
    <>
      <header>
        <h1>My Website Title</h1>
        <Navbar>
          <nav className="bg-[#262626]">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
              AAAA
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </nav>
        </Navbar>
      </header>
      {/*<aside>*/}
      {/*  <SidebarProvider>*/}
      {/*    <AppSidebar />*/}
      {/*    <SidebarTrigger />*/}
      {/*  </SidebarProvider>*/}
      {/*</aside>*/}
      <main>
        <h4>Related Links</h4>
        <section>
          <Button>My custom button</Button>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-start gap-3">
              <Label htmlFor="terms-2">Accept terms and conditions</Label>
              <Checkbox id="terms-2" defaultChecked />
            </div>
            <div className="flex items-start gap-3">
              <Label htmlFor="toggle">Enable notifications</Label>
              <Checkbox id="toggle" disabled />
            </div>
          </div>

          <Textarea></Textarea>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <AppForm />
          <SimpleSyncFusionTable />
        </section>
      </main>

      <footer>
        <figure>
          <img src="logo.png" alt="Company Logo" />
          <figcaption>Our Company Logo</figcaption>
        </figure>
        <p>&copy; 2025 Semantic Web Company. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
