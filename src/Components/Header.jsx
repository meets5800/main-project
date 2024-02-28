import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { abc } from "./App"; 
export const Header = () => {
  const [hamList, setHamList] = useState(false);
  return (
    <abc.Consumer>
      {(count)=>{
        return(
          <div className="fixed z-50 bg-white top-0 w-full">
      <div className="flex justify-between items-center sm:py-[2px] py-[2px] sm:px-[25px] px-[18px] sm:text-[18px] font-semibold border-b relative">
        <div className="text-[25px]  sm:mt-0 mt-3">
        <Link to="/">
          <p className="text-gray-800">
            Quick<span className="text-[#fbc531]">Food</span>
          </p>
        </Link>
        </div>
        <div className="w-[30%] text-[20px]">
          <ul className=" sm:flex justify-around hidden cursor-pointer list-none ml-[-62px] ">
            <Link to="/">
              <li className="text-gray-700 hover:text-[#fbc531] ">Home</li>
            </Link>
            <Link to="/aboutus">
              <li className="text-gray-700 hover:text-[#fbc531] ">About us</li>
            </Link>
            <Link to="/ourfood">
              <li className="text-gray-700 hover:text-[#fbc531] ">Our Food </li>
            </Link>
            <Link to="/signin">
              <li className="text-gray-700 hover:text-[#fbc531] ">Sign in</li>
            </Link>
          </ul>
        </div>
        {hamList ? (
          <div className="bg-[#f5f6fa] w-[300px] absolute text-center right-0 top-0 h-[100vh] text-[20px] flex items-center justify-center z-10">
            <RxCross2
              size={25}
              className="absolute top-3 right-3 cursor-pointer "
              onClick={() => setHamList(!hamList)}
            />
            <ul className="flex gap-12 cursor-pointer flex-col justify-center ">
              <Link to="/">
                <li
                  className="text-gray-700 hover:text-[#fbc531] ml-[-32px]"
                  onClick={() => setHamList(!hamList)}
                >
                  Home
                </li>
              </Link>
              <Link to="/aboutus">
                <li
                  className="text-gray-700 hover:text-[#fbc531] ml-[-32px]"
                  onClick={() => setHamList(!hamList)}
                >
                  About us
                </li>
              </Link>
              <Link to="/ourfood">
                <li
                  className="text-gray-700 hover:text-[#fbc531] ml-[-32px]"
                  onClick={() => setHamList(!hamList)}
                >
                  Our Food{" "}
                </li>
              </Link>
              <Link to="/signin">
                <li
                  className="text-gray-700 hover:text-[#fbc531] ml-[-32px]"
                  onClick={() => setHamList(!hamList)}
                >
                  Sign in
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className="flex gap-3 justify-end w-[300px]">
          <GiHamburgerMenu
            size={30}
            onClick={() => setHamList(!hamList)}
            className="cursor-pointer sm:hidden block"
          />
          <FaCartShopping size={30} /> 
          <div className="flex">
          <p>Items </p> 
          <p>&nbsp; {count}</p>
          </div>
        </div>
      </div>
    </div>
        )
      }}
    </abc.Consumer>
  );
};
