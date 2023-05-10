import { Button, Form } from "react-bootstrap";

const Table = () => {

  return (
    <div className="">
      <h1>Table 1</h1>
      Status: <Form type="select"/>
      People: <Form type="select"/>
      Bill: <Form type="select"/> / <Form type="select"/>
      <Button variant="outline-info">Update</Button>
    </div>
  );
};
  
  export default Table;