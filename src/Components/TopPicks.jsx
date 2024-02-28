import { data } from "./Data/data";
import Slider from "react-slick";
import { xyz } from "./App";

export const TopPicks = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <xyz.Consumer>
      {(handleAdd) => {
        return (
          <div className="w-[90%] mx-auto">
            <p className="font-bold sm:text-3xl text-2xl sm:pl-10 pl-5">
              {`What's on your mind?`}
            </p>
            <div className="sm:py-20 py-8">
              <Slider {...settings} className=" text-black">
                {data.map((products) => (
                  <div className="bg-white rounded-md" key={products.id}>
                    <div className="flex justify-center items-center rounded-t-xl ">
                      <img
                        src={products.image}
                        alt=""
                        className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px] object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center p-4 ">
                      <p className="sm:text-xl text-l font-semibold uppercase text-center sm:h-20 h-10">
                        {products.name}
                      </p>
                      <p className="sm:text-xl text-l font-semibold uppercase sm:mb-[50px] h-[5px] ">
                        $ {products.price}
                      </p>
                      <button
                        className=" bg-black w-[100px] text-white rounded-md my-6 py-[10px] text-[15px] font-semibold hover:bg-yellow-300"
                        onClick={handleAdd}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        );
      }}
    </xyz.Consumer>
  );
};
