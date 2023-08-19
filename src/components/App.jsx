import React from "react";
import Card from './Card.jsx';
import contacts from '../contacts.js';
import Avatar from "./Avatar.jsx";

function createCard(contact) {
    return <Card name={contact.name} 
        img = {contact.imgURL}
        tel = {contact.tel}
        email = {contact.email}
    />;
}

function App() {
    return <div>
    <h1 className="heading">My Contacts</h1>
    
    {contacts.map(createCard)}

    {/* <Card 
        name= {contacts[0].name}
        img= {contacts[0].imgURL}
        tel= {contacts[0].tel}
        email= {contacts[0].email}
    />

    <Card 
        name= {contacts[1].name}
        img= {contacts[1].imgURL}
        tel= {contacts[1].tel}
        email= {contacts[1].email}
    />

    <Card 
        name= {contacts[2].name}
        img= {contacts[2].imgURL}
        tel= {contacts[2].tel}
        email= {contacts[2].email}
    /> */}

   

   
    </div>
}

export default App;