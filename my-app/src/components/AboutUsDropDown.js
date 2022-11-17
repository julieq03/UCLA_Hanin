import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Dropdown from "react-bootstrap/Dropdown";
import Dropdown from "rsuite/Dropdown";
import "rsuite/dist/rsuite.min.css";

export default function AboutUsDropDown() {
  return (
    <div>
      {/* <Dropdown className="dropdownMenu">
        <Dropdown.Toggle variant="success">About UCLA</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/kclubs/kojobs">학교</Dropdown.Item>
          <Dropdown.Item href="/kclubs/kubs">KUBS</Dropdown.Item>
          <Dropdown.Toggle variant="success">Submenu</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/kclubs/ksea">1</Dropdown.Item>
            <Dropdown.Item href="/kclubs/kubs">2</Dropdown.Item>
            <Dropdown.Item href="/kclubs/kubs">3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown> */}

      <Dropdown title="GeeksforGeeks">
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Menu title="SubMenu">
          <Dropdown.Item>Item 2A</Dropdown.Item>
          <Dropdown.Item>Item 2B</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
