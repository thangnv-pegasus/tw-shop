import {
  faArrowRight,
  faCaretRight,
  faCheck,
  faCircleXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import routes from "~/config/routes";
import { AuthContext } from "~/context-api/auth-provider";
import Button from "./button";

const AddToCartModal = ({ product, setOpenAddToCartModal }) => {
  const { cart } = useContext(AuthContext);
  let count = 0;
  cart.forEach((item) => {
    count += item.quantity;
  });

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)] flex justify-center z-50"
      onClick={() => setOpenAddToCartModal(false)}
    >
      <div
        className="w-[31.25rem] mt-10 bg-white rounded-md overflow-hidden h-fit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-ceter relative px-4 py-4 border-b-[1px] border-solid border-[#ebebeb] text-base font-medium text-[#444]">
          <span className="mr-2 font-bold">
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <h2>
            Sản phẩm vừa được thêm{" "}
            <span className="text-sky-500">vào giỏ hàng</span>
          </h2>
          <button
            className="block absolute top-0 right-0 p-1 px-2 text-lg"
            onClick={() => setOpenAddToCartModal(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="px-4 py-3 flex border-b-[1px] border-solid border-[#ebebeb]">
          <div className="w-[6.25rem] h-[6.25rem]">
            <img
              src={product.imgUrl[0]}
              alt={product.name}
              className="w-full h-full obejct-cover object-center border-[1px] border-solid border-[#ebebeb]"
            />
          </div>
          <div className="ml-3 text-[#444]">
            <h3 className="text-sm font-medium">{product.name}</h3>
            {product.price_sale ? (
              <p className="text-base mt-1">
                {formatNumber(product.price_sale)}đ
              </p>
            ) : (
              <p className="text-base mt-1">{formatNumber(product.price)}đ</p>
            )}
          </div>
        </div>
        <div className="py-4">
          <Link
            to={routes.cartPage}
            className="text-base items-center font-semibold transition-all duration-150 ease-linear hover:text-sky-500 flex justify-center cursor-pointer"
          >
            <span className="mr-1">
              <FontAwesomeIcon icon={faCaretRight} />
            </span>{" "}
            <p>
              Giỏ hàng hiện có (<span className="text-sky-500">{count}</span>)
              sản phẩm
            </p>
          </Link>
          <div className="text-center py-4">
            <Button
              text="Tiến hành thanh toán"
              linkTo={routes.cartPage}
              className="w-4/5 justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
