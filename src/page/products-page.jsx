import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import "~/css/custom.scss";
import { getDatabase, ref, set } from "firebase/database";
import Product from "~/components/product-item";
import { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  getFirestore,
  getDocs,
} from "firebase/firestore";
import { firebase_store } from "~/config/firebase-config";
import { AppContext } from "~/context-api/app-provider";

const data = [
  {
    productId: 1,
    name: "Máy xông mũi họng",
    price: 1130000,
    price_sale: null,
    imageUrl: [
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/products/may-xong-mui-hong-beurer-ih26-duc-5d37bdc406a19-24072019090908-ced00d13-cf7f-4b2c-b1ad-1081447c94ea.jpg?v=1585558027640",
      "https://bizweb.dktcdn.net/thumb/small/100/382/483/products/may-xong-mui-hong-laica-md6026-7b5e8f98-bed7-4ad7-919e-cddcee6c7ceb.jpg?v=1585558027640",
      "https://bizweb.dktcdn.net/thumb/small/100/382/483/products/may-xong-mui-hong-neb-50a-3-a89d8fb9-9f33-4047-a903-814bc91fda50.jpg?v=1585558027640",
    ],
    description:
      "Kính gửi Quý khách hàng! Nhằm đảo bảo sức khỏe cho Quý khách và cộng đồng trong đại dịch Covid-19, Quý khách vui lòng không đến trực tiếp mua hàng . Chúng tôi sẽ Giao hàng và thu tiền tại nhà trên toàn quốc cho Quý khách. Với trên 13 năm kinh nghiệm bán hàng Online chúng tôi sẽ làm hài lòng Quý khách.",
    detail: [
      "Máy xông mũi họng Omron NE-C28 giúp điều trị các bệnh về đường hô hấp hiệu quả",
      "Máy xông mũi họng Omron NE C28 là dòng máy xông mũi họng gia đình có thể dùng cho cả người lớn và trẻ em, giúp hỗ trợ điều trị các bệnh viêm mũi, viêm xoang hay viêm họng, viêm phế quản, phổi, hen suyễn… một cách hiệu quả và không gây phản ứng phụ cho hệ tiêu hóa như việc điều trị bằng phương pháp uống thuốc.",
      "Máy xông khí dung Omron NE-C28 hoạt động theo nguyên lý đưa thuốc trực tiếp vào tận các tiểu phế nang của phổi với tốc độ phun khí là 0,4 ml/phút với kích thước hạt là 3 micron, giúp đem lại hiệu quả điều trị nhanh chóng. ",
      "Dung tích cốc thuốc tối đa là 7ml. Máy xông mũi họng sử dụng nguồn điện 1 pha, vận hành êm ái. Thân máy bằng nhựa cao cấp cho độ bền cao.",
    ],
    warranty: null,
  },
  {
    productId: 2,
    name: "Cồn rửa tay khô",
    price: 150000,
    price_sale: 99000,
    imageUrl: [
      "https://bizweb.dktcdn.net/thumb/large/100/382/483/products/nuoc-rua-tay-kho-sat-khuan-dr-kovik-500ml-1-d1ebe3e0-246c-4961-ac3b-d72c82f8dfe0-364f065d-a3d1-4d79-992d-26f24cdc48e6.jpg?v=1585557952817",
      "https://bizweb.dktcdn.net/thumb/small/100/382/483/products/nuoc-rua-tay-kho-sat-khuan-dr-kovik-500ml-t2-b8a73ab7-5fa1-470f-a713-4009d6df8f39.jpg?v=1585557952817",
      "https://bizweb.dktcdn.net/thumb/small/100/382/483/products/nuoc-rua-tay-kho-sat-khuan-dr-kovik-500ml-t3-6b274a9d-28f3-4aa7-82b9-c75f09a8d351.jpg?v=1585557952817",
    ],
    description:
      "Kính gửi Quý khách hàng! Nhằm đảo bảo sức khỏe cho Quý khách và cộng đồng trong đại dịch Covid-19, Quý khách vui lòng không đến trực tiếp mua hàng. Với trên 13 năm kinh nghiệm bán hàng Online chúng tôi sẽ làm hài lòng Quý khách.",
    detail: [
      "Công dụng của nước rửa tay khô sát khuẩn Dr Kovik 500ml",
      "Dung dịch rửa tay sát khuẩn Kosna 500ml là sản phẩm được nghiên cứu và sản xuất bởi Viện Hàn lâm Khoa Học Công Nghệ Việt Nam hợp tác với công ty CP Dược mỹ phẩm Kosna Việt Nam. ",
      "Công dụng của nước rửa tay sát khuẩn:",
      "Có tác dụng sát khuẩn, sát trùng.",
      "Chiết xuất từ lô hội, nano bạc và Vitamin E giúp da không bị khô.",
      "An toàn cho mọi người (kể cả với trẻ nhỏ).",
      "Hướng dẫn sử dụng:",
      "Lấy 1 lượng nhỏ dung dịch lên tay rồi thoa đều. Không cần rửa lại với nước.",
      "Sử dụng trong sinh hoạt hàng ngày, trước và sau khi ăn, sau khi vệ sinh, sau khi bị côn trùng cắn (đốt), trước - trong và sau khi đi vào vùng có nguy cơ nhiễm khuẩn, trước và sau khi đến nơi đông người,....",
      "Sử dụng trong y tế: Trước tiếp xúc và làm thủ thuật cho bệnh nhân, sau tiếp xúc bệnh nhân và máu, dịch, đồ vật của bệnh nhân.",
      "Lưu ý: Không được uống và để sản phẩm dính vào mắt. Khi bị dính vào mắt, rửa kĩ với nước sạch và đến ngay cơ sở y tế khám. Bảo quản dưới 30 độ. Tránh tiếp xúc nguồn nhiệt.",
    ],
    warranty: null,
  },
  {
    productId: 3,
    name: "Khẩu trang vải xuất khẩu",
    price: 120000,
    price_sale: 100000,
    imageUrl: [
      "https://bizweb.dktcdn.net/thumb/small/100/382/483/products/khau-trang-vai-khang-khuan-nagakawa-t4-b5e0c130-a26e-43d4-8c9e-cf0243b9442c.jpg?v=1585557895613",
      "https://bizweb.dktcdn.net/thumb/small/100/382/483/products/khau-trang-vai-khang-khuan-nagakawa-e2309939-9973-4dcf-bfcf-33a343a59519.jpg?v=1585557895613",
      "https://bizweb.dktcdn.net/thumb/small/100/382/483/products/khau-trang-vai-khang-khuan-nagakawa-t1-55c79f3b-65c5-4075-9711-19e0e78311c6.jpg?v=1585557895613",
      "https://bizweb.dktcdn.net/thumb/small/100/382/483/products/khau-trang-vai-khang-khuan-nagakawa-t2-170145fb-f73d-4b55-b5d5-39625a12f97a.jpg?v=1585557895613",
    ],
    description:
      "Khẩu trang vải dày 2 lớp: 1 Lớp Lacoste và 1 lớp Single ( có phiếu kiểm nghiệm) Chống tia cực tím UV. Sản xuất theo công nghệ Nhật Bản. Khả năng kháng khuẩn, hạn chế vi khuẩn. Cản bụi và các hạt nhỏ bắn ra từ đường hô hấp của người đeo. Tái sử dụng nhiều lần, tính năng kháng khuẩn lưu giữ tối ưu trong 30 lần giặt. Mềm mịn, vừa vặn. Không gây bí, khó thở. Khẩu trang kháng khuẩn không gây kích ứng da. ",
    detail: [
      "Khẩu trang vải dày 2 lớp: 1 Lớp Lacoste và 1 lớp Single ( có phiếu kiểm nghiệm)",
      "Chống tia cực tím UV.",
      "Sản xuất theo công nghệ Nhật Bản.",
      "Khả năng kháng khuẩn, hạn chế vi khuẩn.",
      "Cản bụi và các hạt nhỏ bắn ra từ đường hô hấp của người đeo.",
      "Tái sử dụng nhiều lần, tính năng kháng khuẩn lưu giữ tối ưu trong 30 lần giặt.",
      "Mềm mịn, vừa vặn.",
      "Không gây bí, khó thở.",
      "Khẩu trang kháng khuẩn không gây kích ứng da. ",
    ],
    warranty: null,
  },
];

const Products = () => {
  const { products } = useContext(AppContext);

  // const addProduct = async ({
  //   id,
  //   name,
  //   price,
  //   price_sale,
  //   imgUrl,
  //   description,
  //   detail,
  //   warranty,
  // }) => {
  //   await setDoc(doc(firebase_store, "products", `product${id}`), {
  //     id: id,
  //     name: name,
  //     price: price,
  //     price_sale,
  //     imgUrl: imgUrl,
  //     description: description,
  //     detail: detail,
  //     warranty: warranty,
  //   });
  // };

  // for (let i = 0; i < data.length; i++) {
  //   addProduct({
  //     id: data[i].productId,
  //     name: data[i].name,
  //     price: data[i].price,
  //     price_sale: data[i].price_sale,
  //     imgUrl: data[i].imageUrl,
  //     description: data[i].description,
  //     detail: data[i].detail,
  //     warranty: data[i].warranty,
  //   });
  // }

  return (
    <div>
      <Header />
      <PageTitle title="Tất cả sản phẩm" />
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-3_9 py-5 gap-7">
          <div>
            <div>
              <h2 className="text-base text-[#444] font-semibold uppercase mb-4">
                Thương hiệu
              </h2>
              <ul className="text-[#444]">
                <li>
                  <label
                    htmlFor="check1"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="check1" hidden />
                    <span className="checkmark"></span>
                    <span className="text-sm ">Beurer</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="check2"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="check2" />
                    <span className="checkmark"></span>
                    <span>Bliss</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="check3"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="check3" />
                    <span className="checkmark"></span>
                    <span>Dr Kovik</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="check4"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="check4" />
                    <span className="checkmark"></span>
                    <span>FA</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="check5"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="check5" />
                    <span className="checkmark"></span>
                    <span>Nagakawa</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="check6"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="check6" />
                    <span className="checkmark"></span>
                    <span>Omron</span>
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-base text-[#444] font-semibold uppercase mb-4">
                Loại sản phẩm
              </h2>
              <ul className="text-[#444]">
                <li>
                  <label
                    htmlFor="kind1"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="kind1" hidden />
                    <span className="checkmark"></span>
                    <span className="text-sm ">Khẩu trang</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="kind2"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="kind2" />
                    <span className="checkmark"></span>
                    <span>Nhiệt kế</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="kind3"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="kind3" />
                    <span className="checkmark"></span>
                    <span>Nước rửa tay</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="kind4"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="kind4" />
                    <span className="checkmark"></span>
                    <span>Thiết bị y tế</span>
                  </label>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-base text-[#444] font-semibold uppercase mb-4">
                Giá sản phẩm
              </h2>
              <ul className="text-[#444]">
                <li>
                  <label
                    htmlFor="price1"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="price1" hidden/>
                    <span className="checkmark"></span>
                    <span className="text-sm">Giá dưới 1.000.000đ</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price2"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="price2" hidden/>
                    <span className="checkmark"></span>
                    <span className="text-sm">1.000.000đ - 2.000.000đ</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price3"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="price3" />
                    <span className="checkmark"></span>
                    <span className="text-sm">2.000.000đ - 3.000.000đ </span>
                  </label>
                  <label
                    htmlFor="price4"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="price4" />
                    <span className="checkmark"></span>
                    <span className="text-sm"> 3.000.000đ - 5.000.000đ </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price5"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="price5" />
                    <span className="checkmark"></span>
                    <span className="text-sm">5.000.000đ - 10.000.000đ</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price6"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="price6" />
                    <span className="checkmark"></span>
                    <span className="text-sm">10.000.000đ - 20.000.000đ </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price7"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="price7" />
                    <span className="checkmark"></span>
                    <span className="text-sm">20.000.000đ - 50.000.000đ </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price8"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input type="checkbox" id="price8" />
                    <span className="checkmark"></span>
                    <span className="text-sm">Giá trên 50.000.000đ </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-7">
            {products.map((item, index) => {
              let url = item.imgUrl;
              return <Product product={item} key={index} />;
            })}
          </div>
        </div>
      </div>

      <div className="min-h-[500px]"></div>
      <Footer />
    </div>
  );
};

export default Products;
