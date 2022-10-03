import Button from '../components/button/button.component'
import { useContext, useState, useEffect } from 'react';
import {StoreContext } from "../store/store-context";
import styles from '../styles/confirm-cart.module.css'
import ConfirmCartItem from '../components/confirm-cart-item/confirm-cart-item.component';
import { useRouter } from 'next/router';


export default function Home() {
  const [ticketTotal, setTicketTotal] = useState(0);
  const { state } = useContext(StoreContext);

  const router = useRouter()

    const { cart } = state;

    useEffect(() => {
    setTicketTotal(cart[0].ticketQuantity + cart[1].ticketQuantity + cart[2].ticketQuantity + cart[3].ticketQuantity)
  },[cart])

  const handleApproval = () => {
    router.push('/address')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Confirm Cart</h1>
      <div className={styles.confirmCartHeader}>
        <div className={styles.headerItem}>
          <h3>Item</h3>
        </div>
        <div className={styles.headerItem}>
          <h3>Quantity</h3>
        </div>
        <div className={styles.headerItem}>
          <h3>Price</h3>
        </div>
        <div className={styles.headerItem}>
          <h3>Total</h3>
        </div>
      </div>
      <div className={styles.cartItems}>
                {ticketTotal ? (cart.map((item) => <ConfirmCartItem key={item.ticketId} cartItem={item} />)
                    ) : (
                <div className={styles.emptyMessage}>Your cart is empty</div>
                )}
            </div>
      <div className={styles.buttonContainer}>
        <Button title='Reset Back To Home' onClick={() => {}}/>
        <Button title='Continue to Billing Address' onClick={handleApproval}/>
      </div>
    </div>
  )
}
