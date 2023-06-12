import {
  faBasketShopping,
  faCheck,
  faCircleMinus,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import AddToCartModal from "~/components/add-to-cart-modal";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Loading from "~/components/loading";
import PageTitle from "~/components/page-title";
import Product from "~/components/product-item";
import { firebase_store } from "~/config/firebase-config";
import routes from "~/config/routes";
import { AppContext } from "~/context-api/app-provider";
import { AuthContext } from "~/context-api/auth-provider";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const DetailProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const [state, setState] = useState(1);
  const [tabIndex, setTabIndex] = useState(1);
  const { products } = useContext(AppContext);
  const [checkClick, setCheckClick] = useState(false);
  const [checkCart, setCheckCart] = useState(false);
  const [openAddToCartModal, setOpenAddToCartModal] = useState(false);
  const nav = useNavigate();
  const { cart, user } = useContext(AuthContext);

  const formatNumber = (str) => {
    const num = Number.parseInt(str);
    const numFormat = num.toLocaleString("en-US");
    return numFormat;
  };

  const getProduct = async () => {
    const ref = doc(firebase_store, "products", `product${params.productID}`);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      // Convert to City object
      const res = docSnap.data();
      setProduct(res);
      // Use a City instance method
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getProduct();
  }, [params.productID]);

  const AddCart = async () => {
    const q = query(
      collection(firebase_store, `cart_${user.uid}`),
      where("id", "==", Number(params.productID))
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const res = [];
      querySnapshot.forEach((doc) => {
        res.push(doc.data());
      });
      if (res.length > 0) {
        setCheckCart(true);
        // console.log("run unsubscribe function");
      }
    });
    if (checkCart == false) {
      const docRef = await setDoc(
        doc(
          firebase_store,
          `cart_${user.uid}`,
          `product${product.id}_${user.uid}`
        ),
        {
          uid: user.uid,
          ...product,
          quantity: state,
        }
      );
    } else {
      const productRef = doc(
        firebase_store,
        `cart_${user.uid}`,
        `product${product.id}_${user.uid}`
      );
      const thisProduct = cart.find((item) => item.id == product.id);
      const qtt = thisProduct.quantity + state;
      // Set the "capital" field of the city 'DC'
      await updateDoc(productRef, {
        quantity: qtt,
      });
    }
  };

  const handleAddToCart = () => {
    if (!user) {
      alert("Vui lòng đăng nhập để thêm sản phẩm");
    } else {
      AddCart();
      setOpenAddToCartModal(true);
    }
  };

  const handleBuyNow = () => {
    if (!user) {
      alert("Vui lòng đăng nhập để thêm sản phẩm");
    } else {
      AddCart();
      nav(routes.payPage);
    }
  };

  useEffect(() => {
    setCheckCart(false);
    setState(1);
  }, [params.productID]);

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
            <div className="lg:max-w-container lg:mx-auto sm:max-w-full sm:px-4 lg:px-0">
              <div className="py-10 grid grid-cols-2 gap-3">
                <ProductImage productUrl={product.imgUrl} />
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
                          setCheckClick(!checkClick);
                          handleAddToCart();
                        }}
                      >
                        Thêm vào giỏ hàng
                      </span>
                      <span className="absolute top-0 left-0 right-0 bottom-0 bg-sky-400 w-0 transition-all ease-linear duration-200 z-[-1] group-hover:w-full"></span>
                    </button>
                    <button
                      className="flex items-center ml-5 bg-sky-500 text-base mt-4 text-white px-8 h-12 rounded-3xl relative overflow-hidden group z-[1] font-semibold"
                      onClick={() => {
                        handleBuyNow();
                      }}
                    >
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
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {products == null ? (
                    <Loading />
                  ) : (
                    products.map((item) => {
                      if (item.id < 5) {
                        return (
                          <SwiperSlide key={item.id}>
                            <Product product={item} />
                          </SwiperSlide>
                        );
                      }
                    })
                  )}
                </Swiper>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
      {openAddToCartModal && (
        <AddToCartModal
          product={product}
          setOpenAddToCartModal={setOpenAddToCartModal}
        />
      )}
    </>
  );
};

const ProductImage = ({ productUrl }) => {
  const [imgSelect, setImgSelect] = useState(0);
  return (
    <div>
      <div className="w-full h-auto mb-5 rounded-md">
        <img
          src={productUrl[imgSelect]}
          alt="product image"
          className="object-cover object-center w-full h-full rounded-md"
        />
      </div>
      <div className="flex">
        {productUrl.map((src, index) => {
          return (
            <div
              className={`w-[90px] h-[90px] mr-3 transition-all p-1 ease-linear duration-100 border-[1px] border-solid border-transparent hover:border-sky-600 rounded-sm ${
                imgSelect === index ? "border-sky-600" : "border-transparent"
              }`}
              key={index}
              onClick={() => setImgSelect(index)}
            >
              <img
                src={src}
                alt="product image"
                className="object-cover object-center w-full h-full rounded-sm"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailProduct;
