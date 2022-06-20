// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <h2>Call a Friend</h2>
            <p style={{ fontWeight: 'bold' }}>your friendly contact app</p>
            <p>* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *</p>
        </div>
    )
}

export default Header;