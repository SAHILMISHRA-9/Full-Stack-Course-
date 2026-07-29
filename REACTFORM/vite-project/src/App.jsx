// import React from "react";
// import ReactDOM from 'react-dom/client';

export default function App(){

  // this can be done in react easily
  // by passing the form a function
  // and that function as it is not handling event takes formData as input directly
  // it handles prevenDefault on its own
  // for it we use onsubmit method

  // function handleSubmit(event){
  //   event.preventDefault()
  //   const formEl=event.currentTarget
  //   const formData=new FormData(formEl)
  //   const email=formData.get("email")
  //   console.log(email)
  //   // Gather the info from the form and submit it to the backend
  //   formEl.reset()
  // }

  // for it we use action method

  function SignUp(formData){
    const email=formData.get("email")
    const password=formData.get("password")
    const radio=formData.get("consent")
    // we use get all since it gave any one of the value
    const gender=formData.getAll("gender")
    const planet=formData.get("favPlanet")
    console.log(email)
    console.log(password)
    console.log(radio)
    console.log(gender)
    console.log(planet)
  }

  return(
    <section>
      <h1>Signup Form</h1>
      <form action={SignUp} className="form">

        {/* <label>Email: 
          <input type="email" name="email" placeholder="@gmail.com"/>
        </label> */}

        <label htmlFor="email">Email:</label>
        <input defaultValue="sunita@gmail.com" id="email" type="email" name="email" placeholder="@gmail.com"/>
        <br /><br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" placeholder="e.g. Sah123"/>
        <br /><br />
        
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"></textarea>
        <br /><br />

        {/* if name for all radio buttons are same then only we can select one otherwise all */}
        <fieldset className="fieldset">
          {/* to log into the console the radio button we need to pass the value to it otherwise it will log "on" or "null" */}
          <legend>Consent</legend>
          <label>
            <input type="radio" name="consent" value="yes"/>
            Yes
          </label>

          <label>
            <input type="radio" name="consent" value="no"/>
            No
          </label>

          <label>
            <input type="radio" name="consent" defaultChecked="true" value="decide later"/>
            Decide Later
          </label>
        </fieldset>
        <br /><br />


        <fieldset className="fieldset">
          {/* to log into the console the radio button we need to pass the value to it otherwise it will log "on" or "null" */}
          <legend>Gender</legend>
          <label>
            <input type="checkbox" name="gander" value="male"/>
            Male
          </label>

          <label>
            <input type="checkbox" name="gender" value="female"/>
            Female
          </label>

          <label>
            <input type="checkbox" name="gender" defaultChecked="true" value="not disclosing"/>
            Not disclosing
          </label>
        </fieldset>
        <br /><br />
        

        <label htmlFor="favPlanet">What is you favorite planet?</label>
        <select id="favPlanet" name="favPlanet" defaultValue="">
          <option value="" disabled>-- Choose a Planet --</option>
          <option value="Earth">Earth</option>
          <option value="Venus">Venus</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Mars">Mars</option>
          <option value="Uranus">Uranus</option>
          <option value="Saturn">Saturn</option>
          <option value="Mercury">Mercury</option>
          <option value="Neptune">Neptune</option>
        </select>
        <br /><br />


        {/* <input type="submit" /> */}
        <button>Submit</button>

      </form>
    </section>
  )
}