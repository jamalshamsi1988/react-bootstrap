import React from "react";
import { Button, Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { IoSearchSharp } from "react-icons/io5";
import Form from "react-bootstrap/Form";


const SearchBox = ({ setSearch, search, searchProducts }) => {
  return (
    <Container
    style={{ alignItems:"center",textAlign:"center" }}
    xs={6}
    md={4}
  >
      <Dropdown style={{display:"inline-block"}}>
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{ backgroundColor: "#0B5ED7"}}
      >
        Choose Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/mens">Mens</Dropdown.Item>
        <Dropdown.Item href="/womens">Wones</Dropdown.Item>
        <Dropdown.Item href="/jewelery">Jewelery</Dropdown.Item>
        <Dropdown.Item href="/electronic">Electronic</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Form.Control
      style={{
        display:"inline-block",
        height: "30px",
        width: "300px",
        border: "1px solid silver",
        borderRadius: " 5px",
        backgroundColor: "#f6f6f6",
        padding: "18px",
        margin: "30px 20px 30px",
      }}
      type="text"
      placeholder="Search Product"
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      id="inputText"
      aria-describedby="passwordHelpBlock"
    />
    <Button
      variant="primary"
      style={{ width: "50px"}}
      onClick={searchProducts}
    >
      <IoSearchSharp />
    </Button>
  </Container>
  );
};

export default SearchBox;
