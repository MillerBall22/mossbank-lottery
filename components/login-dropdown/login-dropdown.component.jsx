import Button from '../button/button.component';
import { useRouter } from 'next/router';

import styles from './login-dropdown.module.css';
import {useContext, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import cookieCutter from 'cookie-cutter'
import {StoreContext, ACTION_TYPES} from "../../store/store-context";

import {magic} from '../../lib/magic-client';

const defaultFormFields = {
    email: '',
}

const LoginDropdown = () => {
    const [error, setError] = useState('');
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email} = formFields;
    
    const {dispatch} = useContext(StoreContext);
    const {state} = useContext(StoreContext);
    const router = useRouter();

    const {toggleLoggedin} = state;

    const signUpHandler = () => {
        if (!email) {
            setError('Email Required');
            return;
        }

    };

    const loginHandler = async () => {
        if (!email) {
            setError('Email Required');
            return;
        }

        if (email) {
          // log in a user by their email
            const didToken = await magic.auth.loginWithMagicLink({
              email,
            });
    
        const authRequest = await fetch('/api/login', {
            method: 'POST',
            headers: { Authorization: `Bearer ${didToken}` },
        });

        if (authRequest.ok) {
            console.log(authRequest);
          // We successfully logged in, our API
          // set authorization cookies and now we
          // can redirect to the dashboard!
            dispatch({
            type: ACTION_TYPES.TOGGLE_LOGIN,
            payload: {
              toggleLoggedin: !toggleLoggedin,
            },
          });

          cookieCutter.set('user', 'true')
          router.push('/');
        } else {
          /* handle errors */
        }
    };
};

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className={styles.container} >
            <h3 className={styles.title}>
                Insert your email  
            </h3>
               <FormInput
                    label='Email:'
                    type='email'
                    onChange={handleChange}
                    name='email'
                    value={email}
                    placeholder='johndoe@email.com'
               />
            <div className={styles.errorContainer}>
               <p>{error}</p>  
            </div>
            <div className={styles.buttonContainer}>
                <Button title='SIGN UP' onClick={signUpHandler}/>
            </div>
            <div className={styles.buttonContainer}>
                <Button title='LOGIN' onClick={loginHandler}/>
            </div>
        </div>);
}

export default LoginDropdown;