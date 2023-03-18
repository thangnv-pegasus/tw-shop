import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ name, price, imgSrc, productID }) => {
  const nav = useNavigate();

  const handleClick = () => {
    nav(`/detail-product/${productID}`);
  };

  return (
    <div
      className="p-3 text-[#444] text-center shadow-product_default transition-all duration-200 group hover:shadow-product_hover h-350px"
      onClick={() => handleClick}
    >
      <Link to="/" className="block h-235px w-full relative">
        <img
          src={imgSrc}
          alt="image product"
          className="w-full h-full object-cover object-center"
        />
        <span className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] z-[0] opacity-40 hidden group-hover:block"></span>
        <Link
          to={`/detail-product/${productID}`}
          className="absolute top-1/2 left-1/2 w-12 h-12 bg-white hidden items-center justify-center rounded-full translate-y-[-50%] translate-x-[-50%] text-[#444] transition-all duration-150 hover:text-white hover:bg-sky-500 group-hover:flex"
        >
          {" "}
          <FontAwesomeIcon icon={faGear} />{" "}
        </Link>
      </Link>
      <div className="py-3">
        <Link
          to={`/detail-product/${productID}`}
          className="block mt-3 mb-2 text-sm transition-all duration-100 hover:text-sky-500"
        >
          {name}
        </Link>
        <div className="text-base font-bold">{price}đ</div>
      </div>
    </div>
  );
};

export default Product;
