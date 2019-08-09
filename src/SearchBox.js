import React from 'react';


const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba bg-light-green bg-lightest-blue'
                type="search"
                placeholder='Chercher Amis'
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;
