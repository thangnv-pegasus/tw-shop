import Home from "~/page/home";
import BookingPage from "~/page/booking-page";
import IntroPage from "~/page/intro-page";
import News from "~/page/news-page";
import routes from "~/config/routes";
import SignIn from "~/page/sign-in";
import SignUp from "~/page/sign-up";
import ContactPage from "~/page/contact-page";
import Products from "~/page/products-page";
import TamSoatUngThu from "~/page/tam-soat-ung-thu";
import MoHoc from "~/page/mo-hoc";
import KhamTongQuat from "~/page/kham-tong-quat";
import XetNghiemMau from "~/page/xet-nghiem-mau";
import XetNghiemDiTruyen from "~/page/xet-nghiem-di-truyen";
import TeBaoHoc from "~/page/te-bao-hoc";
import SearchPage from "~/page/search-page";
import DetailProduct from "~/page/product-detail";
import Blog from "~/page/detail-blog";
import ShoppingCart from "~/page/cart-page";
import Test from "~/page/test-redux";

const publicRoutes = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.introPage,
    component: IntroPage,
  },
  {
    path: routes.bookingPage,
    component: BookingPage,
  },
  {
    path: routes.news,
    component: News,
  },
  {
    path: routes.login,
    component: SignIn,
  },
  {
    path: routes.signup,
    component: SignUp,
  },
  {
    path: routes.contact,
    component: ContactPage,
  },
  {
    path: routes.products,
    component: Products,
  },
  {
    path: routes.TamSoatUngThu,
    component: TamSoatUngThu,
  },
  {
    path: routes.MoHoc,
    component: MoHoc,
  },
  {
    path: routes.khamtongquat,
    component: KhamTongQuat,
  },
  {
    path: routes.xetnghiemmau,
    component: XetNghiemMau,
  },
  {
    path: routes.xetnghiemditruyen,
    component: XetNghiemDiTruyen,
  },
  {
    path: routes.tebaohoc,
    component: TeBaoHoc,
  },
  {
    path: routes.search,
    component: SearchPage,
  },
  {
    path: routes.detailProduct,
    component: DetailProduct,
  },
  {
    path: routes.blog,
    component: Blog,
  },
  {
    path: routes.featuredProduct,
    component: Products,
  },
  {
    path: routes.cartPage,
    component: ShoppingCart,
  },
  {
    path: routes.test,
    component: Test
  }
];

export default publicRoutes;
