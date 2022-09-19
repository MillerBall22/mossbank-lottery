import '../styles/globals.css'
import Head from 'next/head';
import { Fragment } from 'react';

import NavigationBar from '../components/navigation-bar/navigation-bar.component';

import StoreProvider from "../store/store-context";


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Mossbank Dare to Dream Lotto</title>
        <link rel="icon" src="/staic/Lotto Icon.png" />
      </Head>
    <StoreProvider>
      <div className='page-container'>
        <NavigationBar/>
          <Component {...pageProps} />
        <div className='footer'>
          <h3>Town of Mossbank</h3>
          <p>311 Main St, P.O. Box 370 Mossbank, SK S0H 3G0</p>
          <p>Phone: 306-354-2294</p>
          <p>Fax: 306-354-7725</p>
          <p>Email: townofmossbank@sasktel.net</p>
        </div>
      </div>
    </StoreProvider>
    </Fragment>
  );
}

export default MyApp;
