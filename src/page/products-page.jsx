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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignRight,
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const { products, setProducts } = useContext(AppContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState(products);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState({
    filterBrand: "",
    filterKind: "",
    filterPrice: "",
  });

  const chunkArray = (myArray) => {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];
    if (myArray.length > 0) {
      for (index = 0; index < arrayLength; index += 12) {
        let myChunk = myArray.slice(index, index + 12);
        // Do something if you want with the group
        tempArray.push(myChunk);
      }
    }

    return tempArray;
  };
  const SplitProducts = chunkArray(data);

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
  // console.log(pageNumber);
  return (
    <div>
      <Header />
      <PageTitle title="Tất cả sản phẩm" />
      <div className="lg:max-w-container lg:mx-auto w-full px-4 lg:px-0">
        <div className="grid lg:grid-cols-3_9 grid-cols-1 py-5 gap-7">
          <div className="lg:block hidden">
            <div>
              <h2 className="text-base text-textColor font-semibold uppercase mb-4">
                Thương hiệu
              </h2>
              <ul className="text-textColor text-sm">
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
              <h2 className="text-base text-textColor font-semibold uppercase mb-4">
                Loại sản phẩm
              </h2>
              <ul className="text-textColor">
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
              <h2 className="text-base text-textColor font-semibold uppercase mb-4">
                Giá sản phẩm
              </h2>
              <ul className="text-textColor">
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

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 min-h-[500px]">
            {SplitProducts.length > 0 ? (
              SplitProducts[pageNumber - 1].map((item, index) => {
                // let url = item.imgUrl;

                return <Product product={item} key={index} />;
              })
            ) : (
              <>không có sản phẩm nào</>
            )}
          </div>
        </div>
      </div>
      <ul className="flex justify-end px-4 lg:max-w-container lg:mx-auto lg:px-0">
        {pageNumber === SplitProducts.length && (
          <li>
            <button
              className="text-base font-medium px-3 py-1 border-solid border-[1px] rounded-sm border-[#ccc] transition-all duration-100 ease-linear hover:bg-sky-700 hover:text-white"
              onClick={() =>
                setPageNumber((pre) => {
                  if (pre === 1) {
                    return;
                  } else {
                    return pre - 1;
                  }
                })
              }
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </li>
        )}
        {SplitProducts.map((item, index) => {
          return (
            <li key={index} className="mx-2">
              <button
                className={`text-base font-medium px-3 py-1 border-solid border-[1px] rounded-sm border-[#ccc] transition-all ease-linear duration-150 hover:bg-sky-700 hover:text-white ${
                  pageNumber === index + 1
                    ? "bg-sky-700 text-white"
                    : "bg-white text-textColor"
                }`}
                onClick={() => setPageNumber(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          );
        })}
        {pageNumber === 1 && (
          <li>
            <button
              className={`text-base font-medium px-3 py-1 border-solid border-[1px] rounded-sm border-[#ccc] transition-all ease-linear duration-150 hover:bg-sky-700 hover:text-white `}
              onClick={() =>
                setPageNumber((pre) => {
                  if (pre === SplitProducts.length + 1) {
                    return;
                  } else {
                    return pre + 1;
                  }
                })
              }
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </li>
        )}
      </ul>
      <div className="min-h-[500px]"></div>
      <Footer />
      <>
        {!showFilter && (
          <div className="fixed top-1/4 right-0">
            <button
              className="block px-2 py-1 border-solid border-[#ccc] border-[1px] text-2xl bg-sky-600 text-white"
              onClick={() => setShowFilter(true)}
            >
              <FontAwesomeIcon icon={faAlignRight} />
            </button>
          </div>
        )}
        {showFilter && (
          <div className="block lg:hidden fixed top-0 right-0 bottom-0 bg-white p-4 overflow-y-scroll border-solid border-l-[1px] border-[#ccc] animate-filter_amt">
            <button
              className="absolute left-0 top-0 py-1 px-3 transition-all ease-linear duration-150 hover:bg-sky-500 hover:text-white"
              onClick={() => setShowFilter(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className="">
              <h2 className="text-base text-textColor font-semibold uppercase my-4 mt-6">
                Thương hiệu
              </h2>
              <ul className="text-textColor text-sm">
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
              <h2 className="text-base text-textColor font-semibold uppercase mb-4">
                Loại sản phẩm
              </h2>
              <ul className="text-textColor">
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
              <h2 className="text-base text-textColor font-semibold uppercase mb-4">
                Giá sản phẩm
              </h2>
              <ul className="text-textColor">
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
        )}
      </>
    </div>
  );
};

export default Products;
