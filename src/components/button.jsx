import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



const Button = ({ text, className = "", linkTo }) => {
  if(linkTo){
    return (
      <Link to={linkTo}
        className={`text-sm ${className} inline-flex items-center bg-sky-500 mt-4 text-white px-8 h-12 rounded-3xl relative overflow-hidden group z-[1] `}
        onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}
      >
        {text}
        <span className="ml-1 font-bold">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-sky-400 w-0 transition-all ease-linear duration-200 z-[-1] group-hover:w-full"></div>
      </Link>
    );
  }else{
    return (
      <button
        className={`text-sm ${className} flex items-center bg-sky-500 mt-4 text-white px-8 h-12 rounded-3xl relative overflow-hidden group z-[1] `}
      >
        {text}
        <span className="ml-1 font-bold">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-sky-400 w-0 transition-all ease-linear duration-200 z-[-1] group-hover:w-full"></div>
      </button>
    );
  }
};

export default Button;
