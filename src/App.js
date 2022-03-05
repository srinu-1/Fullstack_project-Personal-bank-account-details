import React from "react";
import Contact from "./components/Contact";
import "./app.css";

function App() {
  return (
    <div className="app">
    <form action="http://127.0.0.1:5000/insert" method="post">
  <label>
    firstname:
    <input type="text" name="first_name" />
  </label>
  <label>
    lastname:
    <input type="text" name="last_name" />
  </label>
  <label>
    Address:
    <input type="text" name="address" />
  </label>
  <label>
    Pincode:
    <input type="text" name="pincode" />
  </label>
  <label>
    Account ID:
    <input type="text" name="account_id" />
  </label><label>
    IFSC:
    <input type="text" name="ifsc" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>
  );
}

export default App;
