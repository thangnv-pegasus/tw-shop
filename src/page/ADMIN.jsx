import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { firebase_store } from "~/config/firebase-config";
const Admin = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [priceSale, setPriceSale] = useState("");
  const [imgUrl1, setImgUrl1] = useState("");
  const [imgUrl2, setImgUrl2] = useState("");
  const [imgUrl3, setImgUrl3] = useState("");
  const [des, setDes] = useState("");
  const [detail1, setDetail1] = useState("");
  const [detail2, setDetail2] = useState("");
  const [detail3, setDetail3] = useState("");
  const [brand, setBrand] = useState("");
  const [kind, setKind] = useState("");

  const addData = async () => {
    // Add a new document in collection "cities"
    await setDoc(doc(firebase_store, "products", `product${id}`), {
      id: Number.parseInt(id),
      name,
      price: Number.parseInt(price),
      price_sale: Number.parseInt(priceSale),
      description: des,
      brand,
      kind,
      detail: [detail1, detail2, detail3],
      imgUrl: [imgUrl1, imgUrl2, imgUrl3],
    });
  };
  return (
    <form
      action=""
      className="block ml-10"
      onSubmit={(e) => {
        e.preventDefault();
        if (
          name !== "" &&
          id !== "" &&
          price !== "" &&
          imgUrl1 !== "" &&
          imgUrl2 &&
          imgUrl3 !== "" &&
          des !== "" &&
          detail1 !== "" &&
          detail2 != "" &&
          detail3 !== "" &&
          brand !== "" &&
          kind !== ""
        ) {
          addData();
          setId("");
          setName("");
          setPrice("");
          setPriceSale("");
          setImgUrl1("");
          setImgUrl2("");
          setImgUrl3("");
          setDes("");
          setDetail1("");
          setDetail2("");
          setDetail3("");
          setBrand("");
          setKind("");
          alert(
            "thêm dữ liệu thành công!"
          )
        }
      }}
    >
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="kind"
        value={kind}
        onChange={(e) => setKind(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="price_sale"
        value={priceSale}
        onChange={(e) => setPriceSale(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="url 1"
        value={imgUrl1}
        onChange={(e) => setImgUrl1(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="url 2"
        value={imgUrl2}
        onChange={(e) => setImgUrl2(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="url 3"
        value={imgUrl3}
        onChange={(e) => setImgUrl3(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="description"
        value={des}
        onChange={(e) => setDes(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="detail 1"
        value={detail1}
        onChange={(e) => setDetail1(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="detail 2"
        value={detail2}
        onChange={(e) => setDetail2(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        className="block border-[1px] border-solid border-[#ccc] my-3 text-base text-textColor rounded-md px-2 py-1 outline-none"
        placeholder="detail 3"
        value={detail3}
        onChange={(e) => setDetail3(e.target.value)}
      />
      <button
        type="submit"
        className="border-solid border-[1px] border-sky-700 text-white bg-sky-700 px-4 py-2 mt-4"
      >
        Add data
      </button>
    </form>
  );
};

export default Admin;
