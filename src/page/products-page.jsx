import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import "~/css/custom.scss";
import { getDatabase, ref, set } from "firebase/database";
import Product from "~/components/product-item";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "~/context-api/app-provider";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firebase_store } from "~/config/firebase-config";

const Products = () => {
  const { products, setProducts } = useContext(AppContext);
  const [data, setData] = useState(products);
  const [filter, setFilter] = useState({
    filterBrand: "",
    filterKind: "",
    filterPrice: "",
  });

  // console.log(filter);

  useEffect(() => {
    let filteredProduct = products.filter((item) => {
      let passesPriceCheck = false;
      if (filter.filterPrice === "0-1m" && item.price < 1000000) {
        passesPriceCheck = true;
      } else if (
        filter.filterPrice === "1m-2m" &&
        item.price > 1000000 &&
        item.price <= 2000000
      ) {
        passesPriceCheck = true;
      } else if (
        filter.filterPrice === "2m-3m" &&
        item.price > 2000000 &&
        item.price <= 3000000
      ) {
        passesPriceCheck = true;
      } else if (
        filter.filterPrice === "3m-5m" &&
        item.price > 3000000 &&
        item.price <= 5000000
      ) {
        passesPriceCheck = true;
      } else if (
        filter.filterPrice === "5m-10m" &&
        item.price > 5000000 &&
        item.price <= 10000000
      ) {
        passesPriceCheck = true;
      } else if (
        filter.filterPrice === "10m-20m" &&
        item.price > 10000000 &&
        item.price <= 20000000
      ) {
        passesPriceCheck = true;
      } else if (filter.filterPrice === "max" && item.price > 20000000) {
        passesPriceCheck = true;
      }

      return (
        (!filter.filterBrand || filter.filterBrand === item.brand) &&
        (!filter.filterKind || filter.filterKind === item.kind) &&
        (!filter.filterPrice || passesPriceCheck)
      );
    });
    // console.log(filteredProduct);
    setData(filteredProduct);
  }, [filter]);

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
              <ul className="text-[#444] text-sm">
                <li>
                  <label
                    htmlFor="check1"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="brand"
                      id="check1"
                      value="Beurer"
                      hidden
                      onClick={(e) => {
                        setFilter((pre) => ({
                          ...pre,
                          filterBrand: e.target.value,
                        }));
                      }}
                    />
                    <span className="checkmark"></span>
                    <span className="text-sm ">Beurer</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="check2"
                    className="checkbox_brand flex items-center my-3"
                    key="brand"
                  >
                    <input
                      type="radio"
                      name="brand"
                      id="check2"
                      value={"Bliss"}
                      onClick={(e) => {
                        setFilter((pre) => ({
                          ...pre,
                          filterBrand: e.target.value,
                        }));
                      }}
                    />
                    <span className="checkmark"></span>
                    <span>Bliss</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="check3"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="brand"
                      id="check3"
                      value={"Dr Kovik"}
                      onClick={(e) => {
                        setFilter((pre) => ({
                          ...pre,
                          filterBrand: e.target.value,
                        }));
                      }}
                    />
                    <span className="checkmark"></span>
                    <span>Dr Kovik</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="check4"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="brand"
                      id="check4"
                      value={"FA"}
                      onClick={(e) => {
                        setFilter((pre) => ({
                          ...pre,
                          filterBrand: e.target.value,
                        }));
                      }}
                    />
                    <span className="checkmark"></span>
                    <span>FA</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="check5"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      id="check5"
                      name="brand"
                      value={"Nagakawa"}
                      onClick={(e) => {
                        setFilter((pre) => ({
                          ...pre,
                          filterBrand: e.target.value,
                        }));
                      }}
                    />
                    <span className="checkmark"></span>
                    <span>Nagakawa</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="check6"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="brand"
                      id="check6"
                      value={"Omron"}
                      onClick={(e) => {
                        setFilter((pre) => ({
                          ...pre,
                          filterBrand: e.target.value,
                        }));
                      }}
                    />
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
                    <input
                      type="radio"
                      name="radio2"
                      id="kind1"
                      hidden
                      value={"khau trang"}
                      onClick={(e) =>
                        setFilter((pre) => ({
                          ...pre,
                          filterKind: e.target.value,
                        }))
                      }
                    />
                    <span className="checkmark"></span>
                    <span className="text-sm ">Khẩu trang</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="kind2"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="radio2"
                      id="kind2"
                      value={"nhiet ke"}
                      onClick={(e) =>
                        setFilter((pre) => ({
                          ...pre,
                          filterKind: e.target.value,
                        }))
                      }
                    />
                    <span className="checkmark"></span>
                    <span>Nhiệt kế</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="kind3"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="radio2"
                      id="kind3"
                      value={"nuoc rua tay"}
                      onClick={(e) =>
                        setFilter((pre) => ({
                          ...pre,
                          filterKind: e.target.value,
                        }))
                      }
                    />
                    <span className="checkmark"></span>
                    <span>Nước rửa tay</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="kind4"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="radio2"
                      id="kind4"
                      value={"phu kien y te"}
                      onClick={(e) =>
                        setFilter((pre) => ({
                          ...pre,
                          filterKind: e.target.value,
                        }))
                      }
                    />
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
                    <input
                      type="radio"
                      name="radio3"
                      id="price1"
                      hidden
                      value={"0-1m"}
                      onClick={(e) =>
                        setFilter((pre) => ({
                          ...pre,
                          filterPrice: e.target.value,
                        }))
                      }
                    />
                    <span className="checkmark"></span>
                    <span className="text-sm">Giá dưới 1.000.000đ</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price2"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="radio3"
                      id="price2"
                      hidden
                      value={"1m-2m"}
                      onClick={(e) =>
                        setFilter((pre) => ({
                          ...pre,
                          filterPrice: e.target.value,
                        }))
                      }
                    />
                    <span className="checkmark"></span>
                    <span className="text-sm">1.000.000đ - 2.000.000đ</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price3"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="radio3"
                      id="price3"
                      value={"2m-3m"}
                      onClick={(e) =>
                        setFilter((pre) => ({
                          ...pre,
                          filterPrice: e.target.value,
                        }))
                      }
                    />
                    <span className="checkmark"></span>
                    <span className="text-sm">2.000.000đ - 3.000.000đ </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price4"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="radio3"
                      id="price4"
                      value={"3m-5m"}
                      onClick={(e) =>
                        setFilter((pre) => ({
                          ...pre,
                          filterPrice: e.target.value,
                        }))
                      }
                    />
                    <span className="checkmark"></span>
                    <span className="text-sm"> 3.000.000đ - 5.000.000đ </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price5"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="radio3"
                      id="price5"
                      value={"5m-10m"}
                      onClick={(e) =>
                        setFilter((pre) => ({
                          ...pre,
                          filterPrice: e.target.value,
                        }))
                      }
                    />
                    <span className="checkmark"></span>
                    <span className="text-sm">5.000.000đ - 10.000.000đ</span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price6"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="radio3"
                      id="price6"
                      value={"10m-20m"}
                      onClick={(e) =>
                        setFilter((pre) => ({
                          ...pre,
                          filterPrice: e.target.value,
                        }))
                      }
                    />
                    <span className="checkmark"></span>
                    <span className="text-sm">10.000.000đ - 20.000.000đ </span>
                  </label>
                </li>
                <li>
                  <label
                    htmlFor="price8"
                    className="checkbox_brand flex items-center my-3"
                  >
                    <input
                      type="radio"
                      name="radio3"
                      id="price8"
                      value={"max"}
                      onClick={(e) =>
                        setFilter((pre) => ({
                          ...pre,
                          filterPrice: e.target.value,
                        }))
                      }
                    />
                    <span className="checkmark"></span>
                    <span className="text-sm">Giá trên 20.000.000đ </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-7">
            {data.map((item, index) => {
              // let url = item.imgUrl;
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
