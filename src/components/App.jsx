import React from "react";
import "./App.css"; // Import the CSS file
import Card from "./Card"; // Import the Card component
import contacts from "../contacts"; // Import the contacts data

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          imgURL={contact.imgURL}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
