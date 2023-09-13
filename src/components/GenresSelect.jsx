import { Dropdown } from "react-bootstrap";

const GenresSelect = () => {
  return (
    <div className="d-flex align-items-center mb-4">
      <h1 className="text-white m-0 me-5">TV SHOWS</h1>
      <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Generi
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#">Commedia</Dropdown.Item>
          <Dropdown.Item href="#">Dramma</Dropdown.Item>
          <Dropdown.Item href="#">Documentari</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default GenresSelect;
