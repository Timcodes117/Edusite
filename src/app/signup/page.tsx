"use client"

import React, {useState} from 'react'
import './signup.css'
import { SignupWith } from '../utilities/signupHandler'

const Page: React.FC = () =>   {
  const [email, setemail] = useState<string>('')
  const [firstname, setfirstname] = useState<string>('')
  const [lastname, setlastname] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const [confirmpassword, setconfirmpassword] = useState<string>('')

  
  const inputHandler = (e : any) =>{

    if(e.target.name === 'email') {
      setemail(e.target.value)
    }
    if(e.target.name === 'password') {
      setpassword(e.target.value)
    }

    if(e.target.name === 'fn') {
      setfirstname(e.target.value)
    }

    if(e.target.name === 'ln') {
      setlastname(e.target.value)
    }
    if(e.target.name === 'cp') {
      setconfirmpassword(e.target.value)
    }
    // console.log(email, password)
  }


  

  return (
    <>
    <div className="bg">
      <div className="info"></div>
      <div className="formpage">
      <form>
        <br />
        <br />
        <br />
        <label style={{width: '100%', fontSize: 30, marginLeft: 20, fontWeight: 'bolder', color: '#ff274b'}}>Registration</label>
        <br />
        <br />
        <label style={{fontSize: 10, marginLeft: 20, width: '90%', display: 'flex', color: 'grey'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dolor eligendi necessitatibus ullam alias tempore exercitationem? Praesentium in facilis soluta dignissimos! Quisquam, voluptates? Incidunt rem necessitatibus, blanditiis quos at nisi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. </label>
        <br />
<div className="mfield">
        <fieldset>
          <legend>Email</legend>
          <input type="email" onInput={inputHandler} value={email} name="email" id="" placeholder=' Your full email address'/>
        </fieldset>
        </div>
<br />
<div className="mfield">

        <fieldset>
          <legend>First name</legend>
          <input type="text" onInput={inputHandler} value={firstname} name="fn" id="" placeholder=' firstname or username'/>
        </fieldset>

        <fieldset>
          <legend>Last name</legend>
          <input type="text" onInput={inputHandler} value={lastname} name="ln" id="" placeholder=' lastname'/>
        </fieldset>
</div>
<br />
<div className="mfield">

        <fieldset>
          <legend>Password</legend>
          <input type="password" onInput={inputHandler} value={password} name="password" id="" placeholder=' new Password'/>
        </fieldset>

        <fieldset>
          <legend>confirm Password</legend>
          <input type="password" onInput={inputHandler} value={confirmpassword} name="cp" id="" placeholder='  confirm Password' />
        </fieldset>
</div>
<br />
<br />

<div className="mfield" style={{flexDirection: 'row', maxHeight: 30, alignItems: 'center', marginLeft: 20}}>
  <input type="checkbox" id="myCheckbox" name="myCheckbox" value="myValue" style={{borderRadius: 5}}/>
  <label htmlFor="myCheckbox" style={{marginLeft: 5, fontSize: 11, color: 'gray'}}>I want to recieve news on latest courses via email.</label> 
</div>

<div className="mfield" style={{flexDirection: 'row', maxHeight: 30, alignItems: 'center', marginLeft: 20}}>
  <input type="checkbox" id="myCheckbox2" name="myCheckbox2" value="myValue" style={{borderRadius: 5}}/>
<label htmlFor="myCheckbox2" style={{marginLeft: 5, fontSize: 11, color: 'gray'}}>I have accepted the <a href='#'>terms</a>, <a href='#'>privacy</a>  and <a href='#'>conditions</a>.</label> 

</div>
<br />
<button onClick={()=> SignupWith(email, password, firstname, lastname)}>Create Account</button>
<br />
<br />
<a href="/login" style={{fontSize: 11, color: '#1a73e8', marginLeft: '5%'}}>Already a user? Login</a>
<br />
<br />
<br />
<br />
<br />
      </form>
      </div>
    </div>
    </>
  )
}

export default Page
