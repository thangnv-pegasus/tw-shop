import Button from "~/components/button";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import routes from "~/config/routes";

const IntroPage = () => {
  return (
    <div>
      <Header />

      <PageTitle title="Giới thiệu" />
      <div className="lg:max-w-container lg:mx-auto sm:max-w-full sm:px-4 lg:px-0 text-textColor text-sm py-10 leading-6">
        <p className="mb-4">
          Ra đời với sứ mệnh cung cấp những dịch vụ y tế cao cấp,{" "}
          <span className="font-bold">
            phòng khám Đa khoa Y học Ego Medical Center
          </span>{" "}
          mang tới cho người dân Hà Nội và các tỉnh lân cận một địa chỉ chăm sóc
          sức khỏe chuyên nghiệp và an toàn. Tại đây, bên cạnh việc được chăm
          sóc sức khỏe sinh sản toàn diện, được tôn trọng và thấu hiểu, người
          bệnh còn được trải nghiệm những tiện ích hoàn hảo của hệ thống dịch vụ
          y tế chất lượng; được lựa chọn chế độ thăm khám, phòng nghỉ dưỡng cũng
          như chế độ chăm sóc theo yêu cầu với chi phí thấp, thông tin bệnh nhân
          bảo mật tuyệt đối.
        </p>
        <p className="mb-4">
          Với mong muốn chăm sóc sức khỏe sinh sản cho cộng đồng người Việt, đáp
          ứng đầy đủ các tiêu chí: phòng khám trực thuộc Sở Y tế, bác sĩ chuyên
          khoa ưu tú, trang thiết bị y tế hiện đại mang tầm vóc quốc tế, phương
          pháp điều trị độc đáo, không gian sang trọng hiện đại, phòng khám quốc
          tế… phục vụ khách hàng bằng những dịch vụ y tế chuyên nghiệp, hoàn hảo
          nhất. Phòng khám hứa hẹn sẽ trở thành địa chỉ tin cậy nơi khách hàng
          an tâm sử dụng các dịch vụ chăm sóc sức khỏe đa dạng, chất lượng với
          mức chi phí hợp lý.
        </p>
        <p className="mb-4">
          Là cơ sở y tế được Sở Y tế cấp phép hoạt động chính thức, đảm bảo tính
          pháp lý cao. Phòng khám có thế mạnh về chăm sóc sức khỏe sinh sản,
          thăm khám và điều trị các bệnh phụ khoa, nam khoa, các bệnh lây truyền
          qua đường tình dục, vô sinh – hiếm muộn cho cả nam và nữ giới. Các
          danh mục khám chữa, hoạt động thăm khám phụ khoa, khám nam khoa đều
          được Sở Y tế cấp phép.
        </p>
        <p className="mb-4">
          Ban lãnh đạo cũng như đội ngũ bác sĩ, đội ngũ nhân viên y tế của phòng
          khám Đa khoa y học Quốc tế luôn nỗ lực phấn đấu vì sự phát triển chung
          của y học, vì lợi ích cộng đồng, nâng cao sức khỏe sinh lý – sinh sản
          cho người Việt.
        </p>
      <Button text="Đặt lịch ngay" linkTo={routes.bookingPage} />
      </div>
      <Footer />
    </div>
  );
};

export default IntroPage;
