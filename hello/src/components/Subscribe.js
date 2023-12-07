import React, { useState } from 'react';
import '../Styles/Subscribe.css'


const Subscribe = () => {
    const Subscreibeclick = () => {
        setSubscribe(subsedtext);
    }
    const Unsubscclick = () => {
        setSubscribe(subsctext);
    }

    let subsctext = <p className="message">Nichts mehr verpassen! Klicke <button className="subscribe" onClick={Subscreibeclick}> Subscribe </button>um zu subscreiben!</p>
    let subsedtext = <p className="message"> Danke für Ihre Anmeldung<br/> <button className="subscribe" onClick={Unsubscclick}> Unsubscribe </button></p>

    
    const [subscribe, setSubscribe] = useState(subsctext);
    const [unsubscribe, setUnsubscribe] = useState(subsedtext);
    return (
        <>
            <p>{subscribe}  </p>

        </>

    );
}

export default Subscribe;
;