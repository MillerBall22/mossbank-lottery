import { useState, useEffect, Fragment, useContext } from 'react';
import {StoreContext } from "../../store/store-context";

import Button from '../button/button.component';
import DisabledButton from '../disabled-button/disabled-button.component';

const ToggleButton = ({buttonState, onClick}) => {
    const [buttonType, setButtonType] = useState();
    const {state} = useContext(StoreContext);

    const {cart} = state;

    useEffect(() => {
        switch (buttonState) {
            case 'sold out':
                setButtonType(<DisabledButton title="Sold Out"/>)
                break;
            case 'unavailable':
                setButtonType(<DisabledButton title='Ticket Purchase Required'/>)
                break;
            default:
                setButtonType(<Button title='Add To Cart' onClick={onClick}/>)
                break;
        }
    },[state, cart, onClick])
    return (
        <Fragment>
            {
                buttonType
            }
        </Fragment>
    );
}

export default ToggleButton;