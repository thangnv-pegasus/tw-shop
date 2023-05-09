import {
  faBasketShopping,
  faCheck,
  faCircleMinus,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Loading from "~/components/loading";
import PageTitle from "~/components/page-title";
import Product from "~/components/product-item";
import { firebase_store } from "~/config/firebase-config";
import routes from "~/config/routes";
import { add_product } from "~/redux/cart/cart.actions";

const DetailProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState();

  const [state, setState] = useState(1);
  const [tabIndex, setTabIndex] = useState(1);
  const [db, setDb] = useState();

  const getProduct = async () => {
    const docRef = doc(
      firebase_store,
      "products",
      `product${params.productID}`
    );
    const docSnap = await getDoc(docRef);
    const querySnapshot = await getDocs(collection(firebase_store, "products"));
    const arr = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      arr.push(doc.data());
    });
    setDb(arr);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setProduct(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getProduct();
  }, [params.productID]);

  const formatNumber = (str) => {
    const num = Number.parseInt(str);
    const numFormat = num.toLocaleString("en-US");
    return numFormat;
  };

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="min-h-[1000px]">
        {product == null ? (
          <div className="max-w-container mx-auto py-14">
            <Loading />
          </div>
        ) : (
          <>
            <PageTitle title={product.name} />
            <div className="max-w-container mx-auto">
              <div className="py-10 grid grid-cols-2 gap-3">
                <div>
                  <div className="w-[555px] h-[555px] mb-5">
                    <img
                      src={product.imgUrl[0]}
                      alt="product image"
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                  <div className="flex">
                    {product.imgUrl.map((src, index) => {
                      return (
                        <div className="w-[90px] h-[90px] mr-3" key={index}>
                          <img
                            src={src}
                            alt="product image"
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl text-[#444] font-normal mb-4">
                    {product.name}
                  </h2>
                  <div className="mb-4">
                    {product.price_sale ? (
                      <div className="flex items-end">
                        <p className="text-2xl text-[#444] font-bold">
                          {" "}
                          {formatNumber(product.price_sale)}{" "}
                          <sup className="inline ml-[-5px] underline">đ</sup>{" "}
                        </p>
                        <p className="text-[#acb2b0] text-base ml-3 line-through">
                          {" "}
                          {formatNumber(product.price)}{" "}
                          <sup className="inline ml-[-5px] underline">đ</sup>{" "}
                        </p>
                      </div>
                    ) : (
                      <>
                        <p className="text-2xl text-[#444] font-bold">
                          {formatNumber(product.price)}{" "}
                          <sup className="inline ml-[-5px] underline">đ</sup>
                        </p>
                      </>
                    )}
                  </div>
                  <div className="text-sm text-[#444] leading-6">
                    {product.description}
                  </div>
                  <div className="mt-5 text-[#444]">
                    <p className="mb-3 font-bold text-sm">Số lượng</p>
                    <div className="bg-[#ebebeb] inline-flex items-center rounded-3xl">
                      <button
                        className="block px-3 text-[#6e7874]"
                        onClick={() => {
                          if (state > 1) {
                            setState((pre) => pre - 1);
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faCircleMinus} />
                      </button>
                      <p className="px-8 py-3">{state}</p>
                      <button
                        className="block px-3 text-[#6e7874]"
                        onClick={() => setState((pre) => pre + 1)}
                      >
                        <FontAwesomeIcon icon={faCirclePlus} />
                      </button>
                    </div>
                  </div>
                  <div className="flex mt-8">
                    <button className="flex items-center bg-sky-500 text-base mt-4 text-white px-8 h-12 rounded-3xl relative overflow-hidden group z-[1] font-semibold">
                      <FontAwesomeIcon icon={faBasketShopping} />
                      <span
                        className="ml-1"
                        onClick={() => {
                          // console.log({ ...product, quantity: state });
                          dispatch(
                            add_product({ ...product, quantity: state })
                          );
                        }}
                      >
                        Thêm vào giỏ hàng
                      </span>
                      <span className="absolute top-0 left-0 right-0 bottom-0 bg-sky-400 w-0 transition-all ease-linear duration-200 z-[-1] group-hover:w-full"></span>
                    </button>
                    <button className="flex items-center ml-5 bg-sky-500 text-base mt-4 text-white px-8 h-12 rounded-3xl relative overflow-hidden group z-[1] font-semibold">
                      <FontAwesomeIcon icon={faCheck} />
                      <span className="ml-1">Mua ngay</span>
                      <span className="absolute top-0 left-0 right-0 bottom-0 bg-sky-400 w-0 transition-all ease-linear duration-200 z-[-1] group-hover:w-full"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-14 mb-8 border-[1px] border-solid border-[#ebebeb] px-3">
                <div className="flex border-b-[1px] border-b-solid border-b-[#ebebeb]">
                  <button
                    className="relative block text-lg uppercase py-3 text-[#444] font-semibold mr-10"
                    onClick={() => setTabIndex(1)}
                  >
                    Thông tin sản phẩm
                    {tabIndex === 1 && (
                      <span className="absolute bottom-0 left-0 right-0 h-1 bg-sky-300"></span>
                    )}
                  </button>
                  <button
                    className="relative block text-lg uppercase py-3 text-[#444] font-semibold"
                    onClick={() => setTabIndex(2)}
                  >
                    Quy định bảo hành
                    {tabIndex === 2 && (
                      <span className="absolute bottom-0 left-0 right-0 h-1 bg-sky-300"></span>
                    )}
                  </button>
                </div>
                <div className="py-5 text-sm text-[#444] font-normal">
                  {tabIndex === 1 &&
                    product.detail.map((content, index) => {
                      return (
                        <p key={index} className="my-2">
                          {content}
                        </p>
                      );
                    })}
                  {tabIndex === 2 && (
                    <p className="py-5 text-sm text-[#444] font-normal">
                      Nội dung tùy chỉnh viết ở đây
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Link
                  to={routes.products}
                  className="text-2xl block mb-9 font-semibold text-[#444] transition-all ease-linear duration-100 hover:text-sky-500"
                >
                  {" "}
                  Sản phẩm liên quan{" "}
                </Link>
                <div className="grid gap-4 grid-cols-4 mb-10">
                  {db == null ? (
                    <Loading />
                  ) : (
                    db.map((item) => {
                      if (item.id < 6) {
                        return (
                          <Product
                            product = {item}
                          />
                        );
                      }
                    })
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;
