import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Loading from "~/components/loading";
import PageTitle from "~/components/page-title";
import { firebase_auth, firebase_store } from "~/config/firebase-config";
import routes from "~/config/routes";

const SignUp = () => {
  return (
    <div>
      <Header />
      <PageTitle title="Đăng nhập ký tài khoản" />
      <SignUpForm />
      <Footer />
    </div>
  );
};

const SignUpForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [success, setSuccess] = useState(null);
  const nav = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // gửi lên firebase tín hiệu muốn đăng ký tài khoản
    // thực chất lúc này đã có tài khoản trên database của fire auth rồi
    // nhưng ta muốn dữ liệu này được lưu trên fire store để có thể dễ dàng lấy ra
    createUserWithEmailAndPassword(firebase_auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        const displayName = fName + " " + lName;
        // console.log(displayName);
        await setDoc(doc(firebase_store, "users", email), {
          first_name: fName,
          last_name: lName,
          displayName: displayName,
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
  };

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const SignInWithGoogle = async () => {
    const res = await signInWithPopup(firebase_auth, googleProvider);
    const check = getAdditionalUserInfo(res);
    const { displayName, email, uid, photoURL } = res.user;
    if (check.isNewUser == true) {
      await setDoc(doc(firebase_store, "users", uid), {
        displayName,
        photoURL,
        uid,
        email,
        timestamp: serverTimestamp(),
      });
    }

    nav("/");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const SignInWithFacebook = async () => {
    const res = await signInWithPopup(firebase_auth, facebookProvider);
    const check = getAdditionalUserInfo(res);
    const { displayName, email, uid, photoURL } = res.user;
    if (check.isNewUser == true) {
      await setDoc(doc(firebase_store, "users", uid), {
        displayName,
        photoURL,
        uid,
        email,
        timestamp: serverTimestamp(),
      });
    }

    nav("/");
  };

  return (
    <div className="max-w-container mx-auto text-center text-textColor">
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
            className="inline-block decoration-solid decoration-[#444] decoration-1 transition-all duration-150 hover:text-sky-500 text-textColor"
          >
            đăng nhập tại đây!
          </Link>
        </p>

        <input
          type="text"
          placeholder="Họ"
          value={fName}
          onChange={(e) => {
            setFName(e.target.value);
            setSuccess(null);
          }}
          className="block w-100 px-5 py-2 my-4 border-solid border-[1px] border-[#ccc] outline-none rounded-sm mx-auto"
        />
        <input
          type="text"
          placeholder="Tên"
          value={lName}
          onChange={(e) => {
            setLName(e.target.value);
            setSuccess(null);
          }}
          className="block w-100 px-5 py-2 my-4 border-solid border-[1px] border-[#ccc] outline-none rounded-sm mx-auto"
        />
        <input
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setSuccess(null);
          }}
          className="block w-100 px-5 py-2 my-4 border-solid border-[1px] border-[#ccc] outline-none rounded-sm mx-auto"
        />
        <input
          type="tel"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setSuccess(null);
          }}
          className="block w-100 px-5 py-2 my-4 border-solid border-[1px] border-[#ccc] outline-none rounded-sm mx-auto"
        />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setSuccess(null);
          }}
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
        {/* <Link to="/" className="block text-center text-textColor text-sm">Quên mật khẩu</Link> */}
        <div className="text-center my-8 text-sm">
          <p>Hoặc đăng nhập bằng</p>
          <div className="flex items-center justify-center pb-5">
            <div className="flex items-center bg-[#3b5998] text-white my-2 cursor-pointer mx-2 select-none">
              <span
                className="py-2 px-4 border-solid border-r-[1px] border-[#244488] text-base"
                onClick={() => {
                  SignInWithFacebook();
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              <p className="py-2 px-2 text-sm">Facebook</p>
            </div>
            <div className="flex items-center bg-[#e14b33] text-white my-2 cursor-pointer mx-2 select-none">
              <span
                className="py-2 px-3 border-solid border-r-[1px] border-[#c2412d] text-base"
                onClick={() => {
                  SignInWithGoogle();
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
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
      {success === true && (
        <p className="text-sm text-green-600">Đăng ký tài khoản thành công!</p>
      )}
      {success === false && (
        <p className="text-sm text-red-600">
          Đăng ký tài khoản không thành công!
        </p>
      )}
      {success == null && ""}
    </>
  );
};

export default SignUp;
