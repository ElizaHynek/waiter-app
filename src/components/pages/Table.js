import { Row, Col, Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { getTableById, getAllTables } from "../../Redux/tablesRedux";
import { getStatus } from "../../Redux/statusRedux";
import { useState, useEffect } from "react";
import { fetchTables } from "../../Redux/tablesRedux";

const Table = () => {

    const { id } = useParams();
    //const tables = useSelector(getAllTables);
    const tableData = useSelector((state) => getTableById(state, id));
    //const statuses = useSelector(getStatus);

    const [status, setStatus] = useState(tableData.status);
    const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
    const [bill, setBill] = useState(tableData.bill);

    return (
        <>
          <h2>Table {id}</h2>
          <Form>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label as='legend' column sm={1}>
              <strong>Status:</strong>
              </Form.Label>
              <Col sm={3}>
                <Form.Select value={status} onChange={e => setStatus(e.target.value)}>
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
                <Form.Control type='number' value={peopleAmount} onChange={(e) => setPeopleAmount(e.target.value)} />
              </Col>
              /
              <Col sm={1}>
                <Form.Control type='number' value={maxPeopleAmount} onChange={(e) => setMaxPeopleAmount(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label column sm={1}>
              <strong>Bill:</strong>
              </Form.Label>
              <Col sm={2}>
                <Row>
                  <Col sm={1}>$</Col>
                  <Col sm={6}>
                    <Form.Control type='number' value={bill} onChange={(e) => setBill(e.target.value)}/>
                  </Col>
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