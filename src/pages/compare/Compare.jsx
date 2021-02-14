import { useSelector } from "react-redux";
import Joblist from "../../components/joblist";

const Compare = () => {
  const { fav_list } = useSelector((state) => state.compare);

  return (
    <div>
      {fav_list.length ? <Joblist jobs={fav_list} /> : <h1>Select A Job</h1>}
    </div>
  );
};

export default Compare;
