import React, { useState } from "react";
import Headers from "../src/components/Header/Headers"
import "bootstrap/dist/css/bootstrap.min.css";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/FooterHtml";

const App = () => {
  // const [counter, setCounter] = useState("");

  let users = [
    { name: "Medina",
     lastName: "Alieva",
     age: 18,
      id: 1 },
  ];
  console.log(users);
  return (
    <div>
      <Headers/> 
      <Section  users={users}/>
      <Footer/>

      
    </div>
  );
};

export default App;