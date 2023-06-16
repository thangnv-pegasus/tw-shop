import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/button";
import routes from "~/config/routes";

const About = () => {
  return (
    <div className="py-14 relative bg-aboutBg bg-top_right bg-fixed bg-no-repeat md:px-4">
      <div className="lg:max-w-container lg:mx-auto lg:px-0 w-full px-4 max-w-full grid md:grid-cols-2 md:gap-5 grid-cols-1">
        <ul className="grid grid-cols-2 gap-4 relative md:flex-wrap">
          <li className="text-textColor group transition-all duration-200 bg-white shadow-subNav hover:bg-sky-500 lg:p-10 sm:py-6 sm:pr-2 sm:pl-4">
            <p className="text-8xl text-sky-500 font-semibold transition-all duration-200 group-hover:text-white">
              1
            </p>
            <p className="py-2 font-semibold text-base text-textColor relative transition-all duration-200 group-hover:text-white">
              Thiết bị hiện đại
              <span className="absolute top-full left-0 bg-sky-500 w-8 h-1 group-hover:bg-white"></span>
            </p>
          </li>
          <li className="text-textColor group transition-all duration-200 bg-white shadow-subNav hover:bg-sky-500 lg:p-10 sm:py-6 sm:pr-2 sm:pl-4">
            <p className="text-8xl text-sky-500 font-semibold transition-all duration-200 group-hover:text-white">
              2
            </p>
            <p className="py-2 font-semibold text-base text-textColor relative transition-all duration-200 group-hover:text-white">
              Chất lượng cao
              <span className="absolute top-full left-0 bg-sky-500 w-8 h-1 group-hover:bg-white"></span>
            </p>
          </li>
          <li className="text-textColor group transition-all duration-200 bg-white shadow-subNav hover:bg-sky-500 lg:p-10 sm:py-6 sm:pr-2 sm:pl-4">
            <p className="text-8xl text-sky-500 font-semibold transition-all duration-200 group-hover:text-white">
              3
            </p>
            <p className="py-2 font-semibold text-base text-textColor relative transition-all duration-200 group-hover:text-white">
              Đội ngũ hành nghề
              <span className="absolute top-full left-0 bg-sky-500 w-8 h-1 group-hover:bg-white"></span>
            </p>
          </li>
          <li className="text-textColor group transition-all duration-200 bg-white shadow-subNav hover:bg-sky-500 lg:p-10 sm:py-6 sm:pr-2 sm:pl-4">
            <p className="text-8xl text-sky-500 font-semibold transition-all duration-200 group-hover:text-white">
              4
            </p>
            <p className="py-2 font-semibold text-base text-textColor relative transition-all duration-200 group-hover:text-white">
              Chăm sóc chu đáo
              <span className="absolute top-full left-0 bg-sky-500 w-8 h-1 group-hover:bg-white"></span>
            </p>
          </li>
          <div className="bg-aboutBg2 bg-top_left bg-no-repeat absolute left-[-50%] top-0 z-[-1] w-[58.75rem] h-full"></div>
        </ul>
        <div className="mt-10 md:mt-0">
          <h2 className="text-sky-500 text-lg font-semibold mb-4">
            Giới thiệu
          </h2>
          <h2 className="text-4xl font-semibold text-textColor mb-5">
            Chứng nhận <br /> Xét nghiệm{" "}
            <span className="text-sky-500">chuẩn đoán</span>
          </h2>
          <p className="text-textColor mb-4">
            Ego Medical Center tự hào về các kỹ năng được đào tạo cần thiết cho
            việc chuẩn bị kiểm tra đa dạng. Chúng tôi tin tưởng rằng chẩn đoán
            kịp thời có thể loại bỏ vết sẹo của nhiều bệnh nghiêm trọng. Nó có
            thể được thực hiện nếu bạn tham khảo ý kiến bác sĩ cho các bệnh nghi
            ngờ.
          </p>
          <ul className="text-textColor">
            <li className="flex items-center my-1">
              <span className="text-sm text-sky-500 mr-3">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <p>
                Tất cả các báo cáo cho khách hàng được thực hiện đơn giản và dễ
                hiểu
              </p>
            </li>
            <li className="flex items-center my-1">
              <span className="text-sm text-sky-500 mr-3">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <p>
                Tất cả các báo cáo cho khách hàng được thực hiện đơn giản và dễ
                hiểu
              </p>
            </li>
            <li className="flex items-center my-1">
              <span className="text-sm text-sky-500 mr-3">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <p>
                Tất cả các báo cáo cho khách hàng được thực hiện đơn giản và dễ
                hiểu
              </p>
            </li>
          </ul>

          <Button text={"Đặt lịch ngay"} linkTo={routes.bookingPage} />
        </div>
      </div>
    </div>
  );
};

export default About;
