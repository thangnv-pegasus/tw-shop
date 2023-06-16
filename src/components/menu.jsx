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
import { signOut } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebase_auth } from "~/config/firebase-config";
import routes from "~/config/routes";
import { AppContext } from "~/context-api/app-provider";
import { AuthContext } from "~/context-api/auth-provider";

const Menu = () => {
  const { openMenu, setOpenMenu } = useContext(AppContext);
  const [dropdown, setDropdown] = useState(false);
  const { user } = useContext(AuthContext);
  const [text, setText] = useState("");
  const nav = useNavigate();

  const handleSignOut = () => {
    signOut(firebase_auth)
      .then(() => {
        // Sign-out successful.
        nav("/");
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nav(`/search-page/${text}`);
  };
  // console.log(user)

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-20"
      onClick={() => setOpenMenu(false)}
    >
      <div
        className="bg-white min-w-[200px] h-screen w-fit px-4 animate-menu_ant overflow-y-scroll"
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
          onSubmit={(e) => {
            handleSubmit(e);
            setOpenMenu(false);
          }}
        >
          <input
            type="text"
            name=""
            id=""
            className="block flex-1 outline-none py-2 px-3 text-base text-textColor"
            placeholder="Tìm kiếm..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button type="submit" className="px-3">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="flex items-center pt-8 pb-6 text-textColor font-medium text-sm">
          {user ? (
            <>
              <Link className="text-sm text-sky-500 font-medium transition-all duration-15">
                {/* {user.last_name} */}
                {user.displayName || 'user'}
              </Link>
              <span className="mx-1">/</span>
              <p
                onClick={() => {
                  handleSignOut();
                  setOpenMenu(false);
                }}
                className="text-sm font-medium transition-all duration-150 cursor-pointer hover:text-sky-700"
              >
                Đăng xuất
              </p>
            </>
          ) : (
            <>
              <Link
                to={routes.login}
                className="text-sm font-medium transition-all duration-150 hover:text-sky-700"
                onClick={() => setOpenMenu(false)}
              >
                Đăng nhập
              </Link>
              <span className="mx-1">/</span>
              <Link
                to={routes.signup}
                className="text-sm font-medium transition-all duration-150 hover:text-sky-700"
                onClick={() => setOpenMenu(false)}
              >
                Đăng ký
              </Link>
            </>
          )}
        </div>
        <ul>
          <li>
            <Link
              to={routes.home}
              className="py-3 block border-solid border-b-[1px] border-[#ebebeb]"
              onClick={() => setOpenMenu(false)}
            >
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              to={routes.introPage}
              className="py-3 block border-solid border-b-[1px] border-[#ebebeb]"
              onClick={() => setOpenMenu(false)}
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
                  onClick={() => setOpenMenu(false)}
                >
                  Tầm soát ung thư
                </Link>
              </li>
              <li>
                <Link
                  to={routes.MoHoc}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                  onClick={() => setOpenMenu(false)}
                >
                  Mô học
                </Link>
              </li>
              <li>
                <Link
                  to={routes.khamtongquat}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                  onClick={() => setOpenMenu(false)}
                >
                  Khám tổng quát
                </Link>
              </li>
              <li>
                <Link
                  to={routes.xetnghiemmau}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                  onClick={() => setOpenMenu(false)}
                >
                  Xét nghiệm máu
                </Link>
              </li>
              <li>
                <Link
                  to={routes.TamSoatUngThu}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                  onClick={() => setOpenMenu(false)}
                >
                  Tầm soát ung thư
                </Link>
              </li>
              <li>
                <Link
                  to={routes.xetnghiemditruyen}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                  onClick={() => setOpenMenu(false)}
                >
                  Xét nghiệm di truyền
                </Link>
              </li>
              <li>
                <Link
                  to={routes.tebaohoc}
                  className="block py-2 px-2 my-1 border-b-[1px] border-solid border-[#ebebeb] text-sm"
                  onClick={() => setOpenMenu(false)}
                >
                  Tế bào học
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={routes.products}
              className="py-3 block border-solid border-b-[1px] border-[#ebebeb]"
              onClick={() => setOpenMenu(false)}
            >
              Sản phẩm
            </Link>
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
              onClick={() => setOpenMenu(false)}
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
