import {
  faCircleMinus,
  faCirclePlus,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import { firebase_store } from "~/config/firebase-config";
import { AuthContext } from "~/context-api/auth-provider";

const ShoppingCart = () => {
  const { cart } = useContext(AuthContext);
  console.log(cart);
  return (
    <>
      <Header />
      <PageTitle title="Giỏ hàng" />
      <div className="max-w-container mx-auto py-10">
        {cart.length == 0 ? (
          <>
            <p className="my-4 text-sm text-[#444]">
              Không có sản phẩm nào trong giỏ hàng
            </p>
          </>
        ) : (
          <>
            <p className="uppercase text-base font-bold text-[#444] pb-2">
              Giỏ hàng của bạn
            </p>
            <div className="mt-4 px-3 border-r-[1px] border-l-[1px] border-b-[1px] border-solid border-[rgba(0,0,0,.09)] rounded-lg overflow-hidden">
              {cart.map((product, index) => {
                return <ProductItem product={product} key={index} />;
              })}
            </div>
          </>
        )}
      </div>
      <div className="min-h-[500px]"></div>
      <Footer />
    </>
  );
};
const getQuantity = (list, id) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].product_id == id) {
      return list.quantity;
    }
  }
  // return 1;
};

const ProductItem = ({ product }) => {
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const deleteProduct = async () => {
    await deleteDoc(doc(firebase_store, "cart", `product${product.id}`));
  };

  return (
    <div className="flex border-t-[1px] border-solid border-[rgba(0,0,0,.09)] py-5 items-center">
      <div className="w-1/6">
        <div className="w-[6.125rem] h-[6.125rem] overflow-hidden mx-3">
          <img
            src={product.imgUrl[0]}
            alt="img"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="w-1/3 px-3">
        <Link
          to={`/detail-product/${product.id}`}
          className="text-base text-[#444] transition-all ease-linear hover:text-sky-500 pb-1 block"
        >
          {" "}
          {product.name}{" "}
        </Link>
        {product.price_sale ? (
          <p className="text-sm text-[#444] opacity-75">
            {formatNumber(product.price_sale)}đ
          </p>
        ) : (
          <p className="text-sm text-[#444] opacity-75">
            {formatNumber(product.price)}đ
          </p>
        )}
      </div>
      <div className="text-[#444] bg-[#ebebeb] py-2 justify-between flex w-32 items-center rounded-3xl overflow-hidden">
        <span className="py-1 px-2 cursor-pointer">
          <FontAwesomeIcon icon={faCircleMinus} />
        </span>
        <span> {product.quantity} </span>
        <span
          className="py-1 px-2 cursor-pointer"
          onClick={(e) => {
            // dispatch(
            //   add_by_cart({
            //     ...product,
            //     quantity: product.quantity + 1,
            //   })
            // );
          }}
        >
          <FontAwesomeIcon icon={faCirclePlus} />
        </span>
      </div>
      <div className="w-1/6 text-center py-2 text-[#444] text-sm">
        {formatNumber(product.quantity * (product.price_sale || product.price))}
        đ
      </div>
      <div className="flex-1 text-right" onClick={() => deleteProduct()}>
        <span className="p-2 cursor-pointer">
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
      </div>
    </div>
  );
};
export default ShoppingCart;
