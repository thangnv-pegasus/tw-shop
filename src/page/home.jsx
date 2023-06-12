import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import About from "~/components/about-me";
import Banner from "~/components/banner";
import Footer from "~/components/footer";
import Header from "~/components/header";
import MedicalProduct from "~/components/medical-products";
import NewsAchievements from "~/components/news-achievements";
import ServiceTab from "~/components/service";
import { firebase_store } from "~/config/firebase-config";

const Home = () => {

  return (
    <div>
      <Header />
      <Banner />
      <About />
      <ServiceTab />
      <MedicalProduct />
      <NewsAchievements />
      <Footer />
    </div>
  );
};

export default Home;
