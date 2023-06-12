import { Link } from "react-router-dom";
import routes from "~/config/routes";

const Blog = ({ data }) => {
  return (
    <div className="text-[#444] flex lg:max-w-480px md:max-w-full mt-5">
      <Link to={`/blog/${data.id}`} className="w-158px h-auto block">
        <img
          src={data.img[0]}
          alt="blog img"
          className="w-full h-full object-cover object-center"
        />
      </Link>
      <div className="pl-4 flex-1">
        <div className="text-sm text-sky-500">{data.date}</div>
        <Link
          to={`/blog/${data.id}`}
          className="block text-lg my-2 font-semibold pr-10 transition-all duration-150 hover:text-sky-500"
        >
          {data.title}
        </Link>
      </div>
    </div>
  );
};

export default Blog;
