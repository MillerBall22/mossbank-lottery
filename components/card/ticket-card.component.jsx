import Button from '../button/button.component';
import styles from './ticket-card.module.css';
import Image from 'next/image';

const TicketCard = ({ticketTitle, price, image ,imageAlt}) => {
    return (
        <div className={styles.container} >
            <h2 className={styles.title}>{ticketTitle}</h2>
            <h3 className={styles.price}>{price}</h3>
            <Image src={image} width={200} height={200} alt={imageAlt}/>
            <Button onClick={() => {}} title='Add To Cart'/>
        </div>);
}

export default TicketCard;