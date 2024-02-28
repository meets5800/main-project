
import phones from "../assets/phones.png";

export const Delivery = () => {

  return (
    <div className="w-[90%] mx-auto sm:mt-[100px] mt-[5px] sm:mb-10 mb-[50px]">
      <div className="flex justify-center text-[30px] text-[#fbc531] font-[500]">Quick Delivery App</div>
      <div className="w-full sm:flex sm:flex-row flex-col">
        <div className="sm:w-[50%] w-full flex justify-end">
          <img className="w-[90%] sm:p-16 p-4 sm:mt-0 mt-4" src={phones} alt="phone" />
        </div>
        <div className="flex flex-col justify-center sm:items-start sm:mx-[0px] mx-auto items-center sm:w-[40%] w-[60%]">
          <div className="sm:text-[30px] text-[20px] font-[500] text-[green]">Get The App</div>
          <div className="sm:text-[50px] text-[24px] font-bold mb-[20px] text-black">The Fastest Food Delivery In India</div>
          <div>
            <button className="bg-black text-white sm:w-[150px] w-[100px] sm:h-[50px] h-[30px] sm:rounded-xl rounded-lg font-semibold sm:text-[20px] text-[12px]">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
