import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Container, Spinner } from "react-bootstrap";
import { ProductsContext } from "../../context/productContextProvider";
import { shorten } from "../../helper/function";


const Electronic = () => {
  const products = useContext(ProductsContext);
  const data = products.filter((item) => item.category === "electronics");
  return (
    <Container>
      <Row>
        {data.length ?
        data.map((product) => (
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
        ))
        :  <Spinner style={{margin:"50px 500px 70px"}} /> 
      }
      </Row>
    </Container>
  );
};

export default Electronic;
