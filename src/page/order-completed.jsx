import { AiOutlineCheckCircle } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import routes from "~/config/routes";
import { AppContext } from "~/context-api/app-provider";

const OrderCompleted = () => {
  const { inforOrder } = useContext(AppContext);
  console.log(inforOrder);
  const randomNumber = Math.floor(Math.random() * 10000 + 1000);
  const formatNumber = (str) => {
    const num = Number.parseInt(str);
    const numFormat = num.toLocaleString("en-US");
    return numFormat;
  };
  return (
    <div className="bg-[#e6e8ea] h-screen">
      <div className="max-w-container mx-auto py-5 grid grid-cols-cols_7_5 gap-x-10">
        <div>
          <Link
            to={routes.home}
            className="block text-3xl text-sky-500 transition-all duration-150 ease-linear hover:text-sky-700"
          >
            Ego Medical
          </Link>
          <div className="flex py-4">
            <div className="text-7xl text-green-500 font-light mr-4">
              <AiOutlineCheckCircle />
            </div>
            <div className="text-[#444]">
              <h2 className="text-base font-semibold mb-3">
                Cảm ơn bạn đã đặt hàng
              </h2>
              <p className="text-sm">
                Một email xác nhận đã được gửi tới {inforOrder.email}
              </p>
              <p className="text-sm">Xin vui lòng kiểm tra email của bạn</p>
            </div>
          </div>
          <div className="grid grid-cols-2 flex-wrap gap-8 mt-5 p-4 border-solid border-[1px] border-[#dadada] rounded-sm text-[#444]">
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
                PHương thức vận chuyển
              </h2>
              <p className="py-2">Giao hàng tận nơi</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white text-[#444] mt-16 text-sm">
            <h2 className="p-2 font-semibold border-b-[1px] border-solid boder-[#ccc]">
              Đơn hàng #{randomNumber} ({inforOrder.cart?.length})
            </h2>
            <div className="p-2 rounded-sm">
              <div className="flex justify-between text-[#444] py-2">
                <p>Tạm tính</p>
                <p>{formatNumber(inforOrder.sum_price)}đ</p>
              </div>
              <div className="flex justify-between text-[#444] py-2">
                <p>Phí vận chuyển</p>
                <p>{formatNumber(40000)}đ</p>
              </div>
              {inforOrder?.sale == true && (
                <div className="flex justify-between text-[#444] py-2">
                  <p>Giảm giá</p>
                  <p>{formatNumber(20000)}đ</p>
                </div>
              )}
            </div>
            <div className="flex justify-between p-2 border-t-[1px] boder-solid border-[#ccc]">
              <p>Tổng cộng</p>
              <p>
                {inforOrder?.sale === true
                  ? formatNumber(inforOrder.sum_price + 20000)
                  : formatNumber(inforOrder.sum_price + 40000)}
                đ
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to={routes.home} className="mx-auto w-fit mt-10 transition-all ease-linear block px-5 rounded-lg py-3 text-lg bg-[#357ebd] text-white hover:bg-[#2a6395]">
        Tiếp tục mua hàng
      </Link>
    </div>
  );
};

export default OrderCompleted;
