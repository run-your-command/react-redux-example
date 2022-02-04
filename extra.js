import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, clearNumber } from "../lib/actions/Actions";

const Home = (props) => {
  const getState = useSelector((state) => state.actionCombined);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="Home-name">Hi, There {getState}!</h1>
      <button
        onClick={() => {
          dispatch(incNumber());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decNumber());
        }}
      >
        -
      </button>
      <input className="box-input" value={getState} onChange={() => {}} />
      <button
        onClick={() => {
          dispatch(clearNumber());
        }}
      >
        clear➞
      </button>
    </>
  );
};

export default Home;
