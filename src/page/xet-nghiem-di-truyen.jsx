import Button from "~/components/button";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import routes from "~/config/routes";

const XetNghiemDiTruyen = () => {
  return (
    <>
      <Header />

      <PageTitle title="Xét nghiệm di truyền" />
      <div className="lg:max-w-container lg:mx-auto sm:max-w-full sm:px-4 lg:px-0">
        <div className="py-10 text-sm text-textColor leading-7">
          <p className="pb-4">
            Xét nghiệm di truyền hay còn được gọi là xét nghiệm DNA, cho phép
            phân tích gen có khả năng gây bệnh di truyền, và cũng có thể được sử
            dụng để xác định quan hệ cha con/ mẹ con hoặc truy nguyên nguồn gốc
            tổ tiên của một người hoặc các mối quan hệ huyết thống giữa những
            người tham gia.
          </p>
          <p className="pb-4">
            Bên cạnh đó, các nghiên cứu ở mức độ nhiễm sắc thể của con người
            theo hướng rộng mở bao gồm xét nghiệm sinh hóa tìm kiếm khả năng
            hiện diện của các bệnh di truyền, hoặc dạng đột biến của các gen
            quan trọng gia tăng nguy cơ của các rối loạn di truyền. Xét nghiệm
            di truyền học xác định sự thay đổi trong nhiễm sắc thể, gen và
            protein.{" "}
          </p>
          <p className="pb-4">
            Phần lớn các xét nghiệm sử dụng để phát hiện sự thay đổi của các rối
            loạn di truyền. Kết quả của xét nghiệm di truyền có thể xác khẳng
            định hoặc loại trừ các nghi ngờ bệnh di truyền hoặc giúp xác định sự
            phát triển hay giảm bớt của các bệnh di truyền. Hiện nay, có khoảng
            vài trăm các xét nghiệm di truyền được sử dụng và có thể sẽ phát
            triển nhiều các xét nghiệm khác trong tương lai
          </p>
          <p className="pb-4">
            Vì các đột biến di truyền có thể ảnh hưởng trực tiếp đến cấu trúc mã
            hóa của protein, xét nghiệm bệnh di truyền cụ thể có thể được thực
            hiện bằng cách tìm kiếm các protein hoặc chất chuyển hóa của chúng
            hoặc tìm kiếm các vùng thay đổi màu trên sợ nhiễm sắc sau khi nhuộm
            dưới kính hiển vi huỳnh quang.
          </p>
          <Button text="Đặt lịch ngay" linkTo={routes.bookingPage}/>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default XetNghiemDiTruyen;
