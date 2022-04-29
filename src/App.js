import React from "react";
import "./app.css";

function App() {
  return (
    <div className="app">
    		<header>PERSONAL & ACCOUNT DETAILS</header>

    <form action="http://127.0.0.1:5000/insert" method="post" className="topBefore">

    <input type="text" name="first_name" placeholder="First Name"/>

    <input type="text" name="last_name" placeholder="Last Name"/>

    <input type="text" name="address" placeholder="Address"/>

    <input type="text" name="pincode" placeholder="pincode"/>

    <input type="text" name="account_id" placeholder="Account Id"/>

    <input type="text" name="ifsc" placeholder="IFSC"/>

    <input type="submit" name="submit"/>

           

</form>
     
    </div>
  );
}

export default App;
