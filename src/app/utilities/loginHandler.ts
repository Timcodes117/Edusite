
var secs : any = new Date;
secs = secs.getMilliseconds()

function getSecs(){
    return secs.getMilliseconds()
}

function LoginWith(email : any, password : any){
    // localStorage.setItem('clients', `[id: '0000${getSecs()}', na]`)
    if('clients' in localStorage){
        var cl : any = JSON.parse(`${[typeof window !== 'undefined' ? localStorage.getItem('clients') : null]}`)
        var nnewarr = [cl]
        
        cl.map((arr: any, ind : any) => {
            if(email === arr.email && password === arr.password){
                alert('user exist in localStorage')
                // break
                return true
            }else{
                // alert('user does not exist in localStorage')
                // break
                return false
            }
        })
            
        }
}

export {LoginWith}