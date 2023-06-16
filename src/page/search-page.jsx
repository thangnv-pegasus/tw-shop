import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "~/components/loading";
import Product from "~/components/product-item";
import { firebase_store } from "~/config/firebase-config";

const { default: Footer } = require("~/components/footer");
const { default: Header } = require("~/components/header");
const { default: PageTitle } = require("~/components/page-title");

const SearchPage = () => {
  const [products, setProducts] = useState();
  const [result, setResult] = useState();
  const param = useParams();
  const value = param.text.toUpperCase();

  const getData = async () => {
    const arr = [];
    const querySnapshot = await getDocs(collection(firebase_store, "products"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      if (doc.data().name.toUpperCase().includes(value)) {
        arr.push(doc.data());
      }
    });
    setProducts(arr);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <PageTitle title="Kết quả tìm kiếm" />
      <div className="lg:max-w-container lg:mx-auto lg:px-0 max-w-full px-4">
        <div className="py-10">
          {products == null ? (
            <Loading />
          ) : (
            <div>
              <h2 className="text-2xl font-semibold text-textColor pb-5">
                Có {products.length} kết quả tìm kiếm phù hợp
              </h2>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {products.map((product) => {
                  return (
                    <Product
                      product = {product}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
