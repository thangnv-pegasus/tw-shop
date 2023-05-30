import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "~/css/swiper.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid } from "swiper";
import Product from "./product-item";
import { useContext } from "react";
import { AppContext } from "~/context-api/app-provider";

const MedicalProduct = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="mt-24 mb-16">
      <div className="max-w-container mx-auto">
        <div className="text-center mb-12 relative">
          <p className="text-lg text-sky-500 font-bold tracking-wider mb-4">
            Chúng tôi có
          </p>
          <Link
            to="/"
            className="text-3.5xl block text-[#444] font-bold transition-all duration-150 hover:text-sky-500"
          >
            Sản phẩm y tế
          </Link>
          <span className="absolute top-full w-14 h-3px bg-sky-500 left-1/2 translate-x-[-50%]"></span>
        </div>
        <SearchForm />
        <div>
          <Swiper
            slidesPerView={4}
            grid={{
              rows: 2,
              fill: "row",
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid]}
            className="mySwiper"
          >
            {products.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Product product={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const SearchForm = ({ value }) => {
  return (
    <div className="text-center mb-8">
      <form
        action=""
        method=""
        className="bg-white inline-flex border-[#ccc] border-solid border-[1px] items-center rounded-full overflow-hidden"
      >
        <input
          type="text"
          placeholder="Tìm sản phẩm khác..."
          className="outline-none text-sm font-medium text-[#444] h-11 px-4 block w-56"
        />
        <button type="submit" className="h-10 text-sky-500 px-5">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
};

export default MedicalProduct;
