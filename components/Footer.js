import {BsTelephone} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import { ImLocation} from "react-icons/im"
export default function Footer(props)
{
    return (<div className="lg:h-[450px] h-fit  w-full bg-[#000d1a] lg:flex-row flex-col flex mt-[200px] pb-[100px]">
    <div className="flex gap-10 flex-col w-fit text-white mt-[150px] lg:ml-[200px] ml-[80px]">
    <div className="flex gap-2"><BsTelephone></BsTelephone>Number   <span>+1 456 785</span></div>
    <div className="flex gap-2"><AiOutlineMail></AiOutlineMail>Email   <span>lorem.ipsum@gmail.com</span></div>
    <div className="flex gap-2"><ImLocation color="#ffffff"></ImLocation>Address  <span>lorem,Ipsum,Dolor</span></div>  
    <div></div>
    </div>
<iframe className="mt-[80px] lg:mr-20 mr-auto ml-auto" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="300" frameBorder="0"  allowFullScreen=""></iframe>
   
    </div>)
}