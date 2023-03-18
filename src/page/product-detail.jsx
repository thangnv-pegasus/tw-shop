import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";

const DetailProduct = () => {
  return (
    <>
      <Header />
      <PageTitle />
      <div className="max-w-container mx-auto">
        <div className="py-10">Chi tiết sản phẩm</div>
      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;
