
import { useSelector } from "react-redux";
import { getAllTables } from "../../Redux/tablesRedux";
import SingleTable from "../features/SingleTable";


const Home = () => {

  const tables = useSelector(getAllTables);

  return (
    <div>
      <h1>All tables</h1>
      <div className="d-flex justify-content-between">
        {tables.map(table => <SingleTable key={table.id} {...table} /> )}
      </div>
    </div>
  );
};

export default Home;