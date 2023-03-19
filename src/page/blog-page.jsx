import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import { firebase_store } from "~/config/firebase-config";

const Blog = () => {
  const param = useParams();
  const [data, setData] = useState();
  const [listBlog, setListBlog] = useState([]);
  // console.log(param.blogID);

  const getBlog = async () => {
    const docRef = doc(firebase_store, "blogs", `blog${param.blogID}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };


  useEffect(() => {
    getBlog();
    
  }, []);

  console.log(data);

  return (
    <>
      <Header />
      <PageTitle />
      <div className="max-w-container mx-auto">
        <div className="min-h-[600px] py-10 text-[#444]">
          <h2 className="text-3.5xl font-semibold">{data.title}</h2>
          <p className="py-4 text-sm font-medium opacity-90 mb-4">
            Đăng bởi: {data.author}{" "}
            <span className="ml-4">Ngày: {data.date}</span>
          </p>
          <div>
            <img src={data.img[0]} alt="img" className="block mb-5" />
            {data.content.map((item, index) => {
              if (index < data.content.length - 1) {
                return (
                  <p
                    key={index}
                    className="text-sm text-[#444] my-4 leading-[1.7]"
                  >
                    {item}
                  </p>
                );
              }
            })}
            <img src={data.img[1]} alt="img" className="mx-auto" />
            <p className="text-sm text-[#444] pt-3">
              {data.content[data.content.length - 1]}
            </p>
            <div className="pt-5">
              <h3 className="text-2xl font-semibold text-[#444]">
                Bài viết liên quan:
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
