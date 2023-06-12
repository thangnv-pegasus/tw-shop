import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faMinus,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import routes from "~/config/routes";
import { AppContext } from "~/context-api/app-provider";

const Menu = () => {
  const { openMenu, setOpenMenu } = useContext(AppContext);
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-20"
      onClick={() => setOpenMenu(false)}
    >
      <div
        className="bg-white min-w-[200px] h-screen w-fit px-4 animate-menu_ant"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text-right">
          <div
            className="py-1 px-3 inline-block text-lg cursor-pointer"
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        <form
          action=""
          className="flex w-full mt-4 items-center border-solid border-[1px] border-[#ededed] rounded-full overflow-hidden"
        >
          <input
            type="text"
            name=""
            id=""
            className="block flex-1 outline-none py-2 px-3 text-base text-textColor"
            placeholder="Tìm kiếm..."
          />
          <button type="submit" className="px-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="flex items-center pt-8 pb-6 text-textColor font-medium text-sm">
          <Link
            to={routes.login}
            className="block transition-all ease-linear duration-100 hover:text-sky-500"
          >
            {" "}
            Đăng nhập
          </Link>
          <span className="px-1">/</span>
          <Link
            to={routes.signup}
            className="block transition-all ease-linear duration-100 hover:text-sky-500"
          >
            {" "}
            Đăng ký
          </Link>
        </div>
        <ul>
          <li>
            <Link
              to={routes.home}
              className="py-3 block border-solid border-b-[1px] border-[#ebebeb]"
            >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              to={routes.introPage}
              className="py-3 block border-solid border-b-[1px] border-[#ebebeb]"
            >
              Giới thiệu
            </Link>
          </li>
          <li className="block py-3 border-solid border-b-[1px] border-[#ebebeb]">
            <div className="flex justify-between items-center">
              <span>Đặt lịch hẹn</span>
              <span
                className="text-sm"
                onClick={() => setDropdown((pre) => !pre)}
              >
                {dropdown === false ? (
                  <FontAwesomeIcon icon={faPlus} />
                ) : (
                  <FontAwesomeIcon icon={faMinus} />
                )}
              </span>
            </div>
            <ul
              className={
                dropdown
                  ? "animate-drop_down block"
                  : "animate-drop_down hidden"
              }
            >
              <li>
                <Link
                  to={routes.TamSoatUngThu}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                >
                  Tầm soát ung thư
                </Link>
              </li>
              <li>
                <Link
                  to={routes.MoHoc}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                >
                  Mô học
                </Link>
              </li>
              <li>
                <Link
                  to={routes.khamtongquat}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                >
                  Khám tổng quát
                </Link>
              </li>
              <li>
                <Link
                  to={routes.xetnghiemmau}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                >
                  Xét nghiệm máu
                </Link>
              </li>
              <li>
                <Link
                  to={routes.TamSoatUngThu}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                >
                  Tầm soát ung thư
                </Link>
              </li>
              <li>
                <Link
                  to={routes.xetnghiemditruyen}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                >
                  Xét nghiệm di truyền
                </Link>
              </li>
              <li>
                <Link to={routes.tebaohoc}>Tế bào học</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={routes.news}
              className="py-3 block border-solid border-b-[1px] border-[#ebebeb]"
            >
              Tin tức
            </Link>
          </li>
          <li>
            <Link
              to={routes.contact}
              className="py-3 block border-solid border-b-[1px] border-[#ebebeb]"
            >
              Liên hệ
            </Link>
          </li>
        </ul>
        <ul className="flex items-center pt-5">
          <li className="w-8 h-8 text-center leading-7 mx-1 border-solid border-[1px] border-[#ccc] rounded-full transition-all ease-linear duration-150 hover:bg-sky-500 hover:text-white">
            <a href="">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="w-8 h-8 text-center leading-5 py-1 mx-1 border-solid border-[1px] border-[#ccc] rounded-full transition-all ease-linear duration-150 hover:bg-sky-500 hover:text-white">
            <a href="">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li className="w-8 h-8 text-center leading-5 py-1 mx-1 border-solid border-[1px] border-[#ccc] rounded-full transition-all ease-linear duration-150 hover:bg-sky-500 hover:text-white">
            <a href="">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
          </li>
          <li className="w-8 h-8 text-center leading-5 py-1 mx-1 border-solid border-[1px] border-[#ccc] rounded-full transition-all ease-linear duration-150 hover:bg-sky-500 hover:text-white">
            <a href="">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li className="w-8 h-8 text-center leading-5 py-1 mx-1 border-solid border-[1px] border-[#ccc] rounded-full transition-all ease-linear duration-150 hover:bg-sky-500 hover:text-white">
            <a href="">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
