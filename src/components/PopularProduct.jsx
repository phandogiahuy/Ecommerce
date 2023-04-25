import { Row } from "antd";
import React from "react";
import styled from "styled-components";

import { popularProducts } from "../data";
import { mobile } from "../responsive";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{ marginTop: 5 }}
      >
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default PopularProduct;
