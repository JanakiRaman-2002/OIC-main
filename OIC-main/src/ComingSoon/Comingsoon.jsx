import React from 'react'
import ReactDOM from 'react-dom';
import "./Comingsoon.css";
import logo from "../imgs/olympiclogo-1.png"
import emblem from '../imgs/emblem.png';
import qsMark from '../imgs/qs.svg';
import sp1 from '../imgs/sp1.png';
import sp2 from '../imgs/sp2.png';
import sp3 from '../imgs/sp3.png';
import sp4 from '../imgs/vector-3.svg';
import sp5 from '../imgs/vector-7.svg';
import sp6 from '../imgs/vector-8.svg';
import sp7 from '../imgs/sp7.png';
import card3 from '../imgs/soft-6.png';
import card2 from '../imgs/soft-3-2.png';
import card1 from '../imgs/soft-3.png';
import { Link } from "react-router-dom";

const Comingsoon = () => {
    const handleNavDrop = () =>{
        document.getElementById("navdrop").classList.toggle("hidden");
    }
  return (
    <div className="bg-neutral-700 container w-full">
        <div className="flex flex-col">
                <nav className="flex  flex-col">
                    <div className="flex w-screen p-2">
                        <div className="w-2/3">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="text-white relative flex justify-end pr-2 gap-4 w-1/3 justify-self-end">
                            <button className="flex inter items-center gap-2"><i className="fa-solid fa-circle-user"></i> Sign Up</button> 
                            <button className="fa-solid fa-bars" onClick={handleNavDrop}></button>
                            <div className="flex flex-col ash h-screen hidden text-left text-black absolute -right-3 gap-4 top-10 z-20 bg-green p-2 text-sm " id="navdrop">
                        
                                <Link id="home" >Home</Link>
                                <Link id="home" >The Facility</Link>
                                <Link id="home" >Memberships</Link>
                                <Link id="home" >Batting Cages</Link>
                                <Link id="home" >Programs & Events</Link>
                                <Link id="home" >Contact Us</Link>
                                <button className="border-2 border-black rounded-md py-1 -px-2 " onClick={handleNavDrop}>Close</button>
                            </div>
                        </div>
                    </div>
                    
                </nav> 
                
            </div>
            <div className="justify-center h-2/5 flex flex-auto">
                <img src={emblem} className='bg-no-repeat bg-center bg-cover opacity-20' alt="" />
                <h1 className='text-black absolute inline-block align-text-middle my-80 text-lime-400 font-mono text-9xl font-bold'>COMING SOON!</h1>
                <h1 className='text-slate-100 absolute inline-block align-text-middle font-mono text-4xl this'>WE ARE BRINGIN' SOMETHING AWESOME YOUR WAY</h1>
            </div>
            <div className="w-screen relative shadow-md shadow-black flex flex-col justify-center text-center items-center bg-black py-3">
            <hr className="w-full h-2 bg-green" />
            <p className="absolute px-4  bg-black text-2xl text-white">Contact Us</p>
        </div>           
        
        <div>
            <div class="flex h-screen flex-col gap-4 ">
                <div class="h-1/2 do flex text-center flex-col bg-black-con px-4 pt-5">
                    <div className="text-6xl text-color-1">Got questions? </div>
                    <div className="text-3xl text-white mt-4 ">We will love to hear them!</div>
                    <span className="text-color-1 w-60 h-40 mt-4 justify-self-center   mx-auto">
                        <img src={qsMark} width="100%" height={"100%"}  alt="" />
                    </span>
                </div>
                <div class=" h-1/2 flex bg-gray-1 inter flex-col p-2 ">
                    <div class="flex m-auto flex-col gap-4">
                        <input type="text" className="bg-black-con p-2  form-border  rounded-lg" placeholder="Fist Name & Last Name"/>
                        <input type="text" className="bg-black-con p-2 form-border rounded-lg" placeholder="Phone Number"/>
                        <input type="text"className="bg-black-con p-2 form-border rounded-lg"  placeholder="Email Address"/>
                        <input type="text" className="bg-black-con p-6 form-border rounded-lg" placeholder="Message or Question" />
                        <button className="p-2 bg-green mt-4">SUBMIT</button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    <hr className="w-full h-2 inter bg-green" />
    <img src="imgs/logoemblem-2-1.png" alt="" id="backimg"/>
    <div class="lastcomponent">
        <div class="split1">
            <div class="discription">
                Olympic Indoor Sports, a game-changing platform for young athletes in Maryland
                <br/>
                to step up and show off their skills in sports such as baseball, softball, cricket, and lacrosse.
                <br/><br/>
                Our mission is to provide a comprehensive space where these young rising stars can take a swing at their
                athletic aspirations and score big in the game of life.
                <br/><br/>
                We're proud to be the home plate for the future generation of American sports, and we hope to establish a
                precedent for other players in the industry. So come on over, join the team, and let's play ball!
            </div>
            
        </div>
        <div className="flex w-full ">
            <div class="w-3/5 flex gap-4 flex-col ">
                    <p className="text-sm text-color-1">QUICK LINKS</p>
                    <p className="">The Facility</p> 
                    <p>
                    Memberships 
                    </p>
                    <p>
                    Batting Cages 
                    </p>
                    <p>
                    Porgrams & Events 
                    </p>
                    <p>
                    Contact Us
                    </p>
            </div>
            <div className=" w-2/3 mx-auto justify-self-end flex gap-2 text-end flex-col">
                <div className="flex flex-col">
                <span className="text-color-1">Location</span>
                Olympic Indoor Sports
                9179 Red Branch rd Suite #A Columbia, MD 21045
                </div>
            <div>
            <div class="flex flex-col inter">
                <span className="text-color-1">Timings</span>
                7:00 AM EST - 11:00 PM EST from Monday to Sunday. <br/>
                You will receive a prompt response from our team within 24 hours.
            </div>
           
                <div class="flex flex-col  inter">
                        <span className="text-color-1">Contact Us</span>
                        Phone:(123) 456-7890
                </div>
            </div>
            </div>
            </div>
            
           
        </div>
        <div class="flex flex-wrap inter">
            
            <div class="location inter">
                
            
        </div>
        </div>
            <footer className="text-sm">
                © 2023 Olympic Indoor Sports. Powered by Eazy Eyez Entertainment.
            </footer>
    </div>
  )
}

export default Comingsoon