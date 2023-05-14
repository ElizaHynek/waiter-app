import { Link } from "react-router-dom";
import { Card, Row, Col, Button } from "react-bootstrap";

const SingleTable = props => {
	return (
		<div>
			<Card>
        <Card.Body>
          <Row>
            <Col xs={2}>
              <Card.Title as='h3'>Table {props.id}</Card.Title>
            </Col>
            <Col xs={8}>
              <Card.Text as='p'><strong>Status: </strong>{props.status}</Card.Text>
            </Col>
            <Col>
              <Link to={'/table/' + props.id}><Button variant='primary'>Show more</Button></Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
		</div>
	)
};

export default SingleTable;