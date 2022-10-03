import Button from '../button/button.component';
import { useRouter } from 'next/router';

import styles from './account-options-dropdown.module.css';

import {magic} from '../../lib/magic-client';

const AccountOptionsDropdown = () => {
    const router = useRouter();

    const signOutHandler = async () => {

    };

    return (
        <div className={styles.container} >
            <h3 className={styles.title}>
                Account Options  
            </h3>
            <div className={styles.buttonContainer}>
                <Button title='SIGN OUT' onClick={signOutHandler}/>
            </div>
        </div>);
}

export default AccountOptionsDropdown;