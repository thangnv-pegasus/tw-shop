import Button from "~/components/button";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import routes from "~/config/routes";

const TeBaoHoc = () => {
  return (
    <>
      <Header />
      <PageTitle title="Tế bào học"/>
      <div className="lg:max-w-container lg:mx-auto sm:max-w-full sm:px-4 lg:px-0">
        <div className="py-10 text-sm text-[#444] leading-7">
          <p className="pb-4">
            <b>Xét nghiệm tế bào học</b> (Cytology hoặc Cytopathology) là xét
            nghiệm thông dụng và có giá trị cao. Xét nghiệm tế bào học khảo sát
            các tế bào rời hoặc một cụm tế bào lẫn trong chất dịch lỏng thấy
            được trên kính hiển vi. Có khi chỉ cần một giọt máu hoặc chất dịch
            như trong xét nghiệm FNA, nhưng có khi phải cần đến cả chai chất{" "}
            <b>dịch màng phổi</b> hoặc ổ bụng.
          </p>
          <p className="pb-4">
            Lấy một mẫu thử tế bào, ít gây mệt, ít gây biến chứng và đỡ tốn kém
            hơn cho người bệnh so với sinh thiết mô bệnh học.
          </p>
          <p className="pb-4">
            Trong nhiều trường hợp, <b>sinh thiết</b> cho kết quả chính xác hơn.
            Tuy nhiên, với một số trường hợp, độ chính xác gần như nhau. Vì vậy,
            việc lựa chọn các xét nghiệm tế bào học hay xét nghiệm sinh thiết sẽ
            tùy thuộc vào ý kiến bác sĩ sau khi cân nhắc nhiều yếu tố liên quan
            đến loại bệnh và cơ quan bị bệnh.
          </p>
          <Button text="Đặt lịch ngay" linkTo={routes.bookingPage}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeBaoHoc;
