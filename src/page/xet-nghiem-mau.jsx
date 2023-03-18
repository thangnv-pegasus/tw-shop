import Button from "~/components/button";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import routes from "~/config/routes";

const XetNghiemMau = () => {
  return (
    <>
      <Header />
      <PageTitle title="Xét nghiệm máu" />
      <div className="max-w-container mx-auto">
        <div className="py-10 text-sm text-[#444] leading-10">
          <p>
            Có rất nhiểu bệnh có thể phát hiện được qua xét nghiệm máu. Thông
            thường khi khám sức khỏe bác sĩ sẽ chỉ định thực hiện những xét
            nghiệm máu sau:
          </p>
          <ul className="list-disc pl-4">
            <li>Xét nghiệm công thức máu</li>
            <li>Xét nghiệm đường máu</li>
            <li>Xét nghiệm mỡ máu</li>
            <li>Xét nghiệm viêm gan B</li>
            <li>Xét nghiệm HIV </li>
          </ul>
          <p>
            Tại khoa phòng cụ thể, các bác sĩ sẽ căn cứ vào tình trạng sức khoẻ
            và những yếu tố nguy cơ bệnh để chỉ định làm xét nghiệm máu.
          </p>
          <p>
            Tới tầng 7 – Đơn vị xét nghiệm Bệnh viện Ego Medical. Người bệnh
            được chuyên viên y tế bệnh viện lấy máu xét nghiệm.
          </p>
          <p>
            Các dụng cụ lấy máu đều đảm bảo tính vệ sinh, vô khuẩn, riêng cho
            từng người.
          </p>
          <p>Các bác sĩ tiến hành phân tích tế báo máu và đưa ra kết luận.</p>
          <p>
            Sau khi hoàn thành xét nghiệm máu, người bệnh được trả kết quả tại
            khoa phòng khám ban đầu, các bác sĩ giỏi đọc kết quả và tư vấn cách
            chăm sóc, điều trị bệnh.
          </p>
          <p>
            Đơn vị xét nghiệm bệnh viện Ego Medical được trang bị máy móc hiện
            đại, kỹ thuật phân tích chính xác, chẩn đoán và điều trị hiệu quả.
          </p>
          <p>
            Bác sĩ giỏi trực tiếp khám, đọc kết quả và đưa ra kết luận chính
            xác.
          </p>
          <p>Quy trình lấy máu đảm bảo an toàn, vệ sinh.</p>
          <p>
            Toàn bộ xét nghiệm được thực hiện và phân tích tại bệnh viện, rút
            ngắm thời gian chờ đợi cho người bệnh.
          </p>
          <Button text="Đặt lịch ngay" linkTo={routes.bookingPage} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default XetNghiemMau;
