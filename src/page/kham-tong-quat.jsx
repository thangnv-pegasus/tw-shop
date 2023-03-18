import Button from "~/components/button";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import routes from "~/config/routes";

const KhamTongQuat = () => {
  return (
    <>
      <Header />
      <PageTitle title="Khám tổng quát" />
      <div className="max-w-container mx-auto">
        <div className="py-10 text-sm text-[#444] leading-[1.7]">
          <p className="pb-4">
            - Xét nghiệm chỉ số máu (nhằm phát hiện tình trạng thiếu máu và một
            số bệnh lý về máu, chẩn đoán tiểu đường và dung nạp Glucose, đánh
            giá chức năng thận, chức năng gan, tầm soát virus viêm gan B…)
          </p>
          <p className="pb-4">
            - Xét nghiệm nước tiểu, nhằm phát hiện một số bệnh lý về thận, tiết
            niệu…
          </p>
          <p className="pb-4">
            - Chẩn đoán hình ảnh, thăm dò chức năng (gồm: Chụp X Quang ngực
            thẳng, điện tim đồ, siêu âm ổ bụng tổng quát thường, chụp CT…).
          </p>
          <p className="pb-4">
            Tự hào là bệnh viện lớn, được xây dựng theo tiêu chuẩn “Bệnh viện –
            Khách sạn và lọt Top 3 bệnh viện có điểm chất lượng cao nhất – Bệnh
            viện ĐKQT Ego Medical là địa chỉ uy tín được nhiều doanh nghiệp đăng
            ký khám sức khỏe định kỳ cho người lao động hiện nay.
          </p>
          <p className="pb-4">
            Các danh mục khám sức khỏe doanh nghiệp tại Bệnh viện ĐKQT Ego
            Medical đầy đủ, được sắp xếp theo một quy trình chuẩn sẽ giúp người
            lao động sớm phát hiện các mầm mống gây bệnh để từ đó có phương pháp
            phòng tránh và điều trị kịp thời.
          </p>
          <p className="pb-4">
            Trên đây là những hạng mục khám sức khỏe định kỳ cơ bản cho người
            lao động tại Bệnh viện ĐKQT Ego Medical. Đăng ký khám sức khỏe định
            kỳ cho người lao động tại Bệnh viện ĐKQT Ego Medical luôn là sự lựa
            chọn đúng đắn giúp doanh nghiệp và người lao động được trải nghiệm
            buổi khám sức khỏe nhanh chóng và sớm cho kết quả khám chính xác
            nhất.
          </p>
          <Button text="Đặt lịch ngay" linkTo={routes.bookingPage} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KhamTongQuat;
