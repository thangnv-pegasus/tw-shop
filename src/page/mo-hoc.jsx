import Button from "~/components/button";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import routes from "~/config/routes";

const MoHoc = () => {
  return (
    <>
      <Header />
      <PageTitle title="Mô học" />
      <div className="lg:max-w-container lg:mx-auto sm:max-w-full sm:px-4 lg:px-0">
        <div className="py-10 text-[#444] text-sm leading-[1.7]">
          <p className="pb-4">
            Xét nghiệm chẩn đoán mô bệnh học là xét nghiệm thực hiện trên mẫu mô
            sau sinh thiết nội soi, sinh thiết kim hoặc trong bệnh phẩm phẫu
            thuật. Bệnh phẩm được bảo quản trong môi trường formol pha theo tỷ
            lệ quy định rồi được chuyển về phòng xét nghiệm giải phẫu bệnh.{" "}
          </p>
          <p className="pb-4">
            Tại đây, mẫu bệnh phẩm được xử lí theo đúng quy trình xét nghiệm để
            đưa ra kết quả chính xác nhất. Kết quả xét nghiệm này là tiêu chuẩn
            vàng trong chẩn đoán bệnh lí ác tính.{" "}
          </p>
          <p className="pb-4">
            Xét nghiệm chẩn đoán hóa mô miễn dịch nhằm giúp xác định chính xác
            nguồn gốc của các khối u kém biệt hóa. Xét nghiệm này thường được
            dùng trong những trường hợp mà chẩn đoán mô bệnh học khó xác định
            được kết quả.
          </p>
          <p className="pb-4">
            Xét nghiệm chẩn đoán hóa mô miễn dịch còn được ứng dụng vào chẩn
            đoán những đột biến gen như P53 ở nhiều loại ung thư hay đột biến
            gen EGFR ở ung thư phổi, đột biến gen Her2 có trong ung thư vú.
            Ngoài ra, xét nghiệm này còn được dừng trong việc tiên lượng, định
            hướng khi <b>điều trị ung thư</b>, đây là một liệu pháp nhắm trúng đích.
          </p>
          <Button text="Đặt lịch ngay" linkTo={routes.bookingPage} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MoHoc;
