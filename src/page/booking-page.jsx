import Button from "~/components/button";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";

const BookingPage = () => {
  return (
    <>
      <Header />
      <PageTitle title="Đặt lịch" />
      <div className="bg-bookingBg pt-28 pb-16 bg-no-repeat h-full bg-bottom_left">
        <div className="max-w-container mx-auto">
          <div className="py-10">
            <div className="grid grid-cols-cols_7_5">
              <form method="">
                <div className="px-8">
                  <h2 className="text-3.5xl font-semibold text-[#444] text-center pb-2">
                    Đặt lịch <span className="text-sky-500">hẹn khám</span>
                  </h2>
                  <p className="text-base font-medium text-[#444] text-center pb-8">
                    Chúng tôi tin vào việc cung cấp sự chăm sóc tốt nhất có thể
                    cho tất cả các bệnh nhân hiện tại của chúng tôi
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-x-5 flex-wrap text-[#444] text-sm">
                  <input
                    type="text"
                    placeholder="Tên của bạn*"
                    className="block w-full border-[1px] border-solid border-[#e5e5e5] px-4 mt-4 h-11 outline-none rounded-md"
                  />
                  <input
                    type="tel"
                    placeholder="Số điện thoại*"
                    className="block w-full border-[1px] border-solid border-[#e5e5e5] px-4 mt-4 h-11 outline-none rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="block w-full border-[1px] border-solid border-[#e5e5e5] px-4 mt-4 h-11 outline-none rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Địa chỉ*"
                    className="block w-full border-[1px] border-solid border-[#e5e5e5] px-4 mt-4 h-11 outline-none rounded-md"
                  />
                </div>
                <textarea
                  name=""
                  id=""
                  rows="5"
                  placeholder="Nội dung*"
                  className="px-4 py-8 block w-full mt-4 outline-none border-[1px] border-solid border-[#e5e5e5] rounded-md text-[#444] text-sm"
                ></textarea>
                <Button
                  text="Đặt lịch ngay"
                  className="flex w-full justify-center"
                />
              </form>
              <div>
                <img
                  src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/banner-appointment.png?1677379206119"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BookingPage;
