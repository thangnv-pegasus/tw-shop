import { AiOutlineCheckCircle } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import routes from "~/config/routes";
import { AppContext } from "~/context-api/app-provider";
import { AuthContext } from "~/context-api/auth-provider";
import { collection, deleteDoc, doc, query, where } from "firebase/firestore";
import { firebase_store } from "~/config/firebase-config";

const OrderCompleted = () => {
  const { inforOrder } = useContext(AppContext);
  const { cart, user } = useContext(AuthContext);
  console.log(inforOrder);
  const randomNumber = Math.floor(Math.random() * 10000 + 1000);
  const formatNumber = (str) => {
    const num = Number.parseInt(str);
    const numFormat = num.toLocaleString("en-US");
    return numFormat;
  };

  const deleteCart = () => {
    cart.forEach((item) => {
      (async () =>
        await deleteDoc(
          doc(
            firebase_store,
            `cart_${user.uid}`,
            `product${item.id}_${user.uid}`
          )
        ))();
    });
  };
  useEffect(() => {
    deleteCart();
  }, []);
  return (
    <div className="bg-[#e6e8ea] lg:h-screen h-auto pb-10">
      <div className="lg:max-w-container lg:mx-auto lg:px-0 sm:w-full sm:px-10 w-full px-10 py-5 lg:grid lg:grid-cols-cols_7_5 lg:gap-x-10 sm:block">
        <div>
          <Link
            to={routes.home}
            className="block text-3xl text-sky-500 transition-all duration-150 ease-linear text-center sm:text-center lg:text-left hover:text-sky-700"
            onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
          >
            Ego Medical
          </Link>
          <div className="lg:flex sm:block block py-4 sm:text-center text-center lg:text-left">
            <div className="text-7xl text-green-500 font-light mr-4">
              <AiOutlineCheckCircle className="sm:mx-auto mx-auto lg:m-0 font-normal sm:w-20 sm:h-20  w-20 h-20 lg:w-auto lg:h-auto" />
            </div>
            <div className="text-textColor">
              <h2 className="text-base font-semibold mb-3">
                Cảm ơn bạn đã đặt hàng
              </h2>
              <p className="text-sm">
                Một email xác nhận đã được gửi tới {inforOrder.email}
              </p>
              <p className="text-sm">Xin vui lòng kiểm tra email của bạn</p>
            </div>
          </div>
          <div className="grid grid-cols-2 flex-wrap gap-8 mt-5 p-4 border-solid border-[1px] border-[#dadada] rounded-sm text-textColor">
            <div className="text-sm">
              <h2 className="text-lg font-medium my-2">Thông tin mua hàng</h2>
              <p className="py-2">{inforOrder.name}</p>
              <p className="py-2">{inforOrder.email}</p>
              <p className="py-2">{inforOrder.phone}</p>
            </div>
            <div>
              <h2 className="text-lg font-medium my-2">Địa chỉ nhận hàng</h2>
              <p className="py-2">{inforOrder.name}</p>
              <p className="py-2">{inforOrder.address}</p>
              <p className="py-2">{inforOrder.phone}</p>
            </div>
            <div>
              <h2 className="text-lg font-medium my-2">
                Phương thức thanh toán
              </h2>
              <p className="py-2">Thanh toán khi giao hàng (COD)</p>
            </div>
            <div>
              <h2 className="text-lg font-medium my-2">
                Phương thức vận chuyển
              </h2>
              <p className="py-2">Giao hàng tận nơi</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white text-textColor mt-16 text-sm">
            <h2 className="p-2 font-semibold border-b-[1px] border-solid boder-[#ccc]">
              Đơn hàng #{randomNumber} ({inforOrder.cart?.length})
            </h2>
            <div className="px-4 py-2 border-b-solid border-[1px] border-[#e1e1e1] max-h-[31.25rem]">
              {inforOrder.cart.map((item) => {
                return (
                  <ProductItem
                    product={item}
                    key={item.id}
                    formatNumber={formatNumber}
                  />
                );
              })}
            </div>
            <div className="p-2 rounded-sm">
              <div className="flex justify-between text-textColor py-2">
                <p>Tạm tính</p>
                <p>{formatNumber(inforOrder.sum_price)}đ</p>
              </div>
              <div className="flex justify-between text-textColor py-2">
                <p>Phí vận chuyển</p>
                <p>{formatNumber(40000)}đ</p>
              </div>
              {inforOrder?.sale == true && (
                <div className="flex justify-between text-textColor py-2">
                  <p>Giảm giá</p>
                  <p>{formatNumber(20000)}đ</p>
                </div>
              )}
            </div>
            <div className="flex justify-between p-2 border-t-[1px] boder-solid border-[#ccc] items-center">
              <p>Tổng cộng</p>
              <p className="text-xl font-semibold text-sky-500">
                {inforOrder?.sale === true
                  ? formatNumber(inforOrder.sum_price + 20000)
                  : formatNumber(inforOrder.sum_price + 40000)}
                đ
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to={routes.home}
        className="mx-auto w-fit mt-10 transition-all ease-linear block px-5 rounded-lg py-3 text-lg bg-[#357ebd] text-white hover:bg-[#2a6395]"
        onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
      >
        Tiếp tục mua hàng
      </Link>
    </div>
  );
};

const ProductItem = ({ product, formatNumber }) => {
  return (
    <div className="flex justify-between items-center text-textColor my-2">
      <div className="flex items-center">
        <div className="w-14 h-14 rounded-md border-solid border-[1px] border-[#ebebeb] relative">
          <img
            src={product.imgUrl[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center rounded-md"
          />
          <p className="absolute -top-1 -right-1 bg-sky-600 text-white w-4 h-4 text-xs text-center rounded-full">
            {product.quantity}
          </p>
        </div>
        <p className="text-sm font-medium ml-4">{product.name}</p>
      </div>
      <div>
        {product.price_sale
          ? formatNumber(product.price_sale)
          : formatNumber(product.price)}
        đ
      </div>
    </div>
  );
};

export default OrderCompleted;
