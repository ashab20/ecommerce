import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import '../styles/globals.css'
import {Provider} from 'react-redux';
import store from '../src/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  );
}

export default MyApp;
