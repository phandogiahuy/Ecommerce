import React from "react";

import { popularProducts } from "../data";
import Product from "./Product";
import { Row } from "antd";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const Title = styled.h1`
  font-weight: 700;
  margin: 10px;
  font-size: 50px;
`;
const PopularProduct = () => {
  return (
    <Container>
      <Title> NEW PRODUCTS </Title>
      <Row gutter={[16, 24]} style={{ marginTop: 5 }}>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default PopularProduct;
