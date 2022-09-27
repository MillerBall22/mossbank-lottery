import Button from '../button/button.component';

import styles from './login-dropdown.module.css';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
    email: '',
}

const LoginDropdown = () => {
    const [error, setError] = useState('');
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email} = formFields;

    const signUpHandler = () => {
        if (!email) {
            setError('Email Required');
            return;
        }

    };

    const loginHandler = () => {
        if (!email) {
            setError('Email Required');
            return;
        }

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