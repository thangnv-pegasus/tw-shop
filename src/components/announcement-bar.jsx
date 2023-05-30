import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { firebase_auth } from "~/config/firebase-config";
import routes from "~/config/routes";
import { AuthContext } from "~/context-api/auth-provider";

const AnnouncementBar = () => {
  const { user } = useContext(AuthContext);
  const nav = useNavigate();

  const handleSignOut = () => {
    signOut(firebase_auth)
      .then(() => {
        // Sign-out successful.
        nav("/");
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="w-full bg-sky-500">
      <div className="max-w-container mx-auto text-white text-sm leading-10 font-medium flex justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="text-lg">
              <FontAwesomeIcon icon={faClock} />
            </span>
            <p className="ml-2">Th2 - CN 9:00 AM - 21:00 PM </p>
          </div>
          <div className="flex items-center mx-10">
            <span className="text-base">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <a
              href="tel:+19006750"
              className="block ml-2 transition-all duration-150 hover:text-sky-700"
            >
              1900 6750
            </a>
          </div>
          <div className="flex items-center">
            <span className="text-lg">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <a
              href="mailto:ego.deploy@gmail.com"
              className="block ml-2 transition-all duration-150 hover:text-sky-700"
            >
              ego.deploy@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center">
          {user ? (
            <>
              <Link className="text-sm font-medium transition-all duration-15">
                {/* {user.last_name} */}
                {user.fieldName}
              </Link>
              <span className="mx-1">/</span>
              <p
                onClick={() => handleSignOut()}
                className="text-sm font-medium transition-all duration-150 cursor-pointer hover:text-sky-700"
              >
                Đăng xuất
              </p>
            </>
          ) : (
            <>
              <Link
                to={routes.login}
                className="text-sm font-medium transition-all duration-150 hover:text-sky-700"
              >
                Đăng nhập
              </Link>
              <span className="mx-1">/</span>
              <Link
                to={routes.signup}
                className="text-sm font-medium transition-all duration-150 hover:text-sky-700"
              >
                Đăng ký
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
