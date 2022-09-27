import { useState, useContext, useEffect } from 'react';
import {StoreContext, ACTION_TYPES } from "../store/store-context";
import TicketCard from '../components/card/ticket-card.component'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [tickets, setTickets] = useState('unavailable');
  const {state, dispatch} = useContext(StoreContext);
  const {cart} = state;

  useEffect(() => {
    if (cart[0].ticketQuantity !== 0 || cart[1].ticketQuantity !== 0 || cart[2].ticketQuantity !== 0) {
      setTickets('can buy')
    } else {
      dispatch({
            type: ACTION_TYPES.REMOVE_FROM_CART,
            payload: {
              ticketId: 'fiftyFiftyTickets'
            },
          });
      setTickets('unavailable')
    }
  }, [cart[0].ticketQuantity, cart[1].ticketQuantity, cart[2].ticketQuantity])

  const regularTicketsState = 'can buy';
  
  return (
    <div className={styles.container}>
      <TicketCard className='ticket-card' ticketId='singleTicket' ticketTitle='1 Ticket' price='$60' image='/static/1Ticket.png' imageAlt='3 Tickets' stateOfButton={regularTicketsState}/>
      <TicketCard className='ticket-card' ticketId='threeTickets' ticketTitle='3 Tickets' price='$150' image='/static/3Tickets.png' imageAlt='3 Tickets' stateOfButton={regularTicketsState}/>
      <TicketCard className='ticket-card' ticketId='tenTickets' ticketTitle='10 Tickets' price='$400' image='/static/10Tickets.png' imageAlt='3 Tickets' stateOfButton={regularTicketsState}/>
      <TicketCard className='ticket-card' ticketId='fiftyFiftyTickets' ticketTitle='50/50 Tickets' price='$20' image='/static/3Tickets.png' imageAlt='3 Tickets' stateOfButton={tickets}/>
    </div>
  )
}
