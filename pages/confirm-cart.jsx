import Button from '../components/button/button.component'
import { useContext, useState, useEffect } from 'react';
import {StoreContext } from "../store/store-context";
import styles from '../styles/confirm-cart.module.css'
import CartItem from '../components/cart-item/cart-item.component';


export default function Home() {
  const [ticketTotal, setTicketTotal] = useState(0);
  const { state } = useContext(StoreContext);

    const { cart } = state;

    useEffect(() => {
    setTicketTotal(cart[0].ticketQuantity + cart[1].ticketQuantity + cart[2].ticketQuantity + cart[3].ticketQuantity)
  },[cart])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Confirm Cart</h1>
      <div className={styles.cartItems}>
                {ticketTotal ? (cart.map((item) => <CartItem key={item.ticketId} cartItem={item} />)
                    ) : (
                <div className={styles.emptyMessage}>Your cart is empty</div>
                )}
            </div>
      <div className={styles.buttonContainer}>
        <Button title='Reset Back To Home' onClick={() => {}}/>
        <Button title='Continue to Billing Address' onClick={() => {}}/>
      </div>
    </div>
  )
}
