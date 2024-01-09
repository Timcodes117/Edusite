"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import './edu.css'
import Cap from './command.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCopyright, faEnvelope, faGraduationCap, faLaptopCode, faLineChart, faPhone, faPlayCircle, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core";
import { DotLoader } from 'react-spinners';

const Page: React.FC = () =>  {
  config.autoAddCss = false;
  const [load, setLoded] = useState<string>('shown')
  
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

  useEffect(() => {
    const handleLoad = () => {
      // Function to be triggered when the page is fully loaded
      console.log('Page is fully loaded!');
      setTimeout(()=>{
        setLoded('hidden')
      }, 5000)
    };

    handleLoad();
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <>
{
  load === 'shown' ? 
     <div className='loader'>
      <DotLoader color='#c51d38' />
      <strong style={{marginLeft: 20, fontSize: 20, color: '#c51d38'}}>Edusite </strong>
     </div> : null
}

      <header id='hm'>

        <div className="logo">< FontAwesomeIcon icon={faGraduationCap} style={{width: 30, height: 30, marginRight: 5}}/> Education</div>

        <div className="nav">
            <a style={{textDecoration: 'underline', color: '#c51d38'}}>Home</a>
            <a onClick={()=> scrollto('about')}>About</a>
            <a onClick={()=> scrollto('courses')}>Courses</a>
            <a onClick={()=> scrollto('contact')}>Contact</a>
            <a onClick={()=> scrollto('reviews')}>Reviews</a>
        </div>

        <button style={{color: 'white', fontSize: 10, borderRadius: 5}}>Login / Register</button>
      </header>

      <div className="hero">
        <div className="herocontent">
            <label style={{color: '#c51d38'}}>Online Education</label>
            <p style={{fontSize: 40, fontWeight: 'bolder'}}>Providing <label className='ml'>Multilingual</label></p>
            <p style={{fontSize: 40, fontWeight: 'bolder'}}>Online Courses</p>
<br />
            <p style={{fontSize: 13, maxWidth: '75%'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia cumque et eius dolor molestias itaque incidunt inventore. Ex ab facilis reiciendis eos quidem natus facere, totam, quibusdam nihil eligendi enim.</p>
<br />
            <div className="searchInput">
              <FontAwesomeIcon icon={faSearch} style={{width: 20, height: 20, marginLeft: 10}} />
                <input type="text" name="" id="" placeholder='  Search for courses' />
                <button>Search</button>
            </div>
            <div className='info'>
                <figcaption style={{margin: 10, display: 'flex', flexWrap: 'wrap', fontSize: '0.9rem'}}><FontAwesomeIcon icon={faGraduationCap} style={{ margin: 5, color: '#c51d38', width: 20, height: 20}}/> Over 2 million students</figcaption>
                <figcaption style={{margin: 10, display: 'flex', flexWrap: 'wrap', fontSize: '0.9rem'}}><FontAwesomeIcon icon={faBook} style={{ margin: 5, color: '#c51d38', width: 20, height: 20}}/> Over 20,000 Courses</figcaption>
                <figcaption style={{margin: 10, display: 'flex', flexWrap: 'wrap', fontSize: '0.9rem'}}><FontAwesomeIcon icon={faLaptopCode} style={{ margin: 5, color: '#c51d38', width: 20, height: 20}}/> Learn Anytime Online</figcaption>
            </div>
        </div>
      </div>

      <div className="courses">

        <div className="course_box">
        <Image
              src="/art.png"
              alt="education course logo"
              className={'icon'}
              width={100}
              height={24}
              priority
            />
            <br />
            <b>Arts & crafts</b>
            <br />
            <p style={{fontSize: 11, width: '90%', textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at minima expedita doloribus. </p>
        </div>
        

        <div className="course_box" style={{background: '#c51d38'}}>
            <Image
              src="/benzene.png"
              alt="Vercel Logo"
              className={'icon'}
              width={100}
              height={24}
              priority
            />
            <br />
            <b style={{color: 'white'}}>Chemistry</b>
            <br />
            <p style={{fontSize: 11,width: '90%', textAlign: 'center', color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at minima expedita doloribus. </p>
        </div>

        <div className="course_box">
        <Image
              src="/megnet.png"
              alt="Vercel Logo"
              className={'icon'}
              width={100}
              height={24}
              priority
            />
            <br />
            <b>Physics</b>
            <br />
            <p style={{fontSize: 11, width: '90%', textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at minima expedita doloribus. </p>
        </div>

        <div className="course_box">
        <Image
              src="/worldwide-location.png"
              alt="Vercel Logo"
              className={'icon'}
              width={100}
              height={24}
              priority
            />
            <br />
            <b>Geography</b>
            <br />
            <p style={{fontSize: 10, width: '90%', textAlign: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at minima expedita doloribus. </p>
        </div>

      </div>
<br />
      <section className='about' id='abt'>
        <span className="img"></span>

        <div className='details'>
            <label style={{color: '#c51d38', fontSize: 15}}>About Us</label>
            <b style={{fontSize: 30}}>Learn <b style={{color: '#c51d38', fontSize: 30}}>Anytime</b> And Anywhere Today!</b>
<br />
            <p style={{width: '100%', fontSize: 13}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui id neque maiores quisquam sapiente delectus earum repellendus. Mollitia ab magnam corporis libero accusantium incidunt debitis dolores, doloribus nihil sunt?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium qui id neque maiores quisquam sapiente delectus earum repellendus. Mollitia ab magnam corporis libero accusantium incidunt debitis dolores, doloribus nihil sunt?
            </p>

            <br />

            <button>Learn More..</button>
        </div>
      </section>

      <br />

      <section className='our_courses' id='crs'>
            <label style={{color: '#c51d38', fontSize: 15, width: '90%', marginLeft: 20}}>our courses</label>
            <b style={{fontSize: 30,width: '90%', marginLeft: 20 }}>Our Most <b style={{color: '#c51d38', fontSize: 30}}>Popular</b> Course</b>
<br />

            <div className="courseView">
                <div className="view">
                    <div className="thumbnail1"></div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>

<div className="profile"></div>
<div style={{display: 'flex', flexDirection: 'column'}}>

    <div className="author" >
         <b>Tech Pedro</b>
    </div>
 
    <figcaption style={{width: '80%', marginLeft: 10, height: 20}}>The Complete React Native course for begginers.</figcaption>
</div>
</div>
                    <br />
                    <br />
                    <b className="ratings">
                        $32.00

                                                <label style={{position: 'absolute', right: 5, color: 'gold', display: 'flex', flexDirection: 'row', width: '15%', justifyContent: 'flex-end', fontSize: 5}}><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 10}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2, }} /></label>

                    </b>
                </div>
                <div className="view">
                <div className="thumbnail2"></div>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>

                <div className="profile" id='rev1'></div>
                <div style={{display: 'flex', flexDirection: 'column'}}>

                    <div className="author" >
                         <b>Sonny Shanga</b>
                    </div>
                 
                    <figcaption style={{width: '80%', marginLeft: 10, height: 20}}>The Complete React Native course for begginers.</figcaption>
                </div>
                </div>

                    <br />
                    <br />
                    <b className="ratings">
                        $22.00

                                                <label style={{position: 'absolute', right: 5, color: 'gold', display: 'flex', flexDirection: 'row', width: '15%', justifyContent: 'flex-end', fontSize: 5}}><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 10}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'grey', fontSize: 2, }} /></label>

                    </b>
                </div>
                <div className="view">
                <div className="thumbnail3"></div>

                     {/* <Image
              src="/pexels-jeshootscom-714698.jpg"
              alt="Vercel Logo"
              className={'thumbnail'}
              width={100}
              height={24}
              quality={90}
              priority
            /> */}
                     <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>

<div className="profile" id='rev2'></div>
<div style={{display: 'flex', flexDirection: 'column'}}>

    <div className="author">
         <b>Sonny Shanga</b>
    </div>
 
    <figcaption style={{width: '80%', marginLeft: 10, height: 20}}>The Complete React Native course for begginers.</figcaption>
</div>
</div>
                    <br />
                    <br />
                    <b className="ratings">
                        $59.99

                                                <label style={{position: 'absolute', right: 5, color: 'gold', display: 'flex', flexDirection: 'row', width: '15%', justifyContent: 'flex-end', fontSize: 5}}><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 10}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'grey', fontSize: 2, }} /></label>

                    </b>
                </div>
            </div>
      </section>
      
      <br />
      <br />

      <div className="explainer" id='ctc'>
        
        <b className="einfo">
          <b style={{fontSize: 13, color: '#c51d38'}}>Explainer</b>
          <br />
        Why we are <span style={{color: '#c51d38'}}>best for </span>you!</b>
        <div className="evideo"><FontAwesomeIcon icon={faPlayCircle} style={{width: 50, height: 50, color: 'white'}}/></div>
      </div>

      <div className="reviews" id='rws'>
      <p style={{fontSize: 40, fontWeight: 'bolder', width: '100%', textAlign: 'center', marginTop: 10}}>Our Lovely <label style={{color: '#c51d38'}}>Students</label> Reviews</p>
       <br />
        <div className="commentsmall">
        <div className="author" style={{width: '85%'}}> 
                <div className="profile" id='rev3'></div>
                 <b style={{fontSize: 15}}>Nathan kress</b>
                 <label>Instagram</label>
            </div>
                {/* <label style={{fontSize: 12, marginLeft: 35}}>new course</label> */}
                <br />

                <p style={{width: '80%', fontSize: 12}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae non vel laboriosam, doloremque minima id aperiam itaque neque natus voluptate iure. Magni totam, neque veritatis quam eius ullam provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio tempora nostrum dignissimos, illum ipsa reprehenderit eligendi aperiam inventore, omnis non. Aperiam animi eos temporibus, natus ipsam recusandae reprehenderit ipsum.</p>
                <label style={{position: 'absolute', right: 5, bottom: 10, color: 'gold', display: 'flex', flexDirection: 'row', width: '15%', justifyContent: 'flex-end', fontSize: 5}}><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 10}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /></label>
<br />
        </div>
       
        <div className="comment">
        <div className="author" style={{width: '85%', marginTop: -35}}>
                <div className="profile" id='rev1'></div>
                 <b style={{fontSize: 15}}>Charlie Puth</b>
                 <label>Twitter</label>
               
            </div>
                {/* <label style={{fontSize: 12, marginLeft: 35}}>new course</label> */}
                <br />

                <p style={{width: '80%', fontSize: 12}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae non vel laboriosam, doloremque minima id aperiam itaque neque natus voluptate iure. Magni totam, neque veritatis quam eius ullam provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio tempora nostrum dignissimos, illum ipsa reprehenderit eligendi aperiam inventore, omnis non. Aperiam animi eos temporibus, natus ipsam recusandae reprehenderit ipsum.</p>
                <label style={{position: 'absolute', right: 5, bottom: 10, color: 'gold', display: 'flex', flexDirection: 'row', width: '15%', justifyContent: 'flex-end', fontSize: 5}}><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 10}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /></label>
<br />
<br />
        </div>
       
        <div className="commentsmall">
        <div className="author" style={{width: '85%'}}>
                <div className="profile" id={'rev2'}></div>
                 <b style={{fontSize: 15}}>Tim cooks</b>
                 <label>Facebook</label>
            </div>
                {/* <label style={{fontSize: 12, marginLeft: 35}}>new course</label> */}
                <br />

                <p style={{width: '80%', fontSize: 12}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vitae non vel laboriosam, doloremque minima id aperiam itaque neque natus voluptate iure. Magni totam, neque veritatis quam eius ullam provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio tempora nostrum dignissimos, illum ipsa reprehenderit eligendi aperiam inventore, omnis non. Aperiam animi eos temporibus, natus ipsam recusandae reprehenderit ipsum.</p>
                <label style={{position: 'absolute', right: 5, bottom: 10, color: 'gold', display: 'flex', flexDirection: 'row', width: '15%', justifyContent: 'flex-end', fontSize: 5}}><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 10}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /><FontAwesomeIcon icon={faStar} style={{color: 'gold', fontSize: 2}} /></label>
                <br />
        </div>


   
      </div>
      <br />
      <div className="end">
        <div className="frame">
            <b style={{marginLeft: 20, fontSize: 25, color: 'white'}}>Explore thousands of courses </b>

            <button>Apply Now</button>
        </div>
      </div>

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
