import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firebase_store } from "~/config/firebase-config";
import routes from "~/config/routes";
import Blog from "./blog";
import { AppContext } from "~/context-api/app-provider";

const NewsAchievements = () => {
  const { posts } = useContext(AppContext);

  return (
    <div className="grid grid-cols-2 gap-0">
      <div className="pb-40 pt-16 text-[#444] font-bold pl-container bg-[#f6f7f9]">
        <Link
          to={routes.news}
          className="block text-3.5xl mb-4 transition-all duration-200 hover:text-sky-500"
        >
          {" "}
          Tin & Sự Kiện{" "}
        </Link>
        {posts.map((item) => {
          if (item.id <= 3) {
            return <Blog data={item} key={item.id} />;
          }
        })}
      </div>
      <div className="ml-[-55px]">
        <h2 className="text-[#444] text-40px mt-16 font-bold text-center mb-4">
          Thành tựu của <span className="text-sky-500"> Chúng tôi</span>
        </h2>
        <div className="relative">
          <img
            src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/banner-right.jpg?1664096870043"
            alt="img"
          />
          <div className="absolute w-810px py-9 px-4 flex bg-sky-500 text-white bottom-[-110px] justify-around">
            <div className="">
              <p className="text-44px">180K </p>
              <p className="text-17px font-semibold">Bệnh nhân</p>
            </div>
            <div className="">
              <p className="text-44px">50+ </p>
              <p className="text-17px font-semibold">Y, bác sĩ</p>
            </div>
            <div className="">
              <p className="text-44px">250+</p>
              <p className="text-17px font-semibold">Nhà cung cấp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAchievements;
