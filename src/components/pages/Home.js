import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = props => {

  return (
    <div>
      <h1>All tables</h1>
      <div className="d-flex justify-content-between">
        <div className="table">
          <p className="fs-2">Table 1 <span className="fs-5"><b>Status: </b>busy</span></p>
        </div>
        <Link key={props.id} to={"/table/:id"}>
          <Button variant="outline-info">View table</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;