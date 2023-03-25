import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import BlogItem from "~/components/blog-item";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Loading from "~/components/loading";
import PageTitle from "~/components/page-title";
import { firebase_store } from "~/config/firebase-config";

const News = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const array = [];
    const querySnapshot = await getDocs(collection(firebase_store, "blogs"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      array.push(doc.data());
    });
    setData(array);
  };

  useEffect(() => {
    getData();
    // console.log(data);
  }, []);

  return (
    <>
      <Header />
      <PageTitle title="Tin tức" />
      <div className="max-w-container mx-auto">
        <div className="py-10">
          <h2 className="text-left font-semibold text-[#444] text-4xl">
            Tin tức
          </h2>
          {data == null ? (
            <Loading />
          ) : (
            <div className="py-10 grid grid-cols-3 gap-10 gap-x-14">
              {data.map((item) => {
                return <BlogItem data={item} key={item.id} />;
              })}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default News;
