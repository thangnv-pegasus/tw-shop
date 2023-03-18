const { default: Footer } = require("~/components/footer");
const { default: Header } = require("~/components/header");
const { default: PageTitle } = require("~/components/page-title");

const SearchPage = () => {
  return (
    <>
      <Header />
      <PageTitle title="Kết quả tìm kiếm" />
      <div className="max-w-container mx-auto">
        <div className="py-10">
            <p className="text-2xl font-semibold text-[#444]">Không tìm thấy kết quả nào phù hợp với từ khóa trên</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage
