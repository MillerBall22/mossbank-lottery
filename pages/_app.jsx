import '../styles/globals.css'
import Link from "next/link";
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <div className='page-container'>
      <div className='navigation-top'>
        <div className='phone&email'>
          306-354-2294 | townofmossbank@sasktel.net
        </div>
      </div>
      <div className='navigation-center'>
          <div className='mossbank-logo'>
            <Image src='/static/Mossbank-Website-Logo.png' width={245} height={115} alt='Mossbank Logo' />
          </div>
          <div className='business-directory'>
            <Image src='/static/business-directory.png' width={220} height={50} alt='Business Directory' />
          </div>
      </div>
      <div className='navigation-bottom'>
        <div>
          <Link href="/">
            <a className='navigation-link' >Home</a>
          </Link>
        </div>
        <div>
          <Link href="/past-winners">
            <a className='navigation-link' >Past Winners</a>
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <a className='navigation-link' >Contact</a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a className='navigation-link' >About</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className='navigation-link' >Cart</a>
          </Link>
        </div>
      </div>
        <Component {...pageProps} />
      <div className='footer'>
        <h3>Town of Mossbank</h3>
        <p>311 Main St, P.O. Box 370 Mossbank, SK S0H 3G0</p>
        <p>Phone: 306-354-2294</p>
        <p>Fax: 306-354-7725</p>
        <p>Email: townofmossbank@sasktel.net</p>

      </div>
    </div>
  );
}

export default MyApp;
