import { Link } from "react-router-dom";
import routes from "~/config/routes";

const Banner = () => {
  return (
    <Link to={routes.home}>
      <img
        src="https://bizweb.dktcdn.net/100/382/483/themes/758809/assets/slider_1.jpg?1664096870043"
        alt="banner"
      />
    </Link>
  );
};

export default Banner;
