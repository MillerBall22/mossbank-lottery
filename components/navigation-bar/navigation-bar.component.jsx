import {useContext, useState} from 'react';
import styles from './navigation-bar.module.css';import Link from "next/link";
import Image from 'next/image'

import {HiShoppingCart} from 'react-icons/hi';
import {RiAccountCircleFill} from 'react-icons/ri'
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare} from 'react-icons/fa'

import {StoreContext} from "../../store/store-context";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { useEffect } from 'react';

function NavigationBar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [ticketTotal, setTicketTotal] = useState(0)
  const {state} = useContext(StoreContext);
  const {cart} = state;

  useEffect(() => {
    setTicketTotal(cart[0].ticketQuantity + cart[1].ticketQuantity + cart[2].ticketQuantity + cart[3].ticketQuantity)
  },[cart])


  async function toggleCart() {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className={styles.container}>
      <div className={styles.navigationTop}>
        <div className={styles.socialLinks}>
          <a href="https://www.facebook.com/lifeisbetterinmossbank/" target='blank'><FaFacebookSquare className={styles.socialLink}/></a>
          <a href="https://www.instagram.com/townofmossbank/" target='blank'><FaInstagramSquare className={styles.socialLink}/></a>
          <a href="https://twitter.com/TownofMossbank" target='blank'><FaTwitterSquare className={styles.socialLink}/></a>
        </div>
        <div className={styles.phoneAndEmail}>
          306-354-2294 | townofmossbank@sasktel.net
        </div>
      </div>
      <div className={styles.navigationCenter}>
          <div className={styles.mossbankLogo}>
            <Image src='/static/Mossbank-Website-Logo.png' width={245} height={115} alt='Mossbank Logo' />
          </div>
          <div className={styles.businessDirectory}>
            <Image src='/static/business-directory.png' width={220} height={50} alt='Business Directory' />
          </div>
      </div>
      <div className={styles.navigationBottom}>
        <div>
          <Link href="/">
            <a className={styles.navigationLink} >Home</a>
          </Link>
        </div>
        <div>
          <Link href="/past-winners">
            <a className={styles.navigationLink} >Past Winners</a>
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <a className={styles.navigationLink} >Contact</a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a className={styles.navigationLink} >About</a>
          </Link>
        </div>
        <div onClick={toggleCart}>
          <Link href="/">
            <a className={styles.navigationLink} ><HiShoppingCart className={styles.linkIcons}/>&nbsp;{ticketTotal} Items</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a className={styles.navigationLink} ><RiAccountCircleFill className={styles.linkIcons}/> &nbsp;Sign In</a>
          </Link>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
    </div>
  );
}

export default NavigationBar;
