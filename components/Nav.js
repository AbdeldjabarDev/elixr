import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react"
import {AiFillCloseCircle} from "react-icons/ai"
export default function Nav(props)
{
    let [vis,setVis] = useState(false);
    let menuRef = useRef();
    let router = useRouter();
    useEffect(()=>
    {
       document.body.onscroll = function(e)
       {
        console.log('scrolling : ' + window.scrollY + "and  : "  + parseInt(window.scrollY % window.innerHeight,10))
        if(props.h)
       { if(window.scrollY === 0 || parseInt(window.scrollY % window.innerHeight,10) < 80  || parseInt(window.scrollY % window.innerHeight,10) > 740)
        {
            console.log('scrolling : ' + window.scrollY + ' ' + vis)
            setVis(false);
        }
        return;
    }
        
        if(window.scrollY === 0)
        {
            // console.log('scrolling : ' + window.scrollY + ' ' + vis)
            setVis(false);
        }
        else
        setVis(true);
       }
    })

    return(<div className="w-full h-[80px] p-4 z-40 text-white  flex justify-between fixed top-0 left-0" style={{backgroundColor:vis == false ? "transparent":"#000d1a",transition:"background 0.6s ease"}}>
        <div className="self-center text-xl italic ">ELIXR</div>
        <div className=" gap-4 self-center hidden mr-20 lg:flex h-fit cursor-default">
            <div className="text-lg" onClick={(e)=> router.replace('/')}>Home</div>
            <div className="text-lg" onClick={(e)=> router.replace('/#about')}>About</div>
            <div className="text-lg" onClick={(e)=> router.replace('/homes')}>Houses</div>

        </div>
        <div className="absolute top-0 transition-transform left-0 z-50 bg-[#cd851f] flex-col hidden w-[100vw] h-[100vh] gap-10" ref={menuRef}>
        <AiFillCloseCircle size={22} className="absolute top-10 right-10 z-50 " onClick={(e)=>
                {
                    

                    menuRef.current.style.transform = "translateY(-100%)";
                }}></AiFillCloseCircle>
            <div className="relative flex flex-col gap-10  w-fit ml-auto mr-auto mt-[100px] cursor-default">
              
            <div className="text-2xl font-semi-bold" onClick={(e)=> router.replace('/')}>Home</div>
            <div className="text-2xl font-semi-bold" onClick={(e)=> router.replace('/#about')}>About</div>
            <div className="text-2xl font-semi-bold" onClick={(e)=> router.replace('/homes')}>Houses</div>
            </div>
        </div>
        {/* <div className="bg-[#000d1a] hidden lg:flex p-3 hover:translate-y-[-5px]" style={{transition:"0.5s ease"}}>Contact Us</div> */}
       <i className="absolute top-0 right-0 translate-x-[-50%] translate-y-[50%] bg-no-repeat bg-cover bg-[url('/images/bars.svg')] lg:hidden w-[51px] h-[35px] self-center" onClick={(e)=>
    {  
        menuRef.current.style.display = "flex";
        menuRef.current.style.transform = "translateY(0%)";      
    }}></i>

    </div>)
}