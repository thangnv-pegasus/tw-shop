import { Link } from "react-router-dom";

const BlogItem = ({ data }) => {
  return (
    <div className="w-full">
      <Link to={`/blog/${data.id}`} className="w-full h-270px relative block">
        <img
          src={data.img}
          alt="img"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute top-0 left-0 bg-sky-300 text-white text-sm font-normal py-1 px-2">
            {data.date}
        </div>
      </Link>
      <p className="py-2 text-sm font-medium text-[#6e7874]">Đăng bởi: {data.author}</p>
      <Link to={`/blog/${data.id}`} className="text-base text-[#444] font-bold transition-all duration-200 hover:text-sky-500">{data.title}</Link>
    </div>
  );
};

export default BlogItem;
