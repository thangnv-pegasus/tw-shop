import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "~/config/routes";
import { AppContext } from "~/context-api/app-provider";
import { AuthContext } from "~/context-api/auth-provider";

const PayPage = () => {
  const { user, cart } = useContext(AuthContext);
  const { setInforOrder, inforOrder } = useContext(AppContext);
  const [check, setCheck] = useState(false);
  const [transportFee, setTransportFee] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [text, setText] = useState("");
  const nav = useNavigate();
  const formatNumber = (num) => {
    return num.toLocaleString();
  };
  let sum = 0;
  cart.forEach((item) => {
    if (item.price_sale) {
      sum += item.price_sale;
    } else {
      sum += item.price;
    }
  });
  useEffect(() => {
    if (address.trim().length > 0) {
      setTransportFee(40000);
    } else {
      setTransportFee(0);
    }
  }, [address]);

  const validate = () => {
    if (name == "" || email == "" || address == "" || phone == "") {
      alert("Vui lòng nhập đầy đủ thông tin");
    } else if (check == false) {
      alert("Vui lòng chọn phương thức thanh toán");
    } else {
      nav(routes.orderCompleted);
      setInforOrder((pre) => {
        const temp = [...cart];
        return {
          ...pre,
          cart: temp,
          name,
          email,
          address,
          phone,
          note: text,
          transportFee,
          sum_price: sum,
        };
      });
    }
  };
  return (
    <div className="grid grid-cols-8_4 h-screen overflow-hidden">
      <div className="py-7 pl-24">
        <Link
          to={routes.home}
          className="text-sky-500 text-3xl transition-all duration-150 ease-linear hover:text-sky-600 block"
        >
          {" "}
          Ego Medical{" "}
        </Link>
        <div className="grid grid-cols-2 gap-x-10">
          <div>
            <div className="flex justify-between py-8 items-center">
              <h1 className="text-lg font-semibold text-[#444]">
                Thông tin nhận hàng
              </h1>
              <p className="text-sky-500 flex items-center">
                <span className="mr-1">
                  <FontAwesomeIcon icon={faCircleUser} />
                </span>
                {user.displayName}
              </p>
            </div>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full block border-[1px] border-solid border-[#ccc] outline-none text-sm px-4 text-[#444] py-3 my-3 rounded-md"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Họ và tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full block border-[1px] border-solid border-[#ccc] outline-none text-sm px-4 text-[#444] py-3 my-3 rounded-md"
              />
              <input
                type="tel"
                name=""
                id=""
                placeholder="Số điện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full block border-[1px] border-solid border-[#ccc] outline-none text-sm px-4 text-[#444] py-3 my-3 rounded-md"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Địa chỉ"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full block border-[1px] border-solid border-[#ccc] outline-none text-sm px-4 text-[#444] py-3 my-3 rounded-md"
              />
              <textarea
                placeholder="Ghi chú (tùy chọn)"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full block border-[1px] border-solid border-[#ccc] outline-none text-sm px-4 text-[#444] py-3 my-3 rounded-md"
              />
            </form>
          </div>
          <div className="pr-10">
            <h2 className="py-8 text-lg font-semibold">Vận chuyển</h2>
            <div>
              {transportFee === 0 ? (
                <div className="py-3 px-5 my-3 bg-sky-200 rounded-lg text-[#0c5460]">
                  Vui lòng nhập thông tin giao hàng
                </div>
              ) : (
                <div className="flex justify-between text-[#444] px-5 py-3 border-solid border-[#ccc] border-[1px] rounded-md">
                  <div className="flex items-center select-none text-base">
                    <span
                      className={`w-5 h-5 bg-sky-500 block rounded-full relative mr-1 border-solid border-[1px] border-[#ccc] select-none`}
                    >
                      <span className="block absolute top-1/2 left-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white -translate-x-1/2"></span>
                    </span>
                    Giao hàng tận nơi
                  </div>
                  <span className="text-[#444] text-base">
                    {formatNumber(transportFee)}đ
                  </span>
                </div>
              )}
            </div>
            <h2 className="py-8 text-lg font-semibold">Thanh toán</h2>
            <div className="border-solid border-[1px] border-[#ccc] rounded-md overflow-hidden cursor-pointer">
              <div className="flex justify-between text-[#444] px-5 py-3">
                <div
                  className="flex items-center select-none"
                  onClick={() => setCheck((pre) => !pre)}
                >
                  <span
                    className={
                      check
                        ? `w-5 h-5 bg-sky-500 block rounded-full relative mr-1 border-solid border-[1px] border-[#ccc] select-none`
                        : `w-5 h-5 bg-white block rounded-full relative mr-1 border-solid border-[1px] border-[#ccc] select-none`
                    }
                  >
                    <span className="block absolute top-1/2 left-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white -translate-x-1/2"></span>
                  </span>
                  Thanh toán khi giao hàng (COD)
                </div>
                <span className="text-sky-500 text-xl">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                </span>
              </div>
              {check && (
                <div className="bg-[#f8f8f8] px-5 py-8">
                  Bạn chỉ phải thanh toán khi nhận được hàng
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pr-24 py-7 border-l-[1px] border-solid border-[#e1e1e1] bg-[#fafafa]">
        <h2 className="py-4 px-6 text-lg font-semibold text-[#444] border-solid border-b-[1px] border-[#e1e1e1]">
          Đơn hàng ({cart.length} sản phẩm)
        </h2>
        <div className="px-6 py-4">
          <div className="max-h-[31.25rem] overflow-y-scroll">
            {cart.map((item) => {
              return <ProductItemPay product={item} key={item.id} />;
            })}
          </div>
        </div>
        <div className="p-6">
          <InputVoucher />
        </div>
        <div className="px-6 py-3 border-t-[1px] border-solid border-[#e1e1e1]">
          <div className="flex justify-between text-sm text-[#444] py-2">
            <p>Tạm tính</p>
            <p>{formatNumber(sum)}đ</p>
          </div>
          <div className="flex justify-between text-sm text-[#444] py-2">
            <p>Phí vận chuyển</p>
            <p>{formatNumber(transportFee)}đ</p>
          </div>
          {inforOrder?.sale == true && (
            <div className="flex justify-between text-sm text-[#444] py-2">
              <p>Giảm giá</p>
              <p>{formatNumber(20000)}đ</p>
            </div>
          )}
        </div>
        <div className="px-6 py-3 border-t-[1px] border-solid border-[#e1e1e1]">
          <div className="flex items-center justify-between text-[#444]">
            <p>Tổng cộng</p>
            <p className="text-lg text-sky-500 font-semibold">
              {inforOrder?.sale == true
                ? formatNumber(sum + transportFee - 20000)
                : formatNumber(sum + transportFee)}
              đ
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Link
              to={routes.cartPage}
              className="text-sky-500 flex items-center group hover:text-sky-700"
            >
              <span className="mr-1 transition-all duration-100 ease-linear group-hover:-translate-x-1">
                <FontAwesomeIcon icon={faChevronLeft} />
              </span>
              Quay về giỏ hàng
            </Link>
            <button
              className="block bg-[#357ebd] text-white px-5 py-3 rounded-md transition-all duration-100 ease-linear hover:opacity-80 uppercase text-sm"
              onClick={() => {
                validate();
              }}
            >
              Đặt Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductItemPay = ({ product }) => {
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="flex items-center justify-between py-4 border-b-[1px] border-solid border-[#e1e1e1]">
      <div className="flex">
        <div className="w-14 h-14 border-[1px] border-solid border-[#ccc] rounded-md relative">
          <img
            src={product.imgUrl[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center rounded-md"
          />
          <p className="absolute -top-1 -right-1 flex justify-center items-center w-4 h-4 text-xs rounded-full bg-sky-500 text-white">
            {product.quantity}
          </p>
        </div>
        <p className="ml-3 text-[#444] text-sm">{product.name}</p>
      </div>
      <p className="text-[#444] text-sm pr-4">
        {product.price_sale
          ? formatNumber(product.price_sale)
          : formatNumber(product.price)}
        đ
      </p>
    </div>
  );
};

const InputVoucher = () => {
  const { setInforOrder } = useContext(AppContext);
  const [codeVoucher, setCodeVoucher] = useState("");
  return (
    <form
      className="flex"
      onSubmit={(e) => {
        e.preventDefault();
        if (codeVoucher === "SALE001") {
          setInforOrder((pre) => {
            return {
              ...pre,
              sale: true,
            };
          });
        } else {
          setInforOrder((pre) => {
            return {
              ...pre,
              sale: false,
            };
          });
          alert("mã giảm giá không đúng hoặc đã hết hạn!");
        }
      }}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Nhập mã giảm giá"
        className="flex-1 border-solid border-[1px] border-[#e1e1e1] outline-none px-4 py-2 text-[#444] rounded-md"
        value={codeVoucher}
        onChange={(e) => setCodeVoucher(e.target.value)}
      />
      <button className="py-2 px-6 ml-2 bg-[#357ebd] text-white rounded-md transition-all duration-100 ease-linear hover:opacity-80">
        Áp dụng
      </button>
    </form>
  );
};

export default PayPage;
