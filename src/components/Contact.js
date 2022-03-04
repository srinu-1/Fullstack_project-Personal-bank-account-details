import React, { useState, useEffect } from "react";
import "../app.css";
// import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastname, set2Name] = useState("");
  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");

  const [loader, setLoader] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoader(true);

  //   db.collection("contacts")
  //     .add({
  //       name: name,
  //       email: email,
  //       message: message,
  //     })
  //     .then(() => {
  //       setLoader(false);
  //       alert("Your message has been submitted👍");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       setLoader(false);
  //     });

  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // };

  return (
    <form className="form">
      
    <div className="maindiv">
    <h1 className="ps-details">Personal Details</h1>
    <div className="linuuu">
      <input
      className="inputu one"
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
      className="inputu"
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => set2Name(e.target.value)}
      />
      </div>
</div>
<div className="maindiv">
    <div className="linuuu">
      <input
      className="inputu one"
        placeholder="Field1"
        value={f1}
        onChange={(e) => setF1(e.target.value)}
      />
      <input
      className="inputu"
        placeholder="Field2"
        value={f2}
        onChange={(e) => setF2(e.target.value)}
      />
      </div>
</div>
<div className="maindiv">
<h1 className="ps-details">Account Details</h1>
    <div className="linuuu">
      <input
      className="inputu one"
        placeholder="Field-3"
        value={f3}
        onChange={(e) => setF3(e.target.value)}
      />
      <input
      className="inputu"
        placeholder="Field-4"
        value={f4}
        onChange={(e) => setF4(e.target.value)}
      />
      </div>
</div>
<div className="maindiv">
    <div className="linuuu">
      <select className="inputu">
      <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
      </select>
      </div>
</div>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
