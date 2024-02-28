import { useEffect } from "react";

export const AboutUs = () => {
  useEffect(()=>{
    document.title = "AboutUs";
  },[])
  return (
    <div className="text-gray-600 mx-auto w-[80%] mt-[100px]">
      <div className="px-[16px]">
        <h2 className="little-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-8">
        Driving the force of <span className="text-[#fbc531]">assortment</span>   
        </h2>
        <p className="mb-8 leading-relaxed sm:text-[18px] text-[14px]">
        For over a decade now, we’ve been empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice.
        </p>
        <h1 className="little-font sm:text-5xl text-4xl mb-2 font-medium text-gray-900 sm:mt-8 mt-5">Who are we?</h1>
        <div className="sm:w-[8%] w-[28%] border-[3px] border-[#fbc531] mb-3"></div>
        <div className="sm:flex">
        <p className="mb-8 leading-relaxed sm:text-[18px] text-[14px] sm:w-[55%] w-full text-justify"> 
        Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.
        </p>
        <img src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="" className="sm:h-[350px] h-[200px] rounded-[10px] sm:ml-7 ml-0 sm:mt-[-70px] mb-8"/>
        </div>
      </div>
      
    </div>
  )
}
