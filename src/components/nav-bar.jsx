import {
  faAngleDown,
  faBars,
  faBasketShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import routes from "~/config/routes";
import { AppContext } from "~/context-api/app-provider";
import { AuthContext } from "~/context-api/auth-provider";

const NavBar = () => {
  const [text, setText] = useState("");
  const [admin, setAdmin] = useState(false);
  const nav = useNavigate();
  const { cart } = useContext(AuthContext);
  const { openMenu, setOpenMenu } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    nav(`/search-page/${text}`);
  };

  return (
    <div>
      <div className="lg:max-w-container lg:px-0 lg:mx-auto md:w-full md:max-w-full sm:px-4 w-full px-4 flex justify-between items-center">
        <div
          className="block lg:hidden cursor-pointer text-2xl text-textColor"
          onClick={() => setOpenMenu(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="flex items-center">
          <Link to={routes.home} className="block">
            <img
              src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/logo.png?1664096870043"
              alt="logo"
              className="w-full h-16 object-cover object-center block my-3"
            />
          </Link>
          <div className="items-center mx-4 lg:flex hidden">
            <NavLink
              to={routes.home}
              style={(nav) => (nav.isActive ? { color: "rgb(3 105 161)" } : {})}
              className="block mx-5 text-base font-bold text-textColor py-5 transition-all duration-150 hover:text-sky-700"
            >
              Trang chủ
            </NavLink>
            <NavLink
              to={routes.introPage}
              style={(nav) => (nav.isActive ? { color: "rgb(3 105 161)" } : {})}
              className="block mx-5 text-base font-bold text-textColor py-5 transition-all duration-150 hover:text-sky-700"
            >
              Giới thiệu
            </NavLink>
            <NavLink
              to={routes.bookingPage}
              style={(nav) => (nav.isActive ? { color: "rgb(3 105 161)" } : {})}
              className="flex items-center mx-5 text-base font-bold text-textColor py-5 transition-all duration-150 relative group hover:text-sky-700"
            >
              Đặt lịch hẹn{" "}
              <span className="ml-1">
                {" "}
                <FontAwesomeIcon icon={faAngleDown} />{" "}
              </span>
              <div className="absolute hidden top-full bg-white w-64 shadow-subNav group-hover:block">
                <div className="px-5">
                  <Link
                    to={routes.TamSoatUngThu}
                    className="block text-sm font-medium text-textColor py-2 border-b-[1px] border-b-[#e5e6ec] border-solid transition-all duration-150 hover:text-sky-700"
                  >
                    Tầm soát ung thư
                  </Link>
                </div>
                <div className="px-5">
                  <Link
                    to={routes.MoHoc}
                    className="block text-sm font-medium text-textColor py-2 border-b-[1px] border-b-[#e5e6ec] border-solid transition-all duration-150 hover:text-sky-700"
                  >
                    Mô học
                  </Link>
                </div>
                <div className="px-5">
                  <Link
                    to={routes.khamtongquat}
                    className="block text-sm font-medium text-textColor py-2 border-b-[1px] border-b-[#e5e6ec] border-solid transition-all duration-150 hover:text-sky-700"
                  >
                    Khám tổng quát
                  </Link>
                </div>
                <div className="px-5">
                  <Link
                    to={routes.xetnghiemmau}
                    className="block text-sm font-medium text-textColor py-2 border-b-[1px] border-b-[#e5e6ec] border-solid transition-all duration-150 hover:text-sky-700"
                  >
                    Xét nghiệm máu
                  </Link>
                </div>
                <div className="px-5">
                  <Link
                    to={routes.xetnghiemditruyen}
                    className="block text-sm font-medium text-textColor py-2 border-b-[1px] border-b-[#e5e6ec] border-solid transition-all duration-150 hover:text-sky-700"
                  >
                    Xét nghiệm di truyền
                  </Link>
                </div>
                <div className="px-5">
                  <Link
                    to={routes.tebaohoc}
                    className="block text-sm font-medium text-textColor py-2 border-b-[1px] border-b-[#e5e6ec] border-solid transition-all duration-150 hover:text-sky-700"
                  >
                    Tế bào học
                  </Link>
                </div>
              </div>
            </NavLink>
            <NavLink
              to={routes.products}
              style={(nav) => (nav.isActive ? { color: "rgb(3 105 161)" } : {})}
              className="flex items-center relative mx-5 text-base font-bold text-textColor py-5 transition-all duration-150 group hover:text-sky-700"
            >
              Sản phẩm{" "}
              {/* <span className="ml-1">
                {" "}
                <FontAwesomeIcon icon={faAngleDown} />{" "}
              </span>
              <ul className="absolute top-full w-64 shadow-subNav hidden bg-white group-hover:block">
                <li className="px-5">
                  <Link
                    to={routes.featuredProduct}
                    className="text-textColor py-2 font-medium text-sm transition-all duration-150 hover:text-sky-700 block border-b-[1px] border-solid border-b-[#e5e6ec]"
                  >
                    Sản phẩm nổi bật
                  </Link>
                </li>
                <li className="px-5">
                  <Link
                    to="/"
                    className="text-textColor py-2 font-medium text-sm transition-all duration-150 hover:text-sky-700 block border-b-[1px] border-solid border-b-[#e5e6ec]"
                  >
                    Sản phẩm y tế
                  </Link>
                </li>
                <li className="px-5">
                  <Link
                    to="/"
                    className="text-textColor py-2 font-medium text-sm transition-all duration-150 hover:text-sky-700 block border-b-[1px] border-solid border-b-[#e5e6ec]"
                  >
                    Phụ kiện y tế
                  </Link>
                </li>
                <li className="px-5">
                  <Link
                    to="/"
                    className="text-textColor py-2 font-medium text-sm transition-all duration-150 hover:text-sky-700 block border-b-[1px] border-solid border-b-[#e5e6ec]"
                  >
                    Máy chụp Xquang
                  </Link>
                </li>
              </ul> */}
            </NavLink>
            <NavLink
              to={routes.news}
              style={(nav) => (nav.isActive ? { color: "rgb(3 105 161)" } : {})}
              className="block mx-5 text-base font-bold text-textColor py-5 transition-all duration-150 hover:text-sky-700"
            >
              Tin tức
            </NavLink>
            <NavLink
              to={routes.contact}
              style={(nav) => (nav.isActive ? { color: "rgb(3 105 161)" } : {})}
              className="block mx-5 text-base font-bold text-textColor py-5 transition-all duration-150 hover:text-sky-700"
            >
              Liên hệ
            </NavLink>
          </div>
        </div>
        <div className="flex items-center text-base font-bold cursor-pointer">
          <div className="lg:block hidden px-2 relative text-lg group">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span className="absolute right-0 top-1/2 h-4 w-[2px] bg-[#8fbb43] translate-y-[-50%] "></span>
            <form
              className="absolute hidden top-full right-0 bg-white shadow-subNav group-hover:flex"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                type="text"
                placeholder="Tìm kiếm...."
                className="px-2 text-sm font-normal w-52 outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                type="submit"
                className="py-1 px-3 transition-all duration-150 hover:bg-sky-500 hover:text-white"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
          <Link
            to={routes.cartPage}
            className="pl-2 flex items-center transition-all duration-150 hover:text-sky-700"
          >
            <span className="mx-[2px] text-lg">
              <FontAwesomeIcon icon={faBasketShopping} />
            </span>
            Giỏ hàng
            <span>({cart.length})</span>
          </Link>
          {admin == true && <p className="text-black">admin</p>}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
