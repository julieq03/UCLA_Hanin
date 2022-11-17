import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";

export default function KclubDropDown() {
  return (
    <div>
      <Dropdown className="dropdownMenu">
        <Dropdown.Toggle variant="success">K-clubs</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/kclubs/kojobs">KOJOBS</Dropdown.Item>
          <Dropdown.Item href="/kclubs/kubs">KUBS</Dropdown.Item>
          <Dropdown.Item href="/kclubs/ksea">KSEA</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
