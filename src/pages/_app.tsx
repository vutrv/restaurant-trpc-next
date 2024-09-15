import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import { trpc } from '@/utils/trpc';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

export default trpc.withTRPC(App);

