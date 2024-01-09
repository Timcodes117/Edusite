"use client"
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCircleDot, faClock, faDotCircle, faHeart, faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

interface CoursesProps {
    onClick: any;
  }

 
const Courses: React.FC<CoursesProps> = ({ onClick }) => {

    // var localStorage : any = window.localStorage;
    //  const [windowdata, setWindowdata] = useState<object>([{id: '', title: '', about: '', duration: '', author: '', previews: ['name'], price: '' }])
    const [c, setc ] = useState<any>(JSON.parse(`${typeof window !== 'undefined' ? localStorage.getItem('courses') : null}`))
    const getCourses = ()=>{
         setc(JSON.parse(`${typeof window !== 'undefined' ? localStorage.getItem('courses') : null}`))
        //  console.log(c, 'courses')         
       

    }


    useEffect(()=>{
        getCourses()

        if('courses' in localStorage){
            // localStorage.setItem('courses', JSON.stringify([{id:0,title:"Introduction to Flutter SDK and Dart",info:"", duartion:"5 hours",fav:"false", author:"NotJustDev",price:"$30.00",previewurls:["","",""]},{id:1,title:"Figma UI/UX for beginners",info:"", duartion:"2 hours",fav:"true", author:"Ashik",price:"$9.99",previewurls:["","",""]},{id:2,title:"Unreal Engine Game Devlopment",info:"", duartion:"7 hours",fav:"false", author:"12th Hour",price:"$64.99",previewurls:["","",""]},{"id":3,title:"React native Tutorial (Android)",info:"", duartion:"4 hours",fav:"true", author:"12th Hour",price:"Free",previewurls:["","",""]},{"id":4,title:"Google AI (for Android)",info:"", duartion:"3 hours",fav:"false", author:"Sonny shangal",price:"Free",previewurls:["","",""]}]))
            null
        }else{
            typeof window !== 'undefined' ? localStorage.setItem('courses', JSON.stringify([{id:0,title:"Introduction to Flutter SDK and Dart",info:"", duartion:"5 hours",fav:"false", author:"NotJustDev",price:"$30.00",previewurls:["","",""]},{id:1,title:"Figma UI/UX for beginners",info:"", duartion:"2 hours",fav:"true", author:"Ashik",price:"$9.99",previewurls:["","",""]},{id:2,title:"Unreal Engine Game Devlopment",info:"", duartion:"7 hours",fav:"false", author:"12th Hour",price:"$64.99",previewurls:["","",""]},{"id":3,title:"React native Tutorial (Android)",info:"", duartion:"4 hours",fav:"true", author:"12th Hour",price:"Free",previewurls:["","",""]},{"id":4,title:"Google AI (for Android)",info:"", duartion:"3 hours",fav:"false", author:"Sonny shangal",price:"Free",previewurls:["","",""]}])) :null
            location.reload();
        }
    }, [])


    return (
        <>
    <div className="courseView" >
                <div className="courses">
                    {
                        c ?
                        c.map((data : any, index : any) => {
                            return (
                                <>
                                    
                                  <div className="course" key={data.id} id={data.id + index} onClick={onClick} >
                                  <div className="thumbnail" id={`d${data.id +1 }`} ></div>
                                  <br />
                                  <div className="favourite"><FontAwesomeIcon icon={faHeart} size={'xl'} style={data.fav === 'true' ? {width: 20, color: 'red'}: {width: 20, color: 'black'}} /></div>
                                  <strong style={{marginLeft: 20, fontSize: 20}}>{data.title}</strong>
                                  <label style={{fontSize: 10, marginLeft: 20}} htmlFor="">Lorem ipsum dolor sit amet consectetur adipisicing elit. </label>
                                  <br />
                                  <figcaption style={{fontSize: 15, marginLeft: 20}}> {data.author}</figcaption>
                                  {/* <br /> */}
                                  <strong style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', fontSize: 20}}>{data.price}</strong>
                              </div>
                                          </>
                            )
                        })
                        : null
                    }
                </div>
                </div>
   </>
  )
  
}

export default Courses

