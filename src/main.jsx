import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { APIProvider } from "./components/API/APIDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </StrictMode>
);
