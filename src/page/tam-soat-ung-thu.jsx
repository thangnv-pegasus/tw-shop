import Button from "~/components/button";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import routes from "~/config/routes";

const TamSoatUngThu = () => {
  return (
    <>
      <Header />
      <PageTitle title="Tầm soát ung thư" />
      <div className="lg:max-w-container lg:mx-auto sm:max-w-full sm:px-4 lg:px-0">
        <div className="py-10 text-[#444] text-sm leading-[1.7]">
          <p className="pb-4">
            Mỗi năm Việt Nam có hơn 126.000 ca mắc mới mắc bệnh ung thư, trong
            số đó khoảng 94.000 người tử vong vì phát hiện quá muộn. Việt Nam
            cũng là một trong những quốc gia có tỷ lệ người dân đi tầm soát ung
            thư thấp nhất. Nếu được tầm soát và phát hiện sớm, những căn bệnh
            ung thư sau có thể chữa khỏi hoàn toàn:
          </p>
          <ul className="font-bold list-disc pl-4">
            <li>Ung thư phổi</li>
            <li>Ung thư gan</li>
            <li>Ung thư dạ dày</li>
            <li>Ung thư vú</li>
            <li>Ung thư cổ tử cung</li>
          </ul>
          <p className="py-4">
            Tầm soát ung thư là phương thức chẩn đoán nhằm phát hiện ra mầm mống
            ung thư hoặc khi khối u còn rất nhỏ. Phát hiện sớm ung thư giúp điều
            trị dễ dàng, không cần hỗ trợ hóa trị hoặc xạ trị, không tốn nhiều
            chi phí, đồng thời tăng cơ hội sống cho bệnh nhân.
          </p>
          <Button text="Đặt lịch ngay" linkTo={routes.bookingPage}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TamSoatUngThu;
