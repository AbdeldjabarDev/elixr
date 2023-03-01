import { HousesData, sliderData } from "../components/sliderData"
import { useState,useEffect } from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import { IoArrowBack,IoArrowForward } from "react-icons/io5";
export default function Homes(props)
{
    let [x,setX] = useState(0);

    useEffect(()=>
    {
        
        let timer = setTimeout(()=>
        {
            
            if(x < 3)
           setX(x+1)
           else
           setX(0);
        },3000)
        return () => clearTimeout(timer);
    },[x])
    return(<div className="w-full flex flex-col overflow-x-hidden ">
        <Nav h></Nav>
        {
            HousesData.map((e,i)=>
            {
              return  <section className=" relative w-[100vw] h-[100vh]" key={i}>
                   {e.images.map((ee,ii)=>
                   {
                    return <div key={ii} className="w-[100vw] h-[100vh] overflow-hidden absolute top-0 left-0 " style={{opacity:ii == x ? "1":"0",transition:"opacity 0.8s ease"}}>
                    <div className="relative text-white">
                     <Image className="h-[100vh] object-cover"  src={ee}></Image>
                        <div className="absolute top-[10vh] left-0 ml-[40px] md:ml-[80px] lg:ml-[80px]">
                            <h1 className="text-2xl font-[400] mb-[10px]" style={{fontSize:"clamp(1rem,8vw,2rem)",textTransform:"uppercase",textAlign:"left"}}>{sliderData.at(i).title}</h1>
                            <p className="text-lg mb-[10px]">{e.Location}</p>
                            <p className="text-lg mb-[10px]">{e.size}</p>
                            <p className="text-lg mb-[10px]">{e.numRooms} Rooms</p>
                            <p className="text-lg mb-[10px]">{e.sp}</p>
                            <p className="text-lg mb-[10px]">{sliderData.at(i).price}</p>        
                        </div>
                        
                    </div>
                    <div className="absolute gap-5  flex right-[100px] bottom-[50px] z-20">
     <IoArrowBack    onClick={(e)=>
    {
        if(x < 3)
        setX(x+1)
        else
        setX(0);
    }} color="white"  className="cursor-pointer bg-[#000d1a] rounded-full p-2 w-[40px] h-[40px]  hover:bg-[#cd853f]  " />
     <IoArrowForward onClick={(e)=>
    {
        if(x > 0)
        setX(x-1)
        else
        setX(3);
    }} color="white" className="cursor-pointer bg-[#000d1a] rounded-full p-2 w-[40px] h-[40px]  hover:bg-[#cd853f] " />
     </div>
        
                </div>
                   })}
                </section>
            })
        }
    </div>)
}