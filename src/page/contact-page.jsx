import {
    faArrowRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import routes from "~/config/routes";

const ContactPage = () => {
  return (
    <div>
      <Header />

      <PageTitle title="Liên hệ" className="mb-0" />
      <div style={{ filter: "grayscale(100%)" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7447.808543203733!2d105.815878!3d21.036516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zUGjhuqduIG3hu4FtIHF14bqjbiBsw70gYsOhbiBow6BuZyAtIFNhcG8gUE9T!5e0!3m2!1svi!2sus!4v1676917187791!5m2!1svi!2sus"
          width="100%"
          height="450px"
          style={{ border: "0",zIndex:'-1' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="lg:max-w-container lg:mx-auto sm:max-w-full sm:px-4">
        <div className="grid md:grid-cols-cols_5_7 sm:grid-cols-1 py-8 px-4 gap-5 lg:px-20 lg:py-28 md:px-4 md:py-6 bg-white shadow-subNav text-[#6e7874] z-10 translate-y-[-25%] rounded-3xl">
          <div>
            <Link to={routes.home} className="block w-64 h-auto mb-5">
              <img
                src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/logo.png?1664096870043"
                alt="logo"
                className="block object-cover object-center w-full h-full"
              />
            </Link>
            <p className="text-[#6e7874] lg:pr-32 text-sm leading-6 lg:pb-8 md:pr-5 md:py-4 md:pb-6">
              Ego Medical Center tự hào về các kỹ năng được đào tạo cần thiết
              cho việc chuẩn bị kiểm tra đa dạng. Chúng tôi tin tưởng rằng chẩn
              đoán kịp thời có thể loại bỏ vết sẹo của nhiều bệnh nghiêm trọng.
              Nó có thể được thực hiện nếu bạn tham khảo ý kiến bác sĩ cho các
              bệnh nghi ngờ.
            </p>
            <ul className="text-sm">
              <li className="flex items-center mb-5">
                <span className="mr-4">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <p>Tầng 6, 266 Đội Cấn, Ba Đình, Hà Nội</p>
              </li>
              <li className="flex items-center mb-5">
                <span className="mr-4">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <a
                  href="mailto:ego.deploy@gmail.com"
                  className="transition-all duration-200 hover:text-sky-500"
                >
                  ego.deploy@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-4">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <a
                  href="tel:19006750"
                  className="transition-all duration-200 hover:text-sky-500"
                >
                  1900 6750
                </a>
              </li>
            </ul>
          </div>
          <form className="block text-[#444]">
            <h2 className="text-2xl mb-8 mt-5">Nhập thông tin của bạn</h2>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 flex-wrap gap-5 text-[#444] text-sm">
              <input
                type="text"
                className="block w-full outline-none bg-[#ebebeb] h-11 px-4 rounded-lg"
                placeholder="Tên của bạn"
              />
              <input
                type="tel"
                className="block w-full outline-none bg-[#ebebeb] h-11 px-4 rounded-lg"
                placeholder="Số điện thoại"
              />
              <input
                type="email"
                className="block w-full outline-none bg-[#ebebeb] h-11 px-4 rounded-lg"
                placeholder="Email"
              />
              <input
                type="text"
                className="block w-full outline-none bg-[#ebebeb] h-11 px-4 rounded-lg"
                placeholder="Địa chỉ"
              />
            </div>
            <textarea
              className="block w-full outline-none bg-[#ebebeb] h-11 rounded-lg my-5 py-3 px-4 min-h-120px"
              placeholder="Nội dung"
            ></textarea>
            <button type="submit" className="flex items-center bg-sky-500 text-sm mt-4 text-white px-8 h-12 rounded-3xl relative overflow-hidden group z-[1]">
              Gửi ngay
              <span className="ml-1 font-bold">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-sky-400 w-0 transition-all ease-linear duration-200 z-[-1] group-hover:w-full"></div>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
