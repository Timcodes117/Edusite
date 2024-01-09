import { EndOfLineState } from "typescript";
"use strict"

interface Window {
    localStorage: Storage;
  }

  
var secs : any = new Date;
secs = secs.getMilliseconds()

function getSecs(){
    return secs.getMilliseconds()
}

// getSecs()


function SignupWith(email : any, password : any, firstname : string, lastname : string){
    // localStorage.setItem('clients', `[id: '0000${getSecs()}', na]`)
    if('clients' in localStorage){
        var sp : any = JSON.parse(`${[localStorage.getItem('clients')]}`)

        // sp.map((arr: any, ind : any) => {
        for(let arr: number = 0; arr < sp.length; arr++) {
            if(email && password && firstname && lastname)
            {
                sp = JSON.parse(`${[localStorage.getItem('clients')]}`)
                // for (let index = 0; index < sp.length; index++) {
                    if(sp[arr].email !== email  ){
                        sp.push({id: `000${secs}`, name: `${firstname}`, email: `${email}`, password: `${password}`, status: 'loggedin'})
                        localStorage.setItem('clients', `${JSON.stringify(sp)}`)
                        alert('user has been signin successfully')
                        break
                    }else{
                        alert('email already exists in our database')
                        sp  = JSON.parse(`${[localStorage.getItem('clients')]}`)
                        // return true
                        break
                    }
                    // break
                // }
                
                // return true
            }else{
                alert('all fields are required...')
                sp  = JSON.parse(`${[localStorage.getItem('clients')]}`)
                break
                // break
                // return false
                
            }
        }
        // )
       
        }else{
            localStorage.setItem('clients', '[]')
            // window.open()
        }
}

export {SignupWith}