import { useContext } from 'react';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {StoreContext } from "../../store/store-context";

import styles from './cart-dropdown.module.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const CartDropdown = () => {
    const [ticketTotal, setTicketTotal] = useState(0);
    const { state } = useContext(StoreContext);
    const router = useRouter();

    const { cart } = state;

    useEffect(() => {
    setTicketTotal(cart[0].ticketQuantity + cart[1].ticketQuantity + cart[2].ticketQuantity + cart[3].ticketQuantity)
  },[cart])


    const goToCheckoutHandler = () => {
        router.push('/confirm-cart')
    };

    return (
        <div className={styles.container} >
            <h3 className={styles.title}>
                Your Cart  
            </h3>
            <div className={styles.cartItems}>
                {ticketTotal ? (cart.map((item) => <CartItem key={item.ticketId} cartItem={item} />)
                    ) : (
                <div className={styles.emptyMessage}>Your cart is empty</div>
                )}
            </div>
            <Button title='GO TO CHECKOUT' onClick={goToCheckoutHandler}/>
        </div>);
}

export default CartDropdown;