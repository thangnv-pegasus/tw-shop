import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-sky-500 border-solid border-t-[1px] border-[#9e9e9e]">
      <div className="lg:max-w-container lg:mx-auto sm:max-w-full sm:px-4 lg:px-0">
        <ul className="text-white py-10 grid lg:grid-cols-4 lg:gap-x-3 md:grid-cols-2 md:gap-x-4 md:gap-y-6">
          <li className="sm:pb-4 md:pb-0">
            <h2 className="text-sm font-bold uppercase md:mb-4 sm:mb-2 tracking-wide">
              Chỉ dẫn khám bệnh
            </h2>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Trang chủ
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Giới thiệu
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Đặt lịch hẹn
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Sản phẩm
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Tin tức
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Liên hệ
            </Link>
          </li>
          <li className="sm:pb-4 md:pb-0">
            <h2 className="text-sm font-bold uppercase md:mb-4 sm:mb-2 tracking-wide">
              Dịch vụ sau khám
            </h2>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Trang chủ
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Giới thiệu
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Đặt lịch hẹn
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Sản phẩm
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Tin tức
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Liên hệ
            </Link>
          </li>
          <li className="sm:pb-4 md:pb-0">
            <h2 className="text-sm font-bold uppercase md:mb-4 sm:mb-2 tracking-wide">
              Bảo hiểm sức khỏe
            </h2>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Trang chủ
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Giới thiệu
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Đặt lịch hẹn
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Sản phẩm
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Tin tức
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Liên hệ
            </Link>
          </li>
          <li className="sm:pb-4 md:pb-0">
            <h2 className="text-sm font-bold uppercase md:mb-4 sm:mb-2 tracking-wide">
              Tái khám bệnh
            </h2>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Trang chủ
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Giới thiệu
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Đặt lịch hẹn
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Sản phẩm
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Tin tức
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700 md:text-base sm:text-sm">
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-white bg-sky-700 py-4 text-sm">
        <div className="lg:max-w-container lg:mx-auto sm:max-w-full sm:px-4 lg:px-0 flex items-center">
          Bản quyền thuộc về{" "}
          <a
            href="#"
            className="transition-all duration-150 mx-1 text-sky-500 hover:text-white"
          >
            Ego Creative
          </a>{" "}
          Cung cấp bởi{" "}
          <a
            href="#"
            className="transition-all duration-150 mx-1 text-sky-500 hover:text-white"
          >
            Sapo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
