import Button from '../button/button.component';
import { useRouter } from 'next/router';

import styles from './account-options-dropdown.module.css';

import {magic} from '../../lib/magic-client';
import Link from 'next/link';

const AccountOptionsDropdown = () => {
    const router = useRouter();

    const signOutHandler = async () => {
        
        router.push('/')
    };

    return (
        <div className={styles.container} >
            <h3 className={styles.title}>
                Account Options  
            </h3>
            <div>
                <Link href="/contact">
                <a className={styles.navigationLink} >Account Details</a>
                </Link>
            </div>
            <div className={styles.buttonContainer}>
                <Button title='SIGN OUT' onClick={signOutHandler}/>
            </div>
        </div>);
}

export default AccountOptionsDropdown;