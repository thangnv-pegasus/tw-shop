import {
  faCircleMinus,
  faCirclePlus,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import { add_by_cart } from "~/redux/cart/cart.actions";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.shopping_cart.cart);
  // console.log(cart); 
  const list = cart.map((product) => {
    return {
      product_id: product.id,
      quantity: product.quantity,
    };
  });

  const formatNumber = (num) => {
    return num.toLocaleString();
  };
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(
    cart.map((product) => {
      return {
        product_id: product.id,
        quantity: product.quantity,
      };
    })
  );

 

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
                return (
                  <div
                    className="flex border-t-[1px] border-solid border-[rgba(0,0,0,.09)] py-5 items-center"
                    key={index}
                  >
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
                      <span> {getQuantity(quantity, product.id)} </span>
                      <span
                        className="py-1 px-2 cursor-pointer"
                        onClick={(e) => {
                          setQuantity((pre) => {
                            for (let i = 0; i < pre.length; i++) {
                              if (pre[i].product_id == product.id) {
                                pre[i].quantity++;
                              }
                            }
                          });
                          dispatch(
                            add_by_cart({
                              ...product,
                              quantity: product.quantity + 1,
                            })
                          );
                        }}
                      >
                        <FontAwesomeIcon icon={faCirclePlus} />
                      </span>
                    </div>
                    <div className="w-1/6 text-center py-2 text-[#444] text-sm">
                      {formatNumber(
                        product.quantity * (product.price_sale || product.price)
                      )}
                      đ
                    </div>
                    <div className="flex-1 text-right">
                      <span className="p-2 cursor-pointer">
                        <FontAwesomeIcon icon={faCircleXmark} />
                      </span>
                    </div>
                  </div>
                );
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
export default ShoppingCart;
