import  React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import contacts from "../contacts";

function App(){
    return (
        <div>
            <Header/>
       <Note
       name={contacts[0].name}
       img={contacts[0].imgURL}
       tel={contacts[0].phone}
       email={contacts[0].email}
       />

    <Note 
       name={contacts[1].name}
       img={contacts[1].imgURL}
       tel={contacts[1].phone}
       email={contacts[1].email}
       />

    <Note 
       name={contacts[2].name}
       img={contacts[2].imgURL}
       tel={contacts[2].phone}
       email={contacts[2].email}
       />
    </div>
    );
    
}


export default App;