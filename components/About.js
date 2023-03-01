import HouseContainer from "./HouseContainer";
import imgOne from "../public/images/house_1.jpg"
import imgTwo from "../public/images/house_2.jpg"
import imgThree from "../public/images/house_3.jpg"
import imgFour from "../public/images/house_4.jpg"
import imgFive from "../public/images/interior_1.jpg"
import imgSix from "../public/images/interior_2.jpg"
import imgSeven from "../public/images/interior_3.jpg"
import imgEight from "../public/images/interior_4.jpg"

export default function About(props)
{
    return (<section className="relative w-[100vw]  overflow-x-hidden" id="about">
        <div className="ml-auto mr-auto w-fit text-4xl font-semibold mt-[80px] mb-[30px]" style={{transition:"opacity 0.8s ease 1s",opacity:"1",}}>Why Choose Us</div>
        <div className="text-left  text-3xl w-fit ml-auto mr-auto mt-[50px] mb-[50px] ">Best Real Estate all around the world</div>
        <div className="lg:flex hidden content-center mb-[10px] flex-wrap h-[400px] gap-2 w-fit ml-auto mr-auto  ">
         <HouseContainer content="House in Bali" image={imgOne} ></HouseContainer>   
         <HouseContainer content="House in Bali" image={imgTwo} hor></HouseContainer>   
         </div>
         <div className="lg:flex hidden content-center  flex-col lg:flex-row lg:flex-wrap gap-2 w-fit ml-auto mr-auto  ">
         <HouseContainer image={imgThree} hor></HouseContainer>   
         <HouseContainer image={imgFour} ></HouseContainer>   
        </div>
        <div className="flex lg:hidden content-center mb-[10px] flex-col gap-2 w-fit ml-auto mr-auto  ">
         <HouseContainer image={imgOne} hor></HouseContainer>   
         <HouseContainer image={imgTwo} hor></HouseContainer>   
         </div>
         <div className="flex lg:hidden content-center flex-col gap-2 w-fit ml-auto mr-auto  ">
         <HouseContainer image={imgThree} hor></HouseContainer>   
         <HouseContainer image={imgFour} hor></HouseContainer>   
        </div>
        <div className="text-left  text-3xl w-fit ml-auto mr-auto mb-[30px] mt-[80px]">Exceptional Interiors</div>
        <div className="lg:flex hidden content-center mb-[10px] flex-wrap h-[400px] gap-2 w-fit ml-auto mr-auto  ">
         <HouseContainer image={imgEight} hor></HouseContainer>   
         <HouseContainer image={imgFive} ></HouseContainer>   
         </div>
         <div className="lg:flex hidden content-center flex-wrap gap-2 w-fit ml-auto mr-auto  ">
         <HouseContainer image={imgSix} ></HouseContainer>   
         <HouseContainer image={imgSeven} hor></HouseContainer>   
        </div>
        <div className="flex lg:hidden content-center mb-[10px] flex-col gap-2 w-fit ml-auto mr-auto  ">
         <HouseContainer image={imgEight} hor></HouseContainer>   
         <HouseContainer image={imgFive} hor></HouseContainer>   
         </div>
         <div className="flex lg:hidden content-center flex-col gap-2 w-fit ml-auto mr-auto  ">
         <HouseContainer image={imgSix} hor></HouseContainer>   
         <HouseContainer image={imgSeven} hor></HouseContainer>   
        </div>
    </section>)
}