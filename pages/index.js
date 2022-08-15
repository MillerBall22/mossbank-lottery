import Head from 'next/head'
import Image from 'next/image'
import TicketCard from '../components/card/ticket-card.component'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <TicketCard className='ticket-card' ticketTitle='1 Ticket' price='$60' image='/static/1Ticket.png' imageAlt='3 Tickets'/>
      <TicketCard className='ticket-card' ticketTitle='3 Tickets' price='$150' image='/static/3Tickets.png' imageAlt='3 Tickets'/>
      <TicketCard className='ticket-card' ticketTitle='10 Tickets' price='$400' image='/static/10Tickets.png' imageAlt='3 Tickets'/>
      <TicketCard className='ticket-card' ticketTitle='50/50 Tickets' price='$20' image='/static/3Tickets.png' imageAlt='3 Tickets'/>
    </div>
  )
}
