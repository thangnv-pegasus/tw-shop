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
    <div className="grid lg:grid-cols-2 lg:gap-0 grid-cols-1 flex-wrap">
      <div className="pb-40 pt-16 text-textColor font-bold lg:pl-container pl-4 bg-[#f6f7f9] lg:px-0 px-4">
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
      <div className="lg:ml-[-55px] sm:ml-0">
        <h2 className="text-textColor text-40px mt-16 font-bold lg:text-center text-left mb-4 lg:px-0 sm:px-4">
          Thành tựu của <span className="text-sky-500"> Chúng tôi</span>
        </h2>
        <div className="relative h-auto">
          <img
            src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/banner-right.jpg?1664096870043"
            alt="img"
            className="w-auto h-full object-cover object-center"
          />
          <div className="absolute w-full py-9 px-4 flex bg-sky-500 text-white lg:bottom-[-6.575rem] bottom-0 justify-around">
            <div className="">
              <p className="md:text-44px text-3xl text-center">180K</p>
              <p className="md:text-17px text-sm font-semibold">Bệnh nhân</p>
            </div>
            <div className="">
              <p className="md:text-44px text-3xl text-center">50+</p>
              <p className="md:text-17px text-sm font-semibold">Y, bác sĩ</p>
            </div>
            <div className="">
              <p className="md:text-44px text-3xl text-center">250+</p>
              <p className="md:text-17px text-sm font-semibold">Nhà cung cấp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAchievements;
