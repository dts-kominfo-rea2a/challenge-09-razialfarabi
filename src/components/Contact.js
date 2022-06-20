// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({dataContact}) => {
    // const dataContact = props.dataContact;
    return (
        <div className='contact'>
            <img src={dataContact.photo} alt={dataContact.name}></img>
            <div className='detailContact'>
                <p>{dataContact.phone}</p>
                <p>{dataContact.name}</p>
                <p>{dataContact.email}</p>
            </div>
        </div>
    );
}

export default Contact;