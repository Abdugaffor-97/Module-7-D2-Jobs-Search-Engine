import { useSelector } from "react-redux";

const Compare = (props) => {
  const { fav_list } = useSelector((state) => state.compare);

  return fav_list.map((fav_job, idx) => <h1 key={idx}>job</h1>);
};

export default Compare;
