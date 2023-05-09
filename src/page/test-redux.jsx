import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "~/redux/counter/counter.actions";

const Test = () => {
  const count = useSelector((state) => {
    return state.counter.count;
  });
  const dispatch = useDispatch();

  const handleIncreasement = () => {
    dispatch(increaseCounter());
  };

  const handleDecreasement = () => {
    dispatch(decreaseCounter());
  };
  return (
    <>
      <div>Count: {count}</div>
      <button
        onClick={() => handleDecreasement()}
        className="border-[1px] border-solid border-[#ccc] px-2"
      >
        Decrease Count
      </button>
      <button
        onClick={() => handleIncreasement()}
        className="border-[1px] border-solid border-[#ccc] px-2"
      >
        Increase Count
      </button>
    </>
  );
};

export default Test;
