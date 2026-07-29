// import React from "react";
// import ReactDOM from 'react-dom/client';

export default function App(){
  return(
    <section>
      <h1>Signup Form</h1>
      <form>
        {/* <label>Email: 
          <input type="email" name="email" placeholder="@gmail.com"/>
        </label> */}
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="@gmail.com"/>
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" placeholder="e.g. Sah123"/>
        <br />
        <br />

        <button>Submit</button>
      </form>
    </section>
  )
}