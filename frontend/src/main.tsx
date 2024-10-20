import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import './index.css'

import UI from "./components/UI/UI";
import Canvas from "./components/Canvas/Canvas";
import { SceneDataProvider } from "./engine/Data";
import Engine from "./engine/Engine";
import { WagmiProvider } from "wagmi";
import { config } from "../wagmi-config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const engine = new Engine();
engine.start();

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={ config }>
      <QueryClientProvider client={ queryClient }>
        <SceneDataProvider>
          <Canvas />
          <UI />
        </SceneDataProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);