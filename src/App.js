import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Table from "./components/pages/Table";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
