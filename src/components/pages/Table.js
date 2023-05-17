import { Row, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Table = () => {

    const { id } = useParams();

    return (
        <>
          <h2>Table {id}</h2>
          <Form>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label as='legend' column sm={1}>
              <strong>Status:</strong>
              </Form.Label>
              <Col sm={3}>
                <Form.Select >
                  <option value='Busy'>Busy</option>
                  <option value='Free'>Free</option>
                  <option value='Cleaning'>Cleaning</option>
                  <option value='Reserved'>Reserved</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={1}>
                <strong>People:</strong>
              </Form.Label>
              <Col sm={1}>
                <Form.Control type='text' placeholder={'peopleAmount'}/>
              </Col>
              /
              <Col sm={1}>
                <Form.Control type='text' />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={1}>
              <strong>Bill:</strong>
              </Form.Label>
              <Col sm={2}>
                <Row>
                <Col sm={1}>$</Col><Col sm={6}><Form.Control type='text'/></Col>
                </Row>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-2'>
              <Col>
                <Button type='submit' variant='primary'>Update</Button>
              </Col>
            </Form.Group>
          </Form>
        </>
    );
};

export default Table;