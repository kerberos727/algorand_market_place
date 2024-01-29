import React from "react";
import "../styles/globals.css";
import WalletContextWrapper from "../src/components/WalletContextWrapper";
import {
  WalletProvider,
  useInitializeProviders,
  PROVIDER_ID,
} from "@txnlab/use-wallet";
import { PeraWalletConnect } from "@perawallet/connect";
function MyApp({ Component, pageProps }) {
  const providers = useInitializeProviders({
    providers: [{ id: PROVIDER_ID.PERA, clientStatic: PeraWalletConnect }],
    nodeConfig: {
      network: "testnet",
      nodeServer: process.env.NEXT_PUBLIC_ALGOD_SERVER,
      nodeToken: "",
      nodePort: "443",
    },
  });
  return (
    <WalletProvider value={providers}>
      <WalletContextWrapper>
          <Component {...pageProps} />
      </WalletContextWrapper>
    </WalletProvider>
  );
}

export default MyApp;
