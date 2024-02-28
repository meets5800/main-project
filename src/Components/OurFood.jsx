import { ourfooddata } from "./Data/ourfooddata";
import "./CSS/card.css";

import { xyz } from "./App";
import { useEffect } from "react";

export const OurFood = () => {
  useEffect(()=>{
    document.title = "OurFood";
  },[])
  return (
    <xyz.Consumer>
      {
        (handleAdd)=>{
          return(
            <div className="w-[90%] mx-auto sm:mt-[100px] mt-[100px] sm:mb-10 mb-[50px]">
        <div className="flex justify-center text-[30px] text-[#fbc531] font-[500]">
          Our Food
        </div>
        <div className="sm:grid sm:grid-cols-4 sm:py-6 py-[0px] grid grid-cols-1">
          {ourfooddata.map((products) => (
            <>
              <section >
                <div className="container" >
                  <div className="card">
                    <div className="content">
                      <div className="imgBx">
                        <img src={products.image} />
                      </div>
                      <div className="contentBx">
                        <h3>
                          {products.name}
                          <br />
                          <span>{products.price}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="sci">
                      <button className=" bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] font-semibold" onClick={handleAdd}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ))}
        </div>
      </div>
          )
        }
      }
    </xyz.Consumer>
  );
};

// import { ourfooddata } from "./ourfooddata";

// export const OurFood = () => {
//   return (
//     <>
//       <div className="w-[90%] mx-auto sm:mt-[10px] mt-[5px] sm:mb-10 mb-[50px]">
//         <div className="flex justify-center text-[30px] text-[#fbc531] font-[500]">
//           Our Food
//         </div>
//         <div className="grid grid-cols-4 py-6">
//           {ourfooddata.map((products) => (
//             <div className="bg-white rounded-md" key={products.id}>
//               <div className="flex justify-center items-center rounded-t-xl ">
//                 <img
//                   src={products.image}
//                   alt=""
//                   className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] object-cover "
//                 />
//               </div>
//               <div className="flex flex-col justify-center items-center p-4 ">
//                 <p className="sm:text-xl text-l font-semibold uppercase text-center sm:h-20 h-10">
//                   {products.name}
//                 </p>
//                 <p className="sm:text-xl text-l font-semibold uppercase sm:mb-[50px] h-[5px] ">
//                   {products.price}
//                 </p>
//                 <button className=" bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] font-semibold hover:bg-yellow-300">
//                   Add to cart
//                 </button>
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };