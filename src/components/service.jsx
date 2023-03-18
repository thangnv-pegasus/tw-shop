import { useState } from "react";
import "~/css/custom.scss";
import Button from "~/components/button";
import routes from "~/config/routes";

const contentData = [
  {
    imgSrc:
      "https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_1.jpg?1664096870043",
    title: "Tầm soát ung thư",
    content: [
      "Mỗi năm Việt Nam có hơn 126.000 ca mắc mới mắc bệnh ung thư, trong số đó khoảng 94.000 người tử vong vì phát hiện quá muộn. Việt Nam cũng là một trong những quốc gia có tỷ lệ người dân đi tầm soát ung thư thấp nhất. Nếu được tầm soát và phát hiện sớm, những căn bệnh ung thư sau có thể chữa khỏi hoàn toàn:Ung thư phổi,Ung thư gan,Ung thư dạ dày,Ung thư vú,Ung thư cổ tử cung",
      "Tầm soát ung thư là phương thức chẩn đoán nhằm phát hiện ra mầm mống ung thư hoặc khi khối u còn rất nhỏ. Phát hiện sớm ung thư giúp điều trị dễ dàng, không cần hỗ trợ hóa trị hoặc xạ trị, không tốn nhiều chi phí, đồng thời tăng cơ hội sống cho bệnh nhân.",
    ],
  },
  {
    imgSrc:
      "https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_2.jpg?1664096870043",
    title: "Mô học",
    content: [
      "Xét nghiệm chẩn đoán mô bệnh học là xét nghiệm thực hiện trên mẫu mô sau sinh thiết nội soi, sinh thiết kim hoặc trong bệnh phẩm phẫu thuật. Bệnh phẩm được bảo quản trong môi trường formol pha theo tỷ lệ quy định rồi được chuyển về phòng xét nghiệm giải phẫu bệnh. ",
      "Tại đây, mẫu bệnh phẩm được xử lí theo đúng quy trình xét nghiệm để đưa ra kết quả chính xác nhất. Kết quả xét nghiệm này là tiêu chuẩn vàng trong chẩn đoán bệnh lí ác tính. ",
      ,
      "Xét nghiệm chẩn đoán hóa mô miễn dịch nhằm giúp xác định chính xác nguồn gốc của các khối u kém biệt hóa. Xét nghiệm này thường được dùng trong những trường hợp mà chẩn đoán mô bệnh học khó xác định được kết quả. ",
    ],
  },
  {
    imgSrc:
      "https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_3.jpg?1664096870043",
    title: "Khám tổng quát",
    content: [
      "Xét nghiệm chỉ số máu (nhằm phát hiện tình trạng thiếu máu và một số bệnh lý về máu, chẩn đoán tiểu đường và dung nạp Glucose, đánh giá chức năng thận, chức năng gan, tầm soát virus viêm gan B…)",
      "Xét nghiệm nước tiểu, nhằm phát hiện một số bệnh lý về thận, tiết niệu…",
      "Chẩn đoán hình ảnh, thăm dò chức năng (gồm: Chụp X Quang ngực thẳng, điện tim đồ, siêu âm ổ bụng tổng quát thường, chụp CT…).",
      "Tự hào là bệnh viện lớn, được xây dựng theo tiêu chuẩn “Bệnh viện – Khách sạn và lọt Top 3 bệnh viện có điểm chất lượng cao nhất – Bệnh viện ĐKQT Ego Medical là địa chỉ uy tín được nhiều doanh nghiệp đăng ký khám sức khỏe định kỳ cho người lao động hiện nay.",
    ],
  },
  {
    imgSrc:
      "https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_4.jpg?1664096870043",
    title: "Xét nghiệm máu",
    content: [
      "Có rất nhiểu bệnh có thể phát hiện được qua xét nghiệm máu. Thông thường khi khám sức khỏe bác sĩ sẽ chỉ định thực hiện những xét nghiệm máu sau:Xét nghiệm công thức máu, Xét nghiệm đường máu, Xét nghiệm mỡ máu, Xét nghiệm viêm gan B, Xét nghiệm HIV ",
      "Tại khoa phòng cụ thể, các bác sĩ sẽ căn cứ vào tình trạng sức khoẻ và những yếu tố nguy cơ bệnh để chỉ định làm xét nghiệm máu.",
      "Tới tầng 7 – Đơn vị xét nghiệm Bệnh viện Ego Medical. Người bệnh được chuyên viên y tế bệnh viện lấy máu xét nghiệm.",
      "Các dụng cụ lấy máu đều đảm bảo tính vệ sinh, vô khuẩn, riêng cho từng người.",
      "Các bác sĩ tiến hành phân tích tế báo máu và đưa ra kết luận.",
    ],
  },
  {
    imgSrc:
      "https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_5.jpg?1664096870043",
    title: "Xét nghiệm di truyền",
    content: [
      "Xét nghiệm di truyền hay còn được gọi là xét nghiệm DNA, cho phép phân tích gen có khả năng gây bệnh di truyền, và cũng có thể được sử dụng để xác định quan hệ cha con/ mẹ con hoặc truy nguyên nguồn gốc tổ tiên của một người hoặc các mối quan hệ huyết thống giữa những người tham gia.",
      "Bên cạnh đó, các nghiên cứu ở mức độ nhiễm sắc thể của con người theo hướng rộng mở bao gồm xét nghiệm sinh hóa tìm kiếm khả năng hiện diện của các bệnh di truyền, hoặc dạng đột biến của các gen quan trọng gia tăng nguy cơ của các rối loạn di truyền. Xét nghiệm di truyền học xác định sự thay đổi trong nhiễm sắc thể, gen và protein. ",
      "Phần lớn các xét nghiệm sử dụng để phát hiện sự thay đổi của các rối loạn di truyền. Kết quả của xét nghiệm di truyền có thể xác khẳng định hoặc loại trừ các nghi ngờ bệnh di truyền hoặc giúp xác định sự phát triển hay giảm bớt của các bệnh di truyền. Hiện nay, có khoảng vài...",
    ],
  },
  {
    imgSrc:
      "https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/img_tab_6.jpg?1664096870043",
    title: "Tế bào học",
    content: [
      "Xét nghiệm tế bào học (Cytology hoặc Cytopathology) là xét nghiệm thông dụng và có giá trị cao. Xét nghiệm tế bào học khảo sát các tế bào rời hoặc một cụm tế bào lẫn trong chất dịch lỏng thấy được trên kính hiển vi. Có khi chỉ cần một giọt máu hoặc chất dịch như trong xét nghiệm FNA, nhưng có khi phải cần đến cả chai chất dịch màng phổi hoặc ổ bụng.",
      "Lấy một mẫu thử tế bào, ít gây mệt, ít gây biến chứng và đỡ tốn kém hơn cho người bệnh so với sinh thiết mô bệnh học.",
      "Trong nhiều trường hợp, sinh thiết cho kết quả chính xác hơn. Tuy nhiên, với một số trường hợp, độ chính xác gần như nhau. Vì vậy, việc lựa chọn các xét nghiệm tế bào học hay xét nghiệm sinh thiết sẽ tùy thuộc vào ý kiến bác sĩ sau khi cân nhắc nhiều yếu tố liên quan đến loại bệnh và cơ quan bị bệnh.",
    ],
  },
];

const ServiceTab = () => {
  return (
    <div className="bg-[#f6f7f9] min-h-[500px] w-full py-24">
      <div className="max-w-container mx-auto">
        <h2 className="relative text-center text-4xl pb-3 leading-[3rem] font-bold text-[#444]">
          Xét nghiệm chuẩn đoán
          <span className="absolute top-full left-1/2 w-14 h-[3px] bg-sky-500 translate-x-[-50%] "></span>
        </h2>
        <Tab />
      </div>
    </div>
  );
};

const Tab = () => {
  const [state, setState] = useState(1);

  return (
    <div className="">
      <ul className="grid grid-cols-6 gap-3 my-10">
        <li
          className="bg-white px-3 py-8 cursor-pointer transition-all duration-200 group hover:bg-sky-500 service rounded-md"
          onClick={() => setState(1)}
          style={state === 1 ? { backgroundColor: "rgb(14 165 233)" } : {}}
        >
          <img
            src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_1.png?1664096870043"
            alt="service1"
            className="w-22 h-auto mx-auto service-img"
            style={state === 1 ? { filter: "brightness(5)" } : {}}
          />
          <p
            className="mt-5 text-center font-semibold transition-all duration-200 text-[#444] group-hover:text-white"
            style={state === 1 ? { color: "white" } : {}}
          >
            Tầm soát ung thư
          </p>
        </li>
        <li
          className="bg-white px-3 py-8 cursor-pointer transition-all duration-200 group hover:bg-sky-500 service rounded-md"
          onClick={() => setState(2)}
          style={state === 2 ? { backgroundColor: "rgb(14 165 233)" } : {}}
        >
          <img
            src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_2.png?1664096870043"
            alt="service1"
            className="w-22 h-auto mx-auto service-img"
            style={state === 2 ? { filter: "brightness(5)" } : {}}
          />
          <p
            className="mt-5 text-center font-semibold text-[#444] transition-all duration-200 group-hover:text-white"
            style={state === 2 ? { color: "white" } : {}}
          >
            Mô học
          </p>
        </li>
        <li
          className="bg-white px-3 py-8 cursor-pointer transition-all duration-200 group hover:bg-sky-500 service rounded-md"
          onClick={() => setState(3)}
          style={state === 3 ? { backgroundColor: "rgb(14 165 233)" } : {}}
        >
          <img
            src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_3.png?1664096870043"
            alt="service1"
            className="w-22 h-auto mx-auto service-img"
            style={state === 3 ? { filter: "brightness(5)" } : {}}
          />
          <p
            className="mt-5 text-center font-semibold text-[#444] transition-all duration-200 group-hover:text-white"
            style={state === 3 ? { color: "white" } : {}}
          >
            Khám tổng quát
          </p>
        </li>
        <li
          className="bg-white px-3 py-8 cursor-pointer transition-all duration-200 group hover:bg-sky-500 service rounded-md"
          onClick={() => setState(4)}
          style={state === 4 ? { backgroundColor: "rgb(14 165 233)" } : {}}
        >
          <img
            src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_4.png?1664096870043"
            alt="service1"
            className="w-22 h-auto mx-auto service-img"
            style={state === 4 ? { filter: "brightness(5)" } : {}}
          />
          <p
            className="mt-5 text-center font-semibold text-[#444] transition-all duration-200 group-hover:text-white"
            style={state === 4 ? { color: "white" } : {}}
          >
            Xét nghiệm máu
          </p>
        </li>
        <li
          className="bg-white px-3 py-8 cursor-pointer transition-all duration-200 group hover:bg-sky-500 service rounded-md"
          onClick={() => setState(5)}
          style={state === 5 ? { backgroundColor: "rgb(14 165 233)" } : {}}
        >
          <img
            src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_5.png?1664096870043"
            alt="service1"
            className="w-22 h-auto mx-auto service-img"
            style={state === 5 ? { filter: "brightness(5)" } : {}}
          />
          <p
            className="mt-5 text-center font-semibold text-[#444] transition-all duration-200 group-hover:text-white"
            style={state === 5 ? { color: "white" } : {}}
          >
            Xét nghiệm di truyền
          </p>
        </li>
        <li
          className="bg-white px-3 py-8 cursor-pointer transition-all duration-200 group hover:bg-sky-500 service rounded-md"
          onClick={() => setState(6)}
          style={state === 6 ? { backgroundColor: "rgb(14 165 233)" } : {}}
        >
          <img
            src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/icon_tab_6.png?1664096870043"
            alt="service1"
            className="w-22 h-auto mx-auto service-img"
            style={state === 6 ? { filter: "brightness(5)" } : {}}
          />
          <p
            className="mt-5 text-center font-semibold text-[#444] transition-all duration-200 group-hover:text-white"
            style={state === 6 ? { color: "white" } : {}}
          >
            Tế bào học
          </p>
        </li>
      </ul>
      {contentData.map((item, index) => {
        if (index + 1 == state) {
          return (
            <TabContent
              key={index}
              imgSrc={item.imgSrc}
              content={item.content}
              title={item.title}
            />
          );
        }
      })}
    </div>
  );
};

const TabContent = ({ imgSrc, title, content = [] }) => {
  return (
    <div className="grid grid-cols-2 gap-3 text-[#444]">
      <div>
        <img src={imgSrc} alt="img" />
      </div>
      <div>
        <h2 className="text-[1.75rem] font-semibold mb-5 ">{title}</h2>
        <div className="leading-7 text-[#787878]">
          {content.map((item, index) => {
            return (
              <p key={index} className="my-2">
                {item}
              </p>
            );
          })}
        </div>
        <div className="flex">
          <Button text={"Xem thêm"} className="mr-3" />
          <Button text={"Đặt lịch ngay"} linkTo={routes.bookingPage} />
        </div>
      </div>
    </div>
  );
};

export default ServiceTab;
