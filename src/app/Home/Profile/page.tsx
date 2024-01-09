"use client"

import React, {useEffect, useState} from 'react'
import './profile.css'
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookAtlas, faBookOpen, faBookOpenReader, faCircleDot, faClock, faClose, faCopyright, faDotCircle, faExpand, faHeart, faMoon, faPlay, faPlayCircle, faRunning, faSun } from '@fortawesome/free-solid-svg-icons'
import Courses from './courses'


const Page: React.FC = () => {
    const [tab, setTab] = useState<string>('activity')
    const [prevstate, setPrevstate] = useState<string>('hidden')
    const [windowdata, setWindowdata] = useState<any>([{id: '', title: '', about: '', duration: '', author: '', previews: ['name'], price: '' }])


    // var localStorage = window.localStorage

    var c  : any = JSON.parse(`${typeof window !== 'undefined' ? localStorage.getItem('courses') : null}`)
    
    const getCourses = ()=>{
         c = JSON.parse(`${typeof window !== 'undefined' ? localStorage.getItem('courses') : null}`)
         console.log(c[0], 'courses')         
       

    }


    useEffect(()=>{
        // getCourses()
        console.log(windowdata)
    }, [])

    function scrollto(position:string) {
        if(position === 'home'){
          let pos : any = document.getElementById('hm');
          pos.scrollIntoView({behavior: 'smooth'})
          // ({behavior: 'smooth'})
          console.log('moved to ', position)
        }
        if(position === 'about'){
          let pos : any = document.getElementById('abt');
          pos.scrollIntoView({behavior: 'smooth'})
          console.log('moved to ', position)
        }
        if(position === 'courses'){
          let pos : any = document.getElementById('crs');
          pos.scrollIntoView({behavior: 'smooth'})
          console.log('moved to ', position)
        }
        if(position === 'contact'){
          let pos : any = document.getElementById('ctc');
          pos.scrollIntoView({behavior: 'smooth'})
          console.log('moved to ', position)
        }
        if(position === 'reviews'){
          let pos : any = document.getElementById('rws');
          pos.scrollIntoView({behavior: 'smooth'})
          console.log('moved to ', position)
        }
      }
    
    
  return (
    <> 
{prevstate === 'shown' ?
<div className="previewer">
    <div style={{position: 'absolute', right: 10, top: 10}} onClick={()=> setPrevstate('hidden')}><FontAwesomeIcon icon={faClose} style={{width: 30, height: 30, color: 'white'}}/></div>
    <div className="preview">
        <div className="vdbg">
            <div style={{position: 'absolute', right: 30, cursor: 'pointer', bottom: 50}}> <FontAwesomeIcon icon={faExpand}  style={{color: 'white', width: 25, height: 25}}/></div>
        <div className="favourite"><FontAwesomeIcon icon={faHeart} size={'xl'} style={{width: 20, color: 'red'}} /></div>
            <FontAwesomeIcon icon={faPlayCircle} style={{color: 'white',height: 100, width: 100, cursor: 'pointer'}} />
            <label style={{position: 'absolute', bottom: 15, width: '90%', height: 30, display: 'flex', alignItems: 'center', marginLeft: 15, color: 'white'}}>Introduction to Flutter SDK <FontAwesomeIcon icon={faPlay} style={{width: 10, marginLeft: 10, marginRight: 10}}/> <span style={{fontSize: 10}}>Now playing</span></label>
        
        </div>
        <br />
        <strong className='title' style={{fontSize: 50, width: '90%', maxWidth: 600, marginLeft: 50}}>Introduction to Flutter SDK and Dart</strong>
        <br />
        <label className='ltitle' style={{fontSize: 12, maxWidth: '50%', marginLeft: 50, color: '#c51d38'}}>About this course</label>
        <label className='ltitle' style={{fontSize: 10, width: '80%', maxWidth: 600, marginLeft: 50}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex amet voluptas molestiae? Iure inventore fugiat alias consequuntur! Tempore exercitationem error, nemo atque esse, necessitatibus maxime, assumenda enim fuga doloribus eum!</label>
        <br />
        <label className='ltitle' style={{fontSize: 10, maxWidth: '50%', marginLeft: 50}}><FontAwesomeIcon icon={faClock} style={{width: 10}} /> Duration: 5 hours</label>
        <label className='ltitle' style={{fontSize: 10, maxWidth: '50%', marginLeft: 50}}>Author: NotJustDev</label>
        <br />
        <br />
        <label className='ltitle' style={{fontSize: 12, maxWidth: '50%', marginLeft: 50, color: '#c51d38'}}>Course Previews</label>

<div style={{width: '100%', height: 300, overflowX: 'scroll', overflowY: 'hidden', display: 'flex', flexDirection: 'row', alignItems: 'center',  gap: 30}}>
       <br />
        <div className="more" style={{marginLeft: 50}}>
            <div className="tmb"><FontAwesomeIcon icon={faPlayCircle} style={{color: 'white', height: 50, width: 50, cursor: 'pointer'}} /></div>
            <div className="desc">Introduction</div>
            <div style={{width: '100%', textAlign: 'right', fontSize: 10, marginTop: 5, marginRight: 5}}>1 minutes 02 seconds</div>
        </div>
        <div className="more">
            <div className="tmb"><FontAwesomeIcon icon={faPlayCircle} style={{color: 'white', height: 50, width: 50, cursor: 'pointer'}} /></div>
            <div className="desc">What is dart programming language</div>
 <div style={{width: '100%', textAlign: 'right', fontSize: 10, marginTop: 5, marginRight: 5}}>1 minutes 02 seconds</div>
        </div>
        <div className="more">
            <div className="tmb"><FontAwesomeIcon icon={faPlayCircle} style={{color: 'white', height: 50, width: 50, cursor: 'pointer'}} /></div>
            <div className="desc">projects to make</div>
 <div style={{width: '100%', textAlign: 'right', fontSize: 10, marginTop: 5, marginRight: 5}}>3 minutes 0 seconds</div>
        </div>
        <div className="more">
            <div className="tmb"><FontAwesomeIcon icon={faPlayCircle} style={{color: 'white', height: 50, width: 50, cursor: 'pointer'}} /></div>
            <div className="desc">exercises</div>
 <div style={{width: '100%', textAlign: 'right', fontSize: 10, marginTop: 5, marginRight: 5}}>0 minutes 44 seconds</div>
        </div>
</div>
    </div> 
</div>
: null


}

<Head>
  <meta property="og:title" content="Education" />
  <meta property="og:description" content="Online Education Providing Multilingual Online Courses" />
  <meta property="og:image" content="https://github.com/Timcodes117/Ca/blob/main/eduog.PNG?raw=true" />
</Head>


<div className="header">

<div className="logo"> Education</div>          

    <div className="search"></div>
    <div className="nav">
    <a>Home</a>
    <a href="">About</a>
    <a href="">Courses</a>
    <a href="">Contact</a>
    <a href="">Reviews</a>
</div>
        
<div className="right" style={{border: 'none', width: '80%', maxWidth: 500}}>
    <label htmlFor="" style={{fontSize: 10, display: 'flex', alignItems: 'center', color: 'grey'}}>
<FontAwesomeIcon icon={faSun} style={{width: 20, height: 20, marginRight: 5}} />
<div className="sel">

 <select  style={{background: 'white', color: 'black', opacity: 1, fontSize: 10, height: 30, width: 70, border: 'none'}}>
    <option value="">Light</option>
</select>
    <div className="dropDown">
        <label htmlFor="" style={{marginTop: 5, marginLeft: 20, height: 30, width: '100%', display: 'flex', alignItems: 'center',}}>Light Mode</label>
        <label htmlFor="" style={{marginTop: 5, marginLeft: 20, height: 30, width: '100%', display: 'flex', alignItems: 'center',}}> Dark Mode</label>
    </div> 
</div>
    </label>
<button style={{color: 'red', fontSize: 10, borderRadius: 5}}> SignOUt</button>
</div>
</div> 


    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: 70, height: 250}}>

    <div className="coverphoto">
        {/* <div className="signout">sign out</div> */}
    <strong  className='lm' id='nm' style={{ width: '50%', left: 220, fontSize: 30, position: 'absolute', bottom: 10, color: 'gainsboro'}}>Timothy Adebogun</strong>
    <div className="profilephoto"></div>
    </div>
    </div>
   <br />
   <br />
   <br />
   
   <div style={{marginTop: 30, width: '100%', display: 'flex', flexDirection: 'column'}}>
    <strong  className='lm' id="name" style={{ width: '50%', marginLeft: 50, fontSize: 30, display: 'none'}}>Timothy Adebogun</strong>
    <label   className='lm'style={{ width: '80%', maxWidth: 500, marginLeft: 50, fontSize: 10, color: 'grey'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quia magni quos nulla et natus laudantium, optio laborum cum aspernatur illum voluptatibus repudiandae sunt ad, at aut? Eos, quia molestias.</label>
    <br />
    <div className="btns">
    <button className='lm' style={{marginLeft: 50, background: '#c51d38', color: 'white'}}>Create New Course </button>
    <button onClick={()=> setTab('courses')} style={{marginLeft: 20, width: 150, border: '2px solid #c51d38', background: 'none'}}>View courses</button>

    </div>
    {/* <button>Create New Course</button> */}
   </div>
<br />
<br />
<br />
   <div className="tabs">
    <div className="tab" onClick={()=> setTab('activity')}style={tab === 'activity' ? {background: 'ghostwhite', fontSize: 11} : {background: 'white'}}><FontAwesomeIcon icon={faRunning} style={{width: 20}}/> Activity</div>
    <div className="tab" onClick={()=> setTab('courses')} style={tab === 'courses' ? {background: 'ghostwhite', fontSize: 11} : {background: 'white'}}><FontAwesomeIcon icon={faBookOpenReader} style={{width: 20}}/> Your courses</div>
    <div className="tab" onClick={()=> setTab('fav')}style={tab === 'fav' ? {background: 'ghostwhite', fontSize: 11} : {background: 'white'}}> <FontAwesomeIcon icon={faHeart} style={{width: 20}}/> Favourites</div>
   </div>
   <div className="tabcontent">
    {
        tab === 'activity' ?
        <>
             <div className="courrosell">
                 <div className="prev">Activity <FontAwesomeIcon icon={faBook} id='Aa' style={{width: 50, height: 50, marginRight: 100, marginTop: 150}}/> <FontAwesomeIcon icon={faClock} id='Aa' style={{width: 50, height: 50}}/> <FontAwesomeIcon icon={faRunning} id='Aa' style={{width: 50, height: 50, marginRight: 100, marginTop: 150}}/> <FontAwesomeIcon icon={faClock} id='Aa' style={{width: 50, height: 50}}/> </div>
             </div>
         <Courses onClick={()=> {setPrevstate('shown')}} />
        </>
        : null
    }
   
    {
        tab === 'courses' ?
        <>
             <div className="courrosell">
                 <div className="prev">Your Courses <FontAwesomeIcon icon={faBook} id='Aa' style={{width: 50, height: 50, marginRight: 100, marginTop: 150}}/> <FontAwesomeIcon icon={faBookAtlas} id='Aa' style={{width: 50, height: 50}}/> <FontAwesomeIcon icon={faBookOpenReader} id='Aa' style={{width: 50, height: 50, marginRight: 100, marginTop: 150}}/> <FontAwesomeIcon icon={faBookOpen} id='Aa' style={{width: 50, height: 50}}/> </div>
             </div>

             <div style={{width: '100%', height: 20, fontSize: 10, textAlign: 'center', alignItems: 'center', color: 'grey', marginTop: 20}}>Courses will appear here when you create a new course!</div>
        
        </>
        : null
    }

    {
        tab === 'fav' ?
        <>
             <div className="courrosell">
                 <div className="prev">Favourites <FontAwesomeIcon icon={faHeart} id='Aa' style={{color: 'red', width: 50, height: 50, marginRight: 100, marginTop: 150}}/> <FontAwesomeIcon icon={faHeart} id='Aa' style={{color: 'red', width: 50, height: 50}}/> <FontAwesomeIcon icon={faHeart} id='Aa' style={{color: 'red', width: 50, height: 50, marginRight: 100, marginTop: 150}}/> <FontAwesomeIcon icon={faHeart} id='Aa' style={{color: 'red', width: 50, height: 50}}/> </div>
             </div>
             <div className="courseView">
                <div className="courses">
             {/* {
                c ?  */}
                {
                    c ?
                        c.map((data : any) => {
                           if(data.fav === 'true'){

                               return (
                                   <>
                                         <div className="course" key={data.id} onClick={()=> setPrevstate('shown')} >
                                         <div className="thumbnail" id={`d${data.id}`} ></div>
                                         <br />
                                         <div className="favourite"><FontAwesomeIcon icon={faHeart} size={'xl'} style={data.fav === 'true' ? {width: 20, color: 'red'}: {width: 20, color: 'black'}} /></div>
                                         <strong style={{marginLeft: 20, fontSize: 20}}>{data.title}</strong>
                                         <label style={{fontSize: 10, marginLeft: 20}} htmlFor="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim inventore ipsum voluptate labore, dignissimos dolore ratione quam numquam nobis ducimus id quae doloremque, recusandae esse deserunt. Non sed commodi necessitatibus?</label>
                                         <strong style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: 20}}>$0.00</strong>
                                     </div>
                                          </>
                            )
                        }
                        })
            
                :
    <div style={{width: '100%', height: 20, fontSize: 10, textAlign: 'center', alignItems: 'center', color: 'grey', marginTop: 20}}>Bookedmarked, saved or favourite courses will appear here!</div>
             }
       
   </div>
   </div>
        </>
        : null
    }
   
   </div>
   
      <footer>
        <br />
        <b style={{color: '#c51d38', fontSize: 30, marginLeft: 20}}>Education</b>
        <p style={{fontSize: 12, fontWeight: 'bolder',color: 'white',marginLeft: 20}}>Providing <label style={{color: '#c51d38'}}>Multilingual</label> Online Courses</p>
        {/* <p style={{color: 'gainsboro', fontSize: 15, marginLeft: 20, width: '50%', height: 10,display: 'flex', alignItems: 'center', marginTop: 5}}>Tim_codes <FontAwesomeIcon icon={faEnvelope} style={{fontSize: 10, width: 10, marginLeft: 5}} /> <FontAwesomeIcon icon={faLineChart} style={{fontSize: 10, width: 10, marginLeft: 5}} /> <FontAwesomeIcon icon={faPhone} style={{fontSize: 10, width: 10, marginLeft: 5}} /></p> */}
        <p style={{color: 'gainsboro', fontSize: 12, marginLeft: 20, width: '50%', height: 10,display: 'flex', alignItems: 'center', marginTop: 5}}><FontAwesomeIcon icon={faCopyright} style={{fontSize: 15, width: 12, marginRight: 5, marginTop: 3}} />copyright 2023</p>

        <div className="lnxs">
            <div className="fl">
                <a onClick={()=> scrollto('home')}>Home</a>
                <a onClick={()=> scrollto('about')}>About</a>
                <a onClick={()=> scrollto('courses')}>Courses</a>
                <a onClick={()=> scrollto('contact')}>Reason</a>
                <a onClick={()=> scrollto('reviews')}>Reviews</a>
            </div>

            <div className="fl">
                <a href="facebook.com">Facebook</a>
                <a href="twitter.com">Twitter</a>
                <a href="instagram.com">Instagram</a>
                <a href='mailto:timcodes117@gmail.com'>Email us</a>
            </div>

            <div className="fl">
                <a href="">Search</a>
                <a href="/edu/signup">Signup</a>
                <a href="">Apply Now</a>
            </div>
        </div>
      </footer>
      
      

    </>
  )
}

export default Page
