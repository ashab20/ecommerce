import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import ErrorBoundary from "../src/components/ErrorBoundary";
import Layout from "../src/components/Layout";
import store from "../src/store";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
    </Provider>
  );
}

export default MyApp;
