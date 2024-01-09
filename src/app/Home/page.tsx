"use client"

import React, {useState} from 'react'
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCircleDot, faClock, faClose, faCopyright, faCrop, faDotCircle, faExpand, faGraduationCap, faHeart, faPlay, faPlayCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import Courses from './Profile/courses'

const Page: React.FC = () =>  {
    const [prevstate, setPrevstate] = useState<string>('hidden')
    const [swipe, setSwipe] = useState<number>(0)
    

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
        <label className='ltitle' style={{fontSize: 10, width: '80%', maxWidth: 500, marginLeft: 50}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex amet voluptas molestiae? Iure inventore fugiat alias consequuntur! Tempore exercitationem error, nemo atque esse, necessitatibus maxime, assumenda enim fuga doloribus eum!</label>
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
     <header>

            <div className="logo"> Education</div>          

            <div className="nav">
                {/* <a onClick={scrollto('home')}>Home</a> */}
            </div>          
            <div className="right" style={{border: 'none', width: '80%', maxWidth: 500}}>
            <div className="profile">
                <div className="avatar"></div>
                <label htmlFor="">Timothy Adebogun</label>
            </div>
            <button style={{color: 'white', fontSize: 10, borderRadius: 5}} onClick={()=> window.open('Home/Profile')}>  Profile</button>
            </div>
            </header> 
            <div className="hero">
                <div className="label">
                <label htmlFor="">Hi Timothy,</label>
                <strong style={{fontSize: 50}}>Find Your <label style={{color: '#f92347'}}>Match</label>.</strong>
                <strong style={{fontSize: 50, width: '90%', maxWidth: 700}}>Watch, <label style={{color: '#f92347'}}>Create</label> and <label style={{color: '#f92347'}}>Share</label>.</strong>
                <label htmlFor="" style={{fontSize: 10, width: '90%',  maxWidth: 500}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus commodi deserunt veniam distinctio recusandae voluptatibus quo est nobis impedit ex, fugit provident doloremque modi id voluptates. Odio rem molestias illum.</label>
                </div>       
                <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',bottom: 30, position: 'absolute'}}>
                <div className="search">
                    <FontAwesomeIcon icon={faSearch} style={{width: 20, height: 20, marginLeft: 10, marginRight: 10}}/> <input type="text" name="" id="" placeholder='Find your match' />
                </div>
                    </div>   

                </div>

            <br />
            <br />

            <div className="head"></div>
           <Courses onClick={()=> setPrevstate('shown')}/>
           <footer>
        <br />
        <div style={{position: 'absolute', left: 6, top: -70}}>
        <b style={{color: '#c51d38', fontSize: 30, marginLeft: 20}}><FontAwesomeIcon icon={faGraduationCap} style={{width: 25, height: 25, marginRight: 10}}/>Education</b>
        <figcaption style={{fontSize: 12, fontWeight: 'bolder',color: 'grey',marginLeft: 20}}>Providing <label style={{color: '#c51d38'}}>Multilingual</label> Online Courses</figcaption>
        {/* <p style={{color: 'gainsboro', fontSize: 15, marginLeft: 20, width: '50%', height: 10,display: 'flex', alignItems: 'center', marginTop: 5}}>Tim_codes <FontAwesomeIcon icon={faEnvelope} style={{fontSize: 10, width: 10, marginLeft: 5}} /> <FontAwesomeIcon icon={faLineChart} style={{fontSize: 10, width: 10, marginLeft: 5}} /> <FontAwesomeIcon icon={faPhone} style={{fontSize: 10, width: 10, marginLeft: 5}} /></p> */}
        {/* <p style={{color: 'gainsboro', fontSize: 12, marginLeft: 20, width: '50%', height: 10,display: 'flex', alignItems: 'center', marginTop: 5}}><FontAwesomeIcon icon={faCopyright} style={{fontSize: 15, width: 12, marginRight: 5, marginTop: 3}} />copyright 2023</p> */}
        </div>

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
