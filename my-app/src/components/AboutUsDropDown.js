import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";

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
        <Dropdown.Menu title="Item 2">
          <Dropdown.Item>Item 2A</Dropdown.Item>
          <Dropdown.Item>Item 2B</Dropdown.Item>
        </Dropdown.Menu>
        <Dropdown.Item>Item 3</Dropdown.Item>
        <Dropdown.Menu title="Item 4">
          <Dropdown.Menu title="Item 4A">
            <Dropdown.Item>Item 4A-A</Dropdown.Item>
            <Dropdown.Item>Item 4A-B</Dropdown.Item>
          </Dropdown.Menu>
          <Dropdown.Item>Item 4B</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
