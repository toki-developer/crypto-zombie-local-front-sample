import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebWeb3Provider as _ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "regenerator-runtime/runtime";
import { ComponentProps, ReactNode } from 'react';

type ThirdwebWeb3ProviderProps = ComponentProps<typeof _ThirdwebWeb3Provider>
const ThirdwebWeb3Provider = _ThirdwebWeb3Provider as React.FC<ThirdwebWeb3ProviderProps & {children: ReactNode}>

const  App = ({ Component, pageProps }: AppProps) => {
  const supportedChainIds: number[] = [5];
  const connectors = {
    injected: {},
  };

  return (
  <ThirdwebWeb3Provider supportedChainIds={supportedChainIds} connectors={connectors}>
    <Component {...pageProps} />
  </ThirdwebWeb3Provider>
  )
}

export default App
