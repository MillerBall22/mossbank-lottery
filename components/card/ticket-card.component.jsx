import {useContext} from 'react';
import styles from './ticket-card.module.css';
import Image from 'next/image';
import {StoreContext, ACTION_TYPES } from "../../store/store-context";

import ToggleButton from '../toggle-button/toggle-button.component';

const TicketCard = ({ticketId, ticketTitle, price, image ,imageAlt, stateOfButton}) => {
    const {dispatch} = useContext(StoreContext);

    async function addToCart () {
        dispatch({
            type: ACTION_TYPES.ADD_TO_CART,
            payload: {
              ticketId,
            },
          });
    }

    return (
        <div className={styles.container} >
            <h2 className={styles.title}>{ticketTitle}</h2>
            <h3 className={styles.price}>{price}</h3>
            <Image src={image} width={200} height={200} alt={imageAlt}/>
            <ToggleButton buttonState={stateOfButton} onClick={addToCart}/>
        </div>);
}

export default TicketCard;