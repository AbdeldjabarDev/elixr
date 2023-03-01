import {IoMdArrowRoundForward} from "react-icons/io"
import { IoArrowForward,IoArrowBack } from "react-icons/io5"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
export default function Hero({data})
{
    let [x,setX] = useState(0);
    let router = useRouter();
    useEffect(()=>
    {
        
        let timer = setTimeout(()=>
        {
            
            if(x < data.length-1)
           setX(x+1)
           else
           setX(0);
        },3000)
        return () => clearTimeout(timer);
    },[x])
    return (<section className="relative h-[100vh] max-h-[1100px] overflow-hidden">
       <div className="w-full h-full relative overflow-hidden flex justify-center items-center" >
      {data.map((s,i)=>
      {
        return (<div key={i} className="w-[100vw] h-[100vh] overflow-hidden absolute top-0 left-0 " style={{opacity:i == x ? "1":"0",transition:"opacity 0.8s ease"}}>
            <div className="relative text-white">
             <Image className="h-[100vh] object-cover"  src={s.image}></Image>
                <div className="absolute top-[50vh] left-0 ml-[100px] md:ml-[150px] lg:ml-[180px]">
                    <h1 className="text-2xl font-[400] mb-[10px]" style={{fontSize:"clamp(1rem,8vw,2rem)",textTransform:"uppercase",textAlign:"left"}}>{s.title}</h1>
                    <p className="text-lg mb-[10px]">{s.price}</p>
                    <button className="bg-[#000d1a] text-white  gap-1 lg:flex p-3 hover:translate-y-[-2px] flex items-center" onClick={(e)=>
                    {
                        router.push('/homes')
                        
                    }}>{s.label}<IoMdArrowRoundForward /></button>

                </div>
            </div>

        </div> )
      })}
     <div className="absolute gap-5  flex right-[100px] bottom-[50px] z-20">
     <IoArrowBack    onClick={(e)=>
    {
        if(x < data.length-1)
        setX(x+1)
        else
        setX(0);
    }} color="white"  className="cursor-pointer bg-[#000d1a] rounded-full p-2 w-[40px] h-[40px]  hover:bg-[#cd853f]  " />
     <IoArrowForward onClick={(e)=>
    {
        if(x > 0)
        setX(x-1)
        else
        setX(data.length-1);
    }} color="white" className="cursor-pointer bg-[#000d1a] rounded-full p-2 w-[40px] h-[40px]  hover:bg-[#cd853f] " />
     </div>
     
       </div>
    </section>

    )
}