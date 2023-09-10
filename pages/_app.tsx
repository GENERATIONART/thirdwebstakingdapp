import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "ethereum";
const id = "8aeba115243980d3d5059cd31da58fe6";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain} clientId={id}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
