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

const data = [
  {
    id: 1,
    name: "Máy xông mũi họng",
    price: 1130000,
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-xong-mui-hong-beurer-ih26-duc-5d37bdc406a19-24072019090908-ced00d13-cf7f-4b2c-b1ad-1081447c94ea.jpg?v=1585558027640",
  },
  {
    id: 1,
    name: "Máy xông mũi họng",
    price: 1130000,
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-xong-mui-hong-beurer-ih26-duc-5d37bdc406a19-24072019090908-ced00d13-cf7f-4b2c-b1ad-1081447c94ea.jpg?v=1585558027640",
  },
  {
    id: 1,
    name: "Máy xông mũi họng",
    price: 1130000,
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-xong-mui-hong-beurer-ih26-duc-5d37bdc406a19-24072019090908-ced00d13-cf7f-4b2c-b1ad-1081447c94ea.jpg?v=1585558027640",
  },
  {
    id: 1,
    name: "Máy xông mũi họng",
    price: 1130000,
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-xong-mui-hong-beurer-ih26-duc-5d37bdc406a19-24072019090908-ced00d13-cf7f-4b2c-b1ad-1081447c94ea.jpg?v=1585558027640",
  },
  {
    id: 1,
    name: "Máy xông mũi họng",
    price: 1130000,
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-xong-mui-hong-beurer-ih26-duc-5d37bdc406a19-24072019090908-ced00d13-cf7f-4b2c-b1ad-1081447c94ea.jpg?v=1585558027640",
  },
  {
    id: 1,
    name: "Máy xông mũi họng",
    price: 1130000,
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-xong-mui-hong-beurer-ih26-duc-5d37bdc406a19-24072019090908-ced00d13-cf7f-4b2c-b1ad-1081447c94ea.jpg?v=1585558027640",
  },
  {
    id: 1,
    name: "Máy xông mũi họng",
    price: 1130000,
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-xong-mui-hong-beurer-ih26-duc-5d37bdc406a19-24072019090908-ced00d13-cf7f-4b2c-b1ad-1081447c94ea.jpg?v=1585558027640",
  },
  {
    id: 1,
    name: "Máy xông mũi họng",
    price: 1130000,
    imgSrc:
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-xong-mui-hong-beurer-ih26-duc-5d37bdc406a19-24072019090908-ced00d13-cf7f-4b2c-b1ad-1081447c94ea.jpg?v=1585558027640",
  }
];

const MedicalProduct = () => {
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
            {data.map((item,index) => {
              return (
                <SwiperSlide key={index}>
                  <Product
                    product = {item}
                  />
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
