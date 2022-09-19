import { useContext } from 'react';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {StoreContext } from "../../store/store-context";

import styles from './cart-dropdown.module.css';
import { useState, useEffect } from 'react';

const CartDropdown = () => {
    const [ticketTotal, setTicketTotal] = useState(0);
    const { state } = useContext(StoreContext);

    const { cart } = state;

    useEffect(() => {
    setTicketTotal(cart[0].ticketQuantity + cart[1].ticketQuantity + cart[2].ticketQuantity + cart[3].ticketQuantity)
  },[cart])


    const goToCheckoutHandler = () => {
    };

    return (
        <div className={styles.container} >
            <h3 className={styles.title}>
                Your Cart  
            </h3>
            <div className={styles.cartItems}>
                {ticketTotal ? (cart.map((item) => <CartItem key={item.id} cartItem={item} />)
                    ) : (
                <div className={styles.emptyMessage}>Your cart is empty</div>
                )}
            </div>
            <Button title='GO TO CHECKOUT'/>
        </div>);
}

export default CartDropdown;