import React, { useContext, useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { ProductsContext } from "../context/productContextProvider";
import { Button, Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { shorten } from "../helper/function.js";
import SearchBox from "./SearchBox.js";
import { Link } from "react-router-dom";

const Store = () => {
  const products = useContext(ProductsContext);
  const [productsData, setProductsData] = useState(products);
  const [search, setSearch] = useState([]);
 
  useEffect(() => setProductsData(products), [products]);

  const searchProducts = () => {
    if (search) {
      const newProducts = products.filter((i) =>
        i.title.toLowerCase().includes(search)
      );
      setProductsData(newProducts);
    } else {
      setProductsData(products);
    }
  };

  return (
    <Container>
      <SearchBox
        searchProducts={searchProducts}
        search={search}
        setSearch={setSearch}
      />
      
      {/* <Link to="/mens"><Button variant="primary">Mens</Button></Link>
      <Link to="/womens"><Button variant="primary">Women</Button></Link>
      <Link to="/jewelery"><Button variant="primary">Jewelery</Button></Link>
      <Link to="/electronic"><Button variant="primary">Electronics</Button></Link> */}
 <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:"#0B5ED7"}}>
        Choose Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/mens">Mens</Dropdown.Item>
        <Dropdown.Item href="/womens">Wones</Dropdown.Item>
        <Dropdown.Item href="/jewelery">Jewelery</Dropdown.Item>
        <Dropdown.Item href="/electronic">Electronic</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     
      <Row>
        {productsData.map((product) => (
          <Col xs={6} md={4} key={product.id}>
            <Card
              style={{
                width: "250px",
                border: "1px solid silver",
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#fff",
                alignItems: "center",
                margin: "8px 10px 50px",
              }}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    width: "230px",
                    height: "200px",
                  }}
                />
                <Card.Text>{shorten(product.title)}</Card.Text>
                <Button variant="primary">{`${product.price} $`}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
