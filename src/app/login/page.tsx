"use client"

import React, { useState } from 'react'
import './login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faGraduationCap, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import { LoginWith } from '../utilities/loginHandler';

const Page: React.FC = () =>  {
    const [email, setemail] = useState<string>('')
    const [password, setpassword] = useState<string>('')


    const inputHandler = (e : any) =>{

        if(e.target.name === 'email') {
          setemail(e.target.value)
        }
        if(e.target.name === 'password') {
          setpassword(e.target.value)
        }
        // console.log(email, password)
      }
    
  return (
    <>
         <header>

<div className="logo"> Education</div>

<div className="nav">
    {/* <a onClick={scrollto('home')}>Home</a> */}
    <a href="">About</a>
    <a href="">Courses</a>
    <a href="">Contact</a>
    <a href="">Reviews</a>
</div>

<button style={{color: 'white', fontSize: 10, borderRadius: 5}}> Register</button>
</header>

<div className="login">
    <div className="others">
        <button style={{background: 'ghostwhite'}}>Continue with  <Image
              src="/google.svg"
              alt="google"
              className={'thumbnail'}
              style={{backgroundSize: 'contain', marginLeft: 5}}
              width={60}
              height={20}
              quality={90}
              priority
            /> </button>
        <button style={{background: 'blue', color: 'white', boxShadow: '0 59px 51px -34px rgb(23 58 229 / 30%)'}}>Continue with Facebook</button>
        <button style={{background: 'orangered', color: 'white',boxShadow: 'rgba(229, 126, 23, 0.3) 0px 0px 51px -1px'}}>Signup with Email</button>
    </div>
    <form >
        <fieldset>
            <legend>email</legend>
            <input type="email" value={email} name="email" id=""  onInput={inputHandler}/>
        </fieldset>
        <br />
        <fieldset>
            <legend>password</legend>
            <input type="password" value={password} name="password" id="" onInput={inputHandler} />
        </fieldset>
        <br />
        <a href="">forgot password?</a>
        <br />
        <button onClick={()=> LoginWith(email, password)}>Login</button>
    </form>
</div>
    </>
  )
}

export default Page
