import "@/styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { appWithTranslation } from "next-i18next";

const App: AppType<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
