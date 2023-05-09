import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "~/components/footer";
import Header from "~/components/header";
import PageTitle from "~/components/page-title";
import { firebase_store } from "~/config/firebase-config";
import routes from "~/config/routes";

const SignUp = () => {
  return (
    <div>
      <Header />
      <PageTitle title="Đăng nhập ký tài khoản" />
      <SigninForm />
      <Footer />
    </div>
  );
};

const SigninForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    const auth = getAuth();

    // gửi lên firebase tín hiệu muốn đăng ký tài khoản
    // thực chất lúc này đã có tài khoản trên database của fire auth rồi
    // nhưng ta muốn dữ liệu này được lưu trên fire store để có thể dễ dàng lấy ra
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        await setDoc(doc(firebase_store, "users", email), {
          first_name: fName,
          last_name: lName,
          email: email,
          password: password,
          phone: phone,
          uid: user.uid,
        });
        setSuccess(true);
        setFName("");
        setLName("");
        setEmail("");
        setPhone("");
        setPassword("");
      })
      .catch((error) => {
        setSuccess(false);
        // ..
      });

    // lưu dữ liệu vào firestore
  };

  return (
    <div className="max-w-container mx-auto text-center text-[#444]">
      <form
        className="block my-5"
        onSubmit={(e) => {
          handleSignUp(e);
          setCheckSubmit(true);
        }}
      >
        <h2 className="text-2xl font-semibold mb-5">Đăng ký</h2>
        <p>
          Nếu bạn đã có tài khoản,{" "}
          <Link
            to={routes.login}
            className="inline-block decoration-solid decoration-[#444] decoration-1 transition-all duration-150 hover:text-sky-500 text-[#444]"
          >
            đăng nhập tại đây!
          </Link>
        </p>

        <input
          type="text"
          placeholder="Họ"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          className="block w-100 px-5 py-2 my-4 border-solid border-[1px] border-[#ccc] outline-none rounded-sm mx-auto"
        />
        <input
          type="text"
          placeholder="Tên"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          className="block w-100 px-5 py-2 my-4 border-solid border-[1px] border-[#ccc] outline-none rounded-sm mx-auto"
        />
        <input
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-100 px-5 py-2 my-4 border-solid border-[1px] border-[#ccc] outline-none rounded-sm mx-auto"
        />
        <input
          type="tel"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="block w-100 px-5 py-2 my-4 border-solid border-[1px] border-[#ccc] outline-none rounded-sm mx-auto"
        />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-100 px-5 py-2 my-4 border-solid border-[1px] border-[#ccc] outline-none rounded-sm mx-auto"
        />
        <button
          type="submit"
          className="w-100 py-2 text-white bg-sky-500 font-normal uppercase text-sm mb-4 h-10 relative z-10 group"
        >
          Đăng ký
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-sky-400 z-[-1] w-0 transition-all duration-500 group-hover:w-full"></span>
        </button>
        {checkSubmit && <FormNotification success={success} />}
        {/* <Link to="/" className="block text-center text-[#444] text-sm">Quên mật khẩu</Link> */}
        <div className="text-center my-8 text-sm">
          <p>Hoặc đăng nhập bằng</p>
          <div className="flex items-center justify-center pb-5">
            <div className="flex items-center bg-[#3b5998] text-white my-2 cursor-pointer mx-2 select-none">
              <span className="py-2 px-4 border-solid border-r-[1px] border-[#244488] text-base">
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              <p className="py-2 px-2 text-sm">Facebook</p>
            </div>
            <div className="flex items-center bg-[#e14b33] text-white my-2 cursor-pointer mx-2 select-none">
              <span className="py-2 px-3 border-solid border-r-[1px] border-[#c2412d] text-base">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </span>
              <p className="py-2 px-2 text-sm">Google</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const FormNotification = ({ success }) => {
  return (
    <>
      {success ? (
        <p className="text-sm text-green-600">Đăng ký tài khoản thành công!</p>
      ) : (
        <p className="text-sm text-red-600">Đăng ký tài khoản thất bại!</p>
      )}
    </>
  );
};

export default SignUp;
