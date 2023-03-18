import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-sky-500 border-solid border-t-[1px] border-[#9e9e9e]">
      <div className="max-w-container mx-auto">
        <ul className="text-white py-10 grid grid-cols-4 gap-x-3">
          <li>
            <h2 className="text-sm font-bold uppercase mb-4 tracking-wide">
              Chỉ dẫn khám bệnh
            </h2>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Trang chủ
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Giới thiệu
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Đặt lịch hẹn
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Sản phẩm
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Tin tức
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Liên hệ
            </Link>
          </li>
          <li>
            <h2 className="text-sm font-bold uppercase mb-4 tracking-wide">
              Dịch vụ sau khám
            </h2>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Trang chủ
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Giới thiệu
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Đặt lịch hẹn
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Sản phẩm
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Tin tức
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Liên hệ
            </Link>
          </li>
          <li>
            <h2 className="text-sm font-bold uppercase mb-4 tracking-wide">
              Bảo hiểm sức khỏe
            </h2>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Trang chủ
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Giới thiệu
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Đặt lịch hẹn
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Sản phẩm
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Tin tức
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Liên hệ
            </Link>
          </li>
          <li>
            <h2 className="text-sm font-bold uppercase mb-4 tracking-wide">
              Tái khám bệnh
            </h2>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Trang chủ
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Giới thiệu
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Đặt lịch hẹn
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Sản phẩm
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Tin tức
            </Link>
            <Link className="block text-white py-1 transition-all duration-150 hover:text-sky-700">
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-white bg-sky-700 py-4 text-sm">
        <div className="max-w-container mx-auto flex items-center">
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
