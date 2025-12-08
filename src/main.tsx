import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";
import "./index.css";
import "./lib/i18n";
import App from "./App.tsx";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1JFaF1cXGFCf0xzWmFZfVhgdV9EZ1ZQRmY/P1ZhSXxWd0djX35XcXVRTmVeUkB9XEM=",
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
