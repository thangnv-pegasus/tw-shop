import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import '~/css/oneline.scss'

const Product = ({ product }) => {
  const nav = useNavigate();
  const handleClick = () => {
    nav(`/detail-product/${product.id}`);
  };
  const formatNumber = (str) => {
    const num = Number.parseInt(str);
    const numFormat = num.toLocaleString("en-US");
    return numFormat;
  };
  return (
    <div
      className="p-3 text-textColor text-center shadow-product_default transition-all duration-200 group hover:shadow-product_hover h-350px"
      onClick={() => handleClick}
    >
      <Link
        to={`/detail-product/${product.id}`}
        className="block h-235px w-full relative"
        onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
      >
        <img
          src={product.imgUrl[0]}
          alt="image product"
          className="w-full h-full object-cover object-center"
        />
        <span className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] z-[0] opacity-40 hidden group-hover:block"></span>
        <Link
          to={`/detail-product/${product.id}`}
          className="absolute top-1/2 left-1/2 w-12 h-12 bg-white hidden items-center justify-center rounded-full translate-y-[-50%] translate-x-[-50%] text-textColor transition-all duration-150 hover:text-white hover:bg-sky-500 group-hover:flex"
          onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
        >
          {" "}
          <FontAwesomeIcon icon={faGear} />{" "}
        </Link>
      </Link>
      <div className="py-3">
        <Link
          to={`/detail-product/${product.id}`}
          className="block mt-3 mb-2 text-sm transition-all duration-100 hover:text-sky-500 oneline"
          onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
        >
          {product.name}
        </Link>
        {product.price_sale ? (
          <div className="flex items-center justify-center">
            <div className="text-base font-bold">
              {formatNumber(product.price_sale)}đ
            </div>
            <div className="text-sm text-[#acb2b0] ml-2 line-through decoration-[#acb2b0] decoration-2">
              {formatNumber(product.price)}đ
            </div>
          </div>
        ) : (
          <div className="text-base font-bold">
            {formatNumber(product.price)}đ
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
