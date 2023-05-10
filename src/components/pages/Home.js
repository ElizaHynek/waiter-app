import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = props => {

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1>All tables</h1>
        <Link key={props.id} to={"/table/:id"}>
          <Button variant="outline-info">View table</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;