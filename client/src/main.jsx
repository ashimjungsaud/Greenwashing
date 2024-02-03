import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThirdwebProvider
        supportedWallets={[
          metamaskWallet({
            recommended: true,
          }),
        ]}
        activeChain={Sepolia}
        clientId={import.meta.env.VITE_APP_CLIENT_CLIENT_ID}
      >
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>
);
