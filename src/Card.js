import React from 'react';

// import './Card.css';

const Card = () => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img src="https://robohash.org/test?size=200x200" alt="robot"/>
            <div>
                <h2>Jane Doe</h2>
                <p>jane@gmail.com</p>
            </div>
        </div>
    );
};

export default Card;
