import React from 'react';
import './Hello.css';


function Hello(props) {
    return (
        <div className='f1 tc'>
            <h1>Hello World from Blois</h1>
            <p>{props.greetings}</p>
        </div>
    );
}

export default Hello;
