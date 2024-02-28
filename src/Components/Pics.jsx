import { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import {data} from "./Data/data"

export const Pics = () => {
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    setIndex(index === 0 ? data.length - 1 : index - 1);
  };
  const handleRight = () => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
  };
  useEffect(() => {
    const clr = setInterval(() => {
      handleRight();
    }, 2000);
    return () => clearInterval(clr);
  }, [index]);

  return (
    <div className="mt-[100px]">
      <div className="w-[90%] sm:h-[80vh] h-[35vh] mx-auto my-5 relative">
        {data.map((item, i) => (
          <div key={i} className={`${index === i ? "block" : "hidden"}`}>
            <img
              src={item.image}
              alt="fd"
              className="w-full sm:h-[80vh] h-[35vh] rounded-2xl object-cover"
            />
          </div>
        ))}
        <div className="w-full mx-auto sm:h-[80vh] h-[35vh] bg-black opacity-50 absolute top-0 right-0 rounded-2xl"> </div>
        <div className="absolute w-full sm:text-[35px] text-[20px] sm:top-[50%] top-[35%] text-center font-semibold text-white flex justify-center sm:px-0 px-4">
            <p>Welcome To The World of Tasty & Fresh Food</p>
        </div>
        <div className="flex justify-between w-full sm:px-5 px-0 absolute sm:top-[50%] top-[35%] text-white">
          <FaCaretLeft size={35} className="cursor-pointer" onClick={handleLeft} />
          <FaCaretRight size={35} className="cursor-pointer" onClick={handleRight} />
        </div>
      </div>
    </div>
  );
};
