import { useInView } from "react-intersection-observer"
import Image from "next/image";
export default function HouseContainer(props)
{
    let {ref,inView,entry} = useInView();
    
    return (<div className="lg:w-[600px] relative w-full h-[400px] " ref={ref} style={{transform:inView == true ?  (props.hor ? "translateX(0%)":"translateY(0%)"):props.hor ? "translateX(50%)":"translateY(50%)",transition:"transform 1s ease 0.2s"}}>
        <Image className="object-cover w-full h-full"  src={props.image}></Image>
        <div className="aboslute top-0 left-0 z-50 flex items-center justify-center text-lg text-white">
            <div>{props.content}</div>
        </div>
    </div>)
//     else
//     return(<div className=" w-full h-[400px] translate-x-[50%] " ref={ref} style={{transform:inView == true ?  "translateX(0%)":"translateX(50%)",transition:"transform 1s ease"}}>
//     <Image className="object-cover w-full h-full"  src={props.image}></Image>
// </div>)
}